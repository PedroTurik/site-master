export type Lang = 'pt' | 'en';
export type RouteKey = 'home' | 'about' | 'manufacturers' | 'distributors' | 'chinaHub' | 'renewables' | 'contact' | 'privacy';

export const routes: Record<RouteKey, Record<Lang, string>> = {
  home: { pt: '/', en: '/en/' },
  about: { pt: '/empresa/', en: '/en/about/' },
  manufacturers: { pt: '/fabricantes/', en: '/en/manufacturers/' },
  distributors: { pt: '/distribuidores/', en: '/en/distributors/' },
  chinaHub: { pt: '/china-hub/', en: '/en/china-hub/' },
  renewables: { pt: '/renovaveis/', en: '/en/renewables/' },
  contact: { pt: '/contato/', en: '/en/contact/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
};

export const mfrBase: Record<Lang, string> = { pt: '/fabricantes/', en: '/en/manufacturers/' };
export const mfrUrl = (lang: Lang, slug: string) => `${mfrBase[lang]}${slug}/`;
export const url = (lang: Lang, key: RouteKey, hash = '') => routes[key][lang] + hash;
