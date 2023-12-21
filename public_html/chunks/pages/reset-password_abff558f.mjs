/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_a70aee5d.mjs';
import 'clsx';
import { A as Account } from './login_522805d6.mjs';
import { a as $$Base } from './404_20bb4f26.mjs';

const $$Astro = createAstro("https://omniherald.com");
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  const { pathname } = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "showFooter": false, "headerBg": "bg-transparent" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Account", Account, { "description": "To reset your password, enter your account's email address below. We'll send you an email with instructions for creating a new password", "title": "Reset Password", "pathname": pathname })} </main> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/reset-password.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/reset-password.astro";
const $$url = "/reset-password";

export { $$ResetPassword as default, $$file as file, $$url as url };
