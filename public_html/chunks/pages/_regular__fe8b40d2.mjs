/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, g as renderComponent, F as Fragment } from '../astro_a70aee5d.mjs';
import 'clsx';
import { g as getCollection, h as humanize, m as markdownify, $ as $$LineBg, a as $$Base } from './404_20bb4f26.mjs';

const $$Astro$3 = createAstro("https://omniherald.com");
const getSinglePage = async (collection) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
const $$ContentParser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentParser;
  return renderTemplate``;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/lib/contentParser.astro", void 0);

const $$Astro$2 = createAstro("https://omniherald.com");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { className } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": Astro2.url.pathname === "/" ? "page" : void 0
    }
  ];
  paths.forEach((label, i) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" && parts.push({
      label: humanize(label.replace(/[-_]/g, " ")) || "",
      href,
      "aria-label": Astro2.url.pathname === href ? "page" : void 0
    });
  });
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up-sm" data-aos-dealy="50"> <nav aria-label="Breadcrumb"${addAttribute(className, "class")}> <ol class="inline-flex" role="list"> ${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="breadcrumb-list-item" role="listitem"> ${index > 0 && renderTemplate`<span class="ml-3 mr-2 inline-block">/</span>`} ${index !== parts.length - 1 ? renderTemplate`<a class="text-primary"${spreadAttributes(attrs)}> ${label} </a>` : renderTemplate`<span class="text-primary">${label}</span>`} </li>`)} </ol> </nav> </div>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/Breadcrumbs.astro", void 0);

const $$Astro$1 = createAstro("https://omniherald.com");
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const {
    title = "",
    description = "",
    breadcrumb = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section page-header relative overflow-hidden pb-96 after:z-10"> <div class="container relative z-30"> <div class="row items-center"> <div class="mx-auto text-center lg:col-8"> ${title && renderTemplate`<h1 class="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]" data-aos="fade-up-sm"> ${humanize(title)} </h1>`} ${breadcrumb && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "mt-6 breadcrumb" })}`} ${description && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <hr class="mx-auto mb-6 h-[1px] w-[100px] border-0 border-b border-t border-dark border-opacity-50 bg-transparent" data-aos="fade-up-sm" data-aos-delay="50"> <p class="mb-6 text-[20px]" data-aos="fade-up-sm" data-aos-delay="100"> ${markdownify(description)} </p> ` })}`} </div> </div> </div> <!-- End Main Content --> ${renderComponent($$result, "LineBg", $$LineBg, { "className": "absolute z-20", "color": "bg-line-black" })} <!-- End background lines --> <!-- Start Shape background --> <div class="pointer-events-none absolute left-0 top-[5%] z-30 hidden select-none lg:block" data-aos="fade-up-sm"></div> <div class="pointer-events-none absolute right-0 top-[25%] z-30 hidden select-none lg:block" data-aos="fade-up-sm"></div> </section> <!-- End Page Header -->`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/partials/PageHeader.astro", void 0);

const $$Astro = createAstro("https://omniherald.com");
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const { Content } = await page.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<section class="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]"> <div class="container"> <div class="row"> <div class="mx-auto md:col-11"> <div data-aos="fade-up-sm" data-aos-delay="100" class="shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-24 lg:py-24"> <div class="content prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </div> <!-- End Main Content --> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/[regular].astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/[regular].astro";
const $$url = "/[regular]";

const _regular_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageHeader as $, _regular_ as _, getSinglePage as g };
