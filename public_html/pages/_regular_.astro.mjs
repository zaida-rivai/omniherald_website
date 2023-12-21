export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/_regular__fe8b40d2.mjs').then(n => n._);

export { page };
