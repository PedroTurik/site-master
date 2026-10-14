// POST { password, files: { [name]: { sha, data } } } → validates and commits the changed texts.
// `sha` is the version the editor loaded; if the file changed since, the save is refused (409).
import { createHash } from 'node:crypto';
import type { APIRoute } from 'astro';
import { checkAuth, commitContent, GitHubError, json, readContent } from '../../../lib/admin-server';
import { lockedError, shapeError } from '../../../lib/content-shape';

export const prerender = false;

/** Git blob id of a text file (what GitHub reports as the file's sha). */
const blobSha = (text: string) => {
  const buf = Buffer.from(text, 'utf8');
  return createHash('sha1').update(`blob ${buf.length}\0`).update(buf).digest('hex');
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => ({}));
  const denied = await checkAuth(body.password);
  if (denied) return denied;

  const incoming: Record<string, { sha: string; data: any }> = body.files ?? {};
  const names = Object.keys(incoming);
  if (!names.length) return json({ error: 'Nada para salvar.' }, 400);

  try {
    const { head, files } = await readContent();
    const out: Record<string, string> = {};
    for (const name of names) {
      const cur = files[name];
      if (!cur) return json({ error: `Arquivo desconhecido: ${name}` }, 400);
      if (cur.sha !== incoming[name].sha) {
        return json({ error: `“${name}” foi alterado por outra pessoa. Recarregue a página para ver a versão atual.` }, 409);
      }
      const err = shapeError(cur.data, incoming[name].data) ?? lockedError(cur.data, incoming[name].data);
      if (err) return json({ error: `${name}: ${err}` }, 400);
      out[name] = JSON.stringify(incoming[name].data, null, 2) + '\n';
    }
    const commit = await commitContent(head, out, `content: update ${names.join(', ')} (via /admin)`);
    // New versions for the editor, so a second save from the same session isn't seen as a conflict.
    const saved = Object.fromEntries(names.map((n) => [n, { sha: blobSha(out[n]), data: incoming[n].data }]));
    return json({ commit, files: saved });
  } catch (e) {
    console.error(e);
    if (e instanceof GitHubError && e.status === 422) {
      return json({ error: 'O site foi atualizado enquanto você editava. Recarregue e tente de novo.' }, 409);
    }
    return json({ error: 'Falha ao salvar no GitHub.' }, 502);
  }
};
