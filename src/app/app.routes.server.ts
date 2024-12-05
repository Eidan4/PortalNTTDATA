import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // Ruta raíz
    renderMode: RenderMode.Server, // Renderiza en modo servidor
  },
  {
    path: 'summary', // Ruta de resumen
    renderMode: RenderMode.Server, // Renderiza en modo servidor
  },
];
