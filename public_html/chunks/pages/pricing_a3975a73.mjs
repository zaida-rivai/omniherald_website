/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, g as renderComponent, f as addAttribute } from '../astro_a70aee5d.mjs';
import { e as getEntryBySlug, m as markdownify, $ as $$LineBg, b as $$Image, a as $$Base } from './404_20bb4f26.mjs';
import 'clsx';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa/index.js';
import { $ as $$PageHeader } from './_regular__fe8b40d2.mjs';

const $$Astro$1 = createAstro("https://omniherald.com");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Faq;
  const { data } = await getEntryBySlug("sections", "faq");
  const { faqs } = data;
  return renderTemplate`<!-- Faq -->${maybeRenderHead()}<section class="section-md faq relative z-20 after:-z-10"> <div class="container relative z-30"> <div class="row gy-4 justify-between"> <div class="lg:col-5"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm"> ${data.subtitle} </span> <div class="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6" data-aos="fade-up-sm" data-aos-delay="50"> <h2 class="font-semibold">${unescapeHTML(markdownify(data.title))}</h2> </div> <p class="pl-6 text-lg" data-aos="fade-up-sm" data-aos-delay="100">${unescapeHTML(markdownify(data.description))}</p> </div> <div class="lg:col-6"> ${faqs.map(
    (faq) => renderTemplate`<div data-aos="fade-up-sm" class="accordion"> <button type="button" class="accordion-header w-full text-xl font-medium" data-accordion> <span>${unescapeHTML(markdownify(faq.title))}</span> ${renderComponent($$result, "FaChevronDown", FaChevronDown, {})} </button> <div class="accordion-content"> <p>${unescapeHTML(markdownify(faq.body))}</p> </div> </div>`
  )} </div> </div> </div> ${renderComponent($$result, "LineBg", $$LineBg, { "className": "z-20" })} </section> <!-- End Faq -->`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/partials/Faq.astro", void 0);

const $$Astro = createAstro("https://omniherald.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const entry = await getEntryBySlug("pages", "pricing");
  const { title, pricing } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} <!-- Pricing --> <section class="section relative z-20 mt-[-26rem] overflow-hidden"> <div class="container relative"> <div class="row g-5"> <div class="relative order-2 lg:col-10 xl:col-8 xl:order-0"> <div class="shadow-default flex flex-col justify-between rounded-xl bg-white px-8 py-12 md:flex-row xl:px-14"> ${pricing.plans.map((plan) => renderTemplate`<div data-aos="fade-up-sm" class="px-0 py-3 sm:px-2"> <div class="mb-6 flex items-center gap-4"> ${renderComponent($$result2, "Image", $$Image, { "width": 50, "height": 50, "src": plan.icon, "alt": "icon", "class": "rounded-md" })} ${plan.tag && renderTemplate`<span class="rounded-[4px] bg-black px-4 py-[3px] align-middle text-sm font-medium capitalize text-white"> ${plan.tag} </span>`} </div> <h2 class="mb-3 text-xl font-bold text-dark sm:text-2xl">${unescapeHTML(markdownify(plan.title))}</h2> <p class="mb-6 text-dark">${unescapeHTML(markdownify(plan.subtitle))}</p> <div class="border-b border-b-border border-opacity-70 pb-6 block w-full"> <h2 class="h1 plan-price">${unescapeHTML(markdownify("$" + plan.price))}</h2> </div> <ul class="pricing-details"> ${plan.content.map((item) => renderTemplate`<li class="relative mb-5 pl-5 before:absolute before:left-0 before:top-[6px] before:h-[25px] before:w-[25px] before:bg-no-repeat before:content-[''] last-of-type:mb-0">${unescapeHTML(markdownify(item))}</li>`)} </ul> <a href="#?"${addAttribute(`btn btn-icon ${plan.type.toLowerCase() === "enterprise" ? "btn-primary" : "btn-outline-primary"}`, "class")}>
Start Free Trial
${renderComponent($$result2, "FaChevronRight", FaChevronRight, {})} </a> </div>`)} </div> <!-- Start Bg Shape --> <div data-aos="fade-right-sm" class="pointer-events-none absolute left-[-6%] top-[-6%] -z-10 hidden select-none xl:block"> <img class="inject-svg text-quaternary" src="/images/shapes/pricing-s-1.svg" alt="shape"> </div> <div data-aos="fade-left-sm" class="pointer-events-none absolute bottom-[-12%] right-[-2%] -z-10 hidden select-none xl:block"> <img class="inject-svg text-tertiary" src="/images/shapes/pricing-s-2.svg" alt="shape"> </div> <!-- End Bg Shape --> </div> <div class="lg:col-12 xl:col-4"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm"> ${pricing.subtitle} </span> <div class="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6" data-aos="fade-up-sm" data-aos-delay="50"> <h2 class="font-semibold">${markdownify(pricing.title)}</h2> </div> <p class="mb-8 pl-6 text-lg" data-aos="fade-up-sm" data-aos-delay="100"> ${markdownify(pricing.description)} </p> <span data-aos="fade-up-sm" data-aos-delay="150"> ${pricing.button.enable && renderTemplate`<a href="/login" class="btn btn-outline-primary btn-icon ml-6 max-w-[250px] md:max-w-[300px]"> ${pricing.button.label} ${renderComponent($$result2, "FaChevronRight", FaChevronRight, { "className": "ml-4" })} </a>`} </span> </div> </div> </div> </section> <!-- ./end Pricing --> ${renderComponent($$result2, "Faq", $$Faq, {})} </main> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/pricing.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/pricing.astro";
const $$url = "/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
