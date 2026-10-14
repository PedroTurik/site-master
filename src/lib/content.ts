// Page copy lives in src/content/*.json (edited through /admin). Values computed at build
// time — years in business, number of manufacturers… — are written there as {placeholders}.
export function fill<T>(obj: T, vars: Record<string, string | number>): T {
  const walk = (v: unknown): unknown =>
    typeof v === 'string' ? v.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
    : Array.isArray(v) ? v.map(walk)
    : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]))
    : v;
  return walk(obj) as T;
}
