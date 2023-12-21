/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_a70aee5d.mjs';
import 'clsx';
import { A as Account } from './login_522805d6.mjs';
import { a as $$Base } from './404_20bb4f26.mjs';

const $$Astro = createAstro("https://omniherald.com");
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  const { pathname } = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "showFooter": false, "headerBg": "bg-transparent" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Account", Account, { "title": "Sign up", "description": "Donec rutrum congue leo eget malesuada. Sed porttitor nibh. Cras ultricies ligula sed magna dictum porta. Vestibulum", "pathname": pathname }, { "default": ($$result3) => renderTemplate` <p class="mt-6 text-center">
Already have account?${" "} <a class="font-medium underline underline-offset-2 hover:no-underline" href="/login">
Login
</a> </p> ` })} </main> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/sign-up.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/sign-up.astro";
const $$url = "/sign-up";

export { $$SignUp as default, $$file as file, $$url as url };
