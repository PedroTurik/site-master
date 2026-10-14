// POST { password } → current site texts, straight from GitHub (so the editor never shows a stale build).
import type { APIRoute } from 'astro';
import { checkAuth, json, readContent } from '../../../lib/admin-server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => ({}));
  const denied = await checkAuth(body.password);
  if (denied) return denied;
  try {
    return json(await readContent());
  } catch (e) {
    console.error(e);
    return json({ error: 'Não foi possível ler os textos do GitHub.' }, 502);
  }
};
