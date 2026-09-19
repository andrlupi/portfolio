/**
 * Retorna o caminho devidamente prefixado com o BASE_URL do Astro.
 * Garante que tanto localmente quanto no GitHub Pages (sob /portfolio/) os links e ativos funcionem perfeitamente sem 404.
 */
export function getUrl(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${cleanPath}`;
}
