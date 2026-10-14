// Server-only helpers for /admin: password check and reading/committing src/content/*.json
// through the GitHub API. A commit to the branch triggers a Vercel redeploy.
import { createHash, timingSafeEqual } from 'node:crypto';
import { ADMIN_PASSWORD, GITHUB_TOKEN, GITHUB_REPO, GITHUB_BRANCH } from 'astro:env/server';

export const CONTENT_DIR = 'src/content';

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

const digest = (s: string) => createHash('sha256').update(s).digest();

/** Returns an error Response when the request is not authorised, otherwise null. */
export async function checkAuth(password: unknown): Promise<Response | null> {
  if (!ADMIN_PASSWORD || !GITHUB_TOKEN) return json({ error: 'Admin is not configured (ADMIN_PASSWORD / GITHUB_TOKEN).' }, 500);
  if (typeof password !== 'string' || !timingSafeEqual(digest(password), digest(ADMIN_PASSWORD))) {
    await new Promise((r) => setTimeout(r, 1000)); // slow down guessing
    return json({ error: 'Senha incorreta.' }, 401);
  }
  return null;
}

export class GitHubError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

async function gh<T = any>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
  if (!res.ok) throw new GitHubError(res.status, `GitHub ${init.method ?? 'GET'} ${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

export interface ContentFile { sha: string; data: any }

/** Current content files on the branch head, keyed by name (without .json). */
export async function readContent(ref = GITHUB_BRANCH): Promise<{ head: string; files: Record<string, ContentFile> }> {
  const head = (await gh(`/git/ref/heads/${GITHUB_BRANCH}`)).object.sha as string;
  const list: { name: string; sha: string; type: string }[] = await gh(`/contents/${CONTENT_DIR}?ref=${ref === GITHUB_BRANCH ? head : ref}`);
  const entries = await Promise.all(
    list.filter((f) => f.type === 'file' && f.name.endsWith('.json')).map(async (f) => {
      const blob = await gh(`/git/blobs/${f.sha}`);
      const data = JSON.parse(Buffer.from(blob.content, 'base64').toString('utf8'));
      return [f.name.replace(/\.json$/, ''), { sha: f.sha, data }] as const;
    }),
  );
  return { head, files: Object.fromEntries(entries) };
}

/** Commits the given files (name → pretty JSON text) on top of `head` as a single commit. */
export async function commitContent(head: string, files: Record<string, string>, message: string) {
  const baseTree = (await gh(`/git/commits/${head}`)).tree.sha;
  const tree = await gh('/git/trees', {
    method: 'POST',
    body: JSON.stringify({
      base_tree: baseTree,
      tree: Object.entries(files).map(([name, content]) => ({ path: `${CONTENT_DIR}/${name}.json`, mode: '100644', type: 'blob', content })),
    }),
  });
  const commit = await gh('/git/commits', { method: 'POST', body: JSON.stringify({ message, tree: tree.sha, parents: [head] }) });
  // force: false → fails if someone pushed in between; the editor then asks to reload.
  await gh(`/git/refs/heads/${GITHUB_BRANCH}`, { method: 'PATCH', body: JSON.stringify({ sha: commit.sha, force: false }) });
  return { sha: commit.sha as string, url: `https://github.com/${GITHUB_REPO}/commit/${commit.sha}` };
}
