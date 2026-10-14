// Rules shared by the /admin editor and the save endpoint: the editor may change text,
// never the structure (keys, list lengths) nor the internal ids (photo names, icons, route keys).

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };
export type Path = (string | number)[];

const ID = /^[a-z][\w-]*$/;

/** A string that is the same id-like token in PT and EN (e.g. 'wafer', 'manufacturers') is structural. */
export const isLocked = (pt: unknown, en: unknown) => typeof pt === 'string' && pt === en && ID.test(pt);

/** Returns the first difference in structure between `a` and `b`, or null when they match. */
export function shapeError(a: Json, b: Json, path: Path = []): string | null {
  const at = path.join('.') || '(root)';
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return `${at}: list changed`;
    for (let i = 0; i < a.length; i++) {
      const e = shapeError(a[i], b[i], [...path, i]);
      if (e) return e;
    }
    return null;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object' || Array.isArray(b)) return `${at}: expected object`;
    const ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length !== kb.length || ka.some((k) => !(k in b))) return `${at}: keys changed`;
    for (const k of ka) {
      const e = shapeError(a[k], (b as Record<string, Json>)[k], [...path, k]);
      if (e) return e;
    }
    return null;
  }
  if (typeof a !== typeof b) return `${at}: type changed`;
  if (typeof a !== 'string' && a !== b) return `${at}: value is not editable`;
  return null;
}

/** Locked (structural) strings that differ between `orig` and `next`, for files shaped { pt, en }. */
export function lockedError(orig: { pt: Json; en: Json }, next: { pt: Json; en: Json }): string | null {
  const walk = (pt: Json, en: Json, npt: Json, nen: Json, path: Path): string | null => {
    if (isLocked(pt, en)) return pt === npt && en === nen ? null : `${path.join('.')}: value is not editable`;
    if (pt && typeof pt === 'object') {
      for (const k of Object.keys(pt)) {
        const e = walk((pt as any)[k], (en as any)?.[k], (npt as any)?.[k], (nen as any)?.[k], [...path, k]);
        if (e) return e;
      }
    }
    return null;
  };
  return walk(orig.pt, orig.en, next.pt, next.en, []);
}
