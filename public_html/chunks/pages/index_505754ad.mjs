/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML, f as addAttribute } from '../astro_a70aee5d.mjs';
import { e as getEntryBySlug, b as $$Image, $ as $$LineBg, D as DynamicIcon, a as $$Base, m as markdownify, p as plainify, d as $$Social, c as config } from './404_20bb4f26.mjs';
import { g as getSinglePage, $ as $$PageHeader } from './_regular__fe8b40d2.mjs';
import { s as sortByDate, $ as $$Pagination } from './_slug__de05962f.mjs';
import FaIcons from 'react-icons/fa/index.js';
import 'clsx';
import { $ as $$OpenPosition } from './about_1173bae8.mjs';
import { $ as $$BlogCard } from './_single__06d6ab90.mjs';

const $$Astro$6 = createAstro("https://omniherald.com");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  const homepage = await getEntryBySlug("homepage", "index");
  const latestPostsLenght = 3;
  const posts = await getSinglePage("posts");
  sortByDate(posts).slice(0, latestPostsLenght);
  const {
    banner,
    features,
    showcase,
    funfacts,
    services,
    article,
    brands
  } = homepage.data;
  const icons = FaIcons;
  const { FaCheck, FaWindows, FaHashtag, FaDropbox, FaAndroid } = icons;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Banner --> <section class="section banner relative overflow-hidden before:z-10 after:z-10"> <div class="container relative z-30"> <div class="row items-center"> <div class="lg:col-6"> <h1 data-aos="fade-up-sm" class="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]">${unescapeHTML(banner.title)}</h1> <p data-aos="fade-up-sm" data-aos-delay="150" class="mb-6 text-lg">${unescapeHTML(banner.content)}</p> <!-- Banner newletter --> ${banner.newsletter && renderTemplate`<form data-aos="fade-up-sm" data-aos-delay="200" class="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row"> <input type="search" class="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left" placeholder="Enter Your Email Address"> <button type="submit" class="btn btn-primary btn-md">
Sign up for our newsletter!
</button> </form>`} <span data-aos="fade-right" data-aos-delay="250" class="align-middle text-lg font-bold text-dark"></span> <ul class="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-7 xs:mt-0 xs:inline-flex"></ul> <ul class="flex flex-wrap gap-x-6 gap-y-2"> ${banner.supported.facility.map((item, index) => renderTemplate`<li data-aos="fade-in"${addAttribute(100 + 50 * index, "data-aos-delay")}> ${renderComponent($$result2, "FaCheck", FaCheck, { "className": "text-emerald-400 inline-block mr-2 text-xl" })} <p class="inline-block align-middle text-lg font-medium text-dark"> ${item} </p> </li>`)} </ul> </div> <div class="mx-auto max-w-[600px] pt-24 lg:col-6 lg:pt-0"> <div data-aos="fade-up-sm" class="image-block relative mr-[5.5%] md:mr-6 lg:ml-6"> ${renderComponent($$result2, "Image", $$Image, { "data-aos": "fade-down-sm", "data-aos-delay": "150", "class": "banner-image w-100 h-auto", "src": "/images/banner/banner-image.jpg", "width": 448, "height": 564, "alt": "banner-image" })} <!-- Start Start Bg Shape --> <div data-aos="fade-up-sm" class="pointer-events-none absolute left-[40px] top-[-50px] -z-20 w-[40%] select-none"></div> <div data-aos="fade-down-sm" class="pointer-events-none absolute bottom-[-70px] right-[-130px] -z-20 w-[40%] select-none"></div> <!-- End Start Bg Shape --> </div> </div> </div> </div> <!-- End Main Content --> ${renderComponent($$result2, "LineBg", $$LineBg, { "className": "absolute z-20", "color": "bg-line-yellow" })} </section> <!-- /Banner --> <!-- Brand section --> <section class="md:section"> <div class="container"> <div class="mb-100 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm"> <p>
Trusted by leading companies and startup incubators:
</p> </div> </div> <div class="shadow-default relative z-20 mx-3 max-w-[1440px] rounded-xl bg-white py-8 md:mx-6 md:py-16 lg:mx-auto"> <div class="container"> <div class="row justify-center"> ${brands.map((brand) => renderTemplate`<div class="col-5 sm:col-3 lg:col-2" data-aos="fade-up-sm" data-aos-delay="500"> ${renderComponent($$result2, "Image", $$Image, { "width": 169, "height": 60, "src": brand, "alt": "brand logo", "class": "inline-block py-4 sm:mx-auto" })} </div>`)} </div> </div> </div> </section> <!-- End Brands Section --> <!-- Features --> <section class="section features relative z-20 overflow-hidden after:-z-10"> <div class="container relative z-30"> <div class="row items-end justify-between pb-12"> <div class="lg:col-8 xl:col-6"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm"> ${features.subtitle} </span> <div class="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0" data-aos="fade-up-sm"> <h2 class="mb-6 font-semibold" data-aos="fade-up-sm" data-aos-delay="50"> ${features.title} </h2> <p class="text-lg" data-aos="fade-up-sm" data-aos-delay="100"> ${features.description} </p> </div> </div> <div class="col-auto" data-aos="fade-right-sm" data-aos-delay="150"> ${features.button.enable && renderTemplate`<a${addAttribute(features.button.link, "href")} class="btn btn-outline-primary btn-sm"> ${features.button.label} </a>`} </div> </div> <div class="colored-box-icon row gy-4"> ${features.list.map((feature, index) => {
    icons[feature.icon];
    return renderTemplate`<div data-aos="fade-up-sm"${addAttribute(200 + 50 * index, "data-aos-delay")} class="md:col-6 lg:col-4 xl:col-3"> <div class="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm"> <div class="icon-box"> ${renderComponent($$result2, "DynamicIcon", DynamicIcon, { "icon": feature.icon })} </div> <h3 class="mb-6 text-xl font-semibold sm:text-2xl"> ${feature.title} </h3> <p>${feature.description}</p> </div> </div>`;
  })} </div> </div> <!-- Start Bg Shape --> <div data-aos="fade-left-sm" class="pointer-events-none absolute top-0 hidden select-none min-[1440px]:block"></div> <div data-aos="fade-right-sm" class="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"></div> <!-- End Bg Shape --> ${renderComponent($$result2, "LineBg", $$LineBg, { "className": "line-bg absolute z-20", "color": "bg-line-sky" })} </section> <!-- /Features --> <!-- Showcase --> <section class="section relative z-20 overflow-hidden"> <div class="container"> <div class="row pb-12 text-center"> <div class="mx-auto lg:col-7"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm" data-aos-delay="50"> ${showcase.subtitle} </span> <h2 class="mb-6 font-semibold" data-aos="fade-up-sm" data-aos-delay="100"> ${showcase.title} </h2> <p class="text-lg" data-aos="fade-up-sm" data-aos-delay="150"> ${showcase.description} </p> </div> </div> <!-- End Section Title  --> <div class="row gy-4" data-tab-group=""> <div class="flex flex-wrap gap-4 xl:col-4 lg:gap-6" data-tab-nav> ${showcase.list.map((item, index) => renderTemplate`<button${addAttribute(`group ${index === 0 && "active"}`, "class")}${addAttribute(index, "data-tab")} data-aos="fade-up-sm"> <div class="h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10"> <h3 class="text-sm font-semibold xl:mb-6 xl:text-2xl"> ${item.title} </h3> <p class="hidden xl:block">${item.description}</p> </div> </button>`)} </div> <!-- End Showcase Tab Button  --> <div class="relative xl:col-8" data-aos="fade-in" data-tab-content> ${showcase.list.map((item, index) => renderTemplate`<div${addAttribute(`shadow-default group relative ${index === 0 && "active"}`, "class")}${addAttribute(index, "data-tab-panel")}> <div class="invisible h-0 opacity-70 transition-opacity duration-300 group-[.active]:visible group-[.active]:h-full group-[.active]:opacity-100"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full rounded-xl", "src": item.image, "alt": "feature image", "width": 850, "height": 617 })} </div> </div>`)} <!-- Start Bg Shape --> <div data-aos="fade-up-md" class="pointer-events-none absolute right-[-40px] top-[-50px] -z-10 hidden select-none lg:block"></div> <div data-aos="fade-down-md" class="pointer-events-none absolute bottom-[-50px] right-[-40px] -z-10 hidden select-none lg:block"></div> <!-- End Bg Shape --> </div> <!-- End Tab Content  --> </div> <!-- End Showcase Tab  --> </div> </section> <!-- End Showcase Section --> <!-- Funfacts --> <section class="section relative z-20 overflow-hidden"> <div class="container"> <div data-aos="fade-up-sm" class="row pb-12 text-center"> <div class="mx-auto lg:col-8"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm" data-aos-delay="50"> ${funfacts.subtitle} </span> <h2 class="mb-6 font-semibold" data-aos="fade-up-sm" data-aos-delay="100"> ${funfacts.title} </h2> <p class="text-lg" data-aos="fade-up-sm" data-aos-delay="150"> ${funfacts.description} </p> </div> </div> <div class="row relative"> <div class="col-12"> <ul class="funfacts-list list-dotted-line-separator shadow-default flex flex-col justify-center gap-6 rounded-2xl bg-white px-12 py-10 sm:py-14 md:flex-row md:gap-0"> ${funfacts.list.map((counter, index) => renderTemplate`<li class="text-center" data-aos="fade-up-sm" data-aos-delay="200"> <span class="mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl counter-count"> ${counter.count} </span> <div class="text-dark md:text-h6 xl:text-h4"> ${counter.text} </div> </li>`)} </ul> <!-- Start Bg Shape --> <div data-aos="fade-up-md" data-aos-delay="50" class="pointer-events-none absolute bottom-[-55px] left-[-30px] -z-10 hidden select-none lg:block"></div> <div data-aos="fade-down-md" data-aos-delay="50" class="pointer-events-none absolute right-[-40px] top-[40px] -z-10 hidden select-none lg:block"></div> <!-- End Bg Shape --> </div> </div> </div> </section> <!-- End Fun Fact Section --> <!-- services --> <section class="section-lg feature triangle-up relative z-20 overflow-hidden pb-0"> <div class="container relative z-20"> <div class="row gy-4 items-center"> <div data-aos="fade-left-sm" class="lg:col-7"> <div class="feature-clip-path-1 relative"> ${renderComponent($$result2, "Image", $$Image, { "width": 727, "height": 613, "src": services[0].image, "class": "mx-auto block", "alt": "feature image" })} <!-- Start Bg Shape --> <div data-aos="fade-right-sm" class="pointer-events-none absolute right-[100px] top-[-10px] -z-10 hidden select-none lg:block"></div> <div data-aos="fade-left-sm" class="pointer-events-none absolute bottom-[130px] left-0 -z-10 hidden select-none lg:block"></div> <!-- End Bg Shape --> </div> </div> <div class="lg:col-5"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-right-sm"> ${services[0].subtitle} </span> <div data-aos="fade-right-sm" class="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"> <h2 class="font-semibold" data-aos="fade-right-sm" data-aos-delay="100"> ${services[0].title} </h2> </div> <p class="pl-6 text-lg" data-aos="fade-right-sm" data-aos-delay="150"> ${services[0].description} </p> </div> </div> </div> ${renderComponent($$result2, "LineBg", $$LineBg, { "className": "absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between", "color": "bg-line-sky" })} </section> <section class="section-lg feature triangle-down relative z-20 overflow-hidden pt-32"> <div class="container relative z-20"> <div class="row gy-4 items-center"> <div class="order-1 lg:col-5 lg:order-0"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-left-sm"> ${services[1].subtitle} </span> <div data-aos="fade-left-sm" class="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"> <h2 class="font-semibold" data-aos="fade-left-sm" data-aos-delay="100"> ${services[1].title} </h2> </div> <p class="pl-6 text-lg" data-aos="fade-left-sm" data-aos-delay="150"> ${services[1].description} </p> </div> <div class="order-0 lg:col-7 lg:order-0"> <div class="feature-clip-path-2 relative" data-aos="fade-right-sm"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/feature-2.png", "class": "mx-auto block", "width": 724, "height": 564, "alt": "feature image" })} <!-- Start Bg Shape --> <!--<div--> <!--  data-aos="fade-up-md"--> <!--  class="pointer-events-none absolute left-[12%] top-[-8%] -z-10 hidden select-none lg:block"--> <!--&gt;--> <!--</div>--> <div data-aos="fade-down-md" class="pointer-events-none absolute bottom-[-1%] right-[10%] -z-10 hidden select-none lg:block"></div> <!-- End Bg Shape --> </div> </div> </div> </div> ${renderComponent($$result2, "LineBg", $$LineBg, { "className": "absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between", "color": "bg-line-sky" })} </section> <!-- end services --> <!-- Start Bg Shape --> <div data-aos="fade-left-sm" class="pointer-events-none absolute -left-24 bottom-0 hidden select-none lg:block"> <img class="inject-svg text-secondary" src="/images/shapes/about-s-1.svg" alt="shape"> </div> <div data-aos="fade-right-sm" class="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"> <img class="inject-svg text-quinary" src="/images/shapes/blog-s-1.svg" alt="shape"> </div> <!-- End Bg Shape --> <!-- End background lines --> </main>  ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/index.astro", void 0);

const $$file$4 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://omniherald.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  const integrationIndex = await getEntryBySlug("integrations", "-index");
  const technologies = await getSinglePage("integrations");
  const removeDrafts = technologies.filter(
    (technology) => !technology.data.draft
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": integrationIndex.data.title, "meta_title": integrationIndex.data.meta_title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": integrationIndex.data.title })} <section class="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]"> <div class="container relative z-20"> <div class="row gy-4"> ${removeDrafts.map((technology) => renderTemplate`<div data-aos="fade-up-sm" class="md:col-6 lg:col-4"> <div class="shadow-default overflow-hidden rounded-xl bg-white p-10"> <div class="mb-6 flex flex-wrap items-center justify-between gap-y-4"> ${renderComponent($$result2, "Image", $$Image, { "width": 72, "height": 72, "src": technology.data.icon, "alt": "icon", "class": "rounded-xl" })} <a${addAttribute(`/integrations/${technology.slug}`, "href")} class="btn btn-outline-primary"> <i class="fa-solid fa-plus mr-1 text-sm"></i>
Install
</a> </div> <h3 class="mb-4 font-primary text-xl font-semibold text-dark sm:text-2xl"> <a${addAttribute(`/integrations/${technology.slug}`, "href")}> ${technology.data.title} </a> </h3> <p>${unescapeHTML(markdownify(technology.data.description))}</p> </div> </div>`)} </div> <div class="pointer-events-none absolute left-[-4%] top-[30%] -z-10 select-none"></div> <div class="pointer-events-none absolute bottom-[30%] right-[-5%] -z-10 select-none"></div> </div> </section> </main> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/integrations/index.astro", void 0);

const $$file$3 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/integrations/index.astro";
const $$url$3 = "/integrations";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://omniherald.com");
const $$AuthorCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { data } = Astro2.props;
  const { title, image, social } = data.data;
  return renderTemplate`${maybeRenderHead()}<div class="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md"> <a${addAttribute(`/authors/${data.slug}`, "href")} class="h-full max-h-[900px] w-full"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto h-[180px] w-[180px] rounded-full object-cover", "src": image, "width": 180, "height": 180, "alt": "Daniel Mitchell" })}`} </a> <div class="px-5 pt-8 text-center"> <h3 class="mb-4 text-xl font-semibold text-dark sm:text-2xl"> <a${addAttribute(`/authors/${data.slug}`, "href")}>${title}</a> </h3> ${plainify(data.body?.slice(0, 100))} ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark" })} </div> </div>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/AuthorCard.astro", void 0);

const $$Astro$3 = createAstro("https://omniherald.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const authorIndex = await getEntryBySlug("authors", "-index");
  const authors = await getSinglePage("authors");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": authorIndex.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": authorIndex.data.title })} ${maybeRenderHead()}<section class="section-md mt-[-28rem] md:mt-[-32rem]"> <div class="container relative z-40"> <div class="row gy-5"> ${authors.map((author) => renderTemplate`<div data-aos="fade-up-sm" class="md:col-6 lg:col-4 xl:col-3"> ${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "data": author })} </div>`)} </div> </div> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/authors/index.astro", void 0);

const $$file$2 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/authors/index.astro";
const $$url$2 = "/authors";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://omniherald.com");
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { data: testimonial } = await getEntryBySlug("sections", "testimonial");
  return renderTemplate`${testimonial.enable && renderTemplate`${maybeRenderHead()}<section class="section relative z-20 overflow-hidden"><div class="container relative z-20"><div class="colored-box-bg items-start lg:columns-2"><div class="mb-16"><span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm">${testimonial.subtitle}</span><div data-aos="fade-up-sm" class="border-l-2 border-dark border-opacity-50 py-2 pl-6"><h2 class="font-semibold" data-aos-delay="50">${testimonial.title}</h2></div></div><div class="mb-4">${testimonial.list.map(
    (testimonial_item) => renderTemplate`<div data-aos="fade-up-sm" class="shadow-default mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0"><div class="box-bg">${renderComponent($$result, "Image", $$Image, { "width": 140, "height": 40, "src": testimonial_item.company_logo, "class": "max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform", "alt": "logo" })}</div><div class="px-6 py-12"><h3 class="mb-5 text-xl font-semibold sm:text-2xl">${testimonial_item.title}</h3><p class="mb-6 text-lg">${testimonial_item.content}</p><div class="flex gap-4"><div class="items-start rounded-full">${renderComponent($$result, "Image", $$Image, { "width": 70, "height": 70, "class": "h-[70px] w-[70px] object-cover", "src": testimonial_item.avatar, "alt": "Devon Lane" })}</div><div class="flex flex-col justify-center"><h4 class="mb-1 font-primary text-lg">${testimonial_item.name}</h4><p>${testimonial_item.designation}</p></div></div></div></div>`
  )}</div></div><!-- Start Bg Shape --><div data-aos="fade-right-sm" class="pointer-events-none absolute left-[-8%] top-[28%] -z-10 hidden select-none lg:block"><img class="inject-svg text-quaternary" src="/images/shapes/customer-story-s-1.svg" alt="shape"></div><div data-aos="fade-up-md" class="pointer-events-none absolute right-[-4%] top-[-3%] -z-10 hidden select-none lg:block"><img class="inject-svg text-dark" src="/images/shapes/customer-story-s-2.svg" alt="shape"></div><div data-aos="fade-down-sm" class="pointer-events-none absolute bottom-[12%] right-[-4%] -z-10 hidden select-none lg:block"><img class="inject-svg text-secondary" src="/images/shapes/customer-story-s-3.svg" alt="shape"></div><!-- End Bg Shape --></div></section>`}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/partials/Testimonial.astro", void 0);

const $$Astro$1 = createAstro("https://omniherald.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { data } = await getEntryBySlug(
    "careers",
    "-index"
  );
  const { title, description, meta_title, image, benefits } = data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "image": image, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title, "description": description })} <section class="section relative z-20 mt-[-26rem] overflow-hidden pb-0"> <div class="container relative"> <div class="row"> <div class="col-11 mx-auto"> <div data-aos="fade-up-sm" class="relative z-10 rounded-[15px] border-[6px] border-white bg-white sm:border-[12px]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full rounded-[15px] object-cover", "src": image, "width": 1140, "height": 600, "alt": "career" })} </div> </div> </div> <!-- Start Shape background --> <div class="pointer-events-none absolute left-0 top-1/2 -z-10 hidden -translate-y-1/2 select-none md:block lg:left-[-4%]"> <img class="inject-svg w-full text-tertiary" data-aos="fade-right-sm" src="/images/shapes/about-s-1.svg" alt="shape"> </div> <div class="pointer-events-none absolute right-0 top-1/2 -z-10 hidden -translate-y-1/2 scale-75 select-none md:block lg:right-[-5%]"> <img class="inject-svg text-quaternary" data-aos="fade-left-sm" src="/images/shapes/about-s-2.svg" alt="shape"> </div> </div> </section> <!-- Benefits --> <section class="section relative z-20 overflow-hidden"> <div class="container"> <div class="row pb-12 text-center"> <div class="mx-auto lg:col-7"> <span class="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm"> ${benefits.subtitle} </span> <h2 class="mb-6 font-semibold" data-aos="fade-up-sm" data-aos-delay="50"> ${markdownify(benefits.title)} </h2> <p class="text-lg" data-aos="fade-up-sm" data-aos-delay="100"> ${markdownify(benefits.description)} </p> </div> </div> <div class="colored-box-icon has-colored-text row gy-4"> ${benefits.list.map((benefit) => renderTemplate`<div data-aos="fade-up-sm" data-aos-delay="50" class="md:col-6 lg:col-4"> <div class="shadow-default h-full rounded-2xl bg-white p-8 text-center transition-all duration-300 hover:shadow-md sm:p-12"> <div class="icon-box mx-auto"> ${renderComponent($$result2, "DynamicIcon", DynamicIcon, { "icon": benefit.icon })} </div> <h3 class="mb-6 text-xl font-semibold text-dark sm:text-2xl"> ${benefit.title} </h3> <p class="mb-0">${markdownify(benefit.content)}</p> </div> </div>`)} </div> </div> </section> <!-- End Benfits --> <!-- Testimonial --> ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} <!-- End Testimonial --> <!-- Open-Position --> ${renderComponent($$result2, "OpenPosition", $$OpenPosition, {})} <!-- End Open-Position --> </main> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/career/index.astro", void 0);

const $$file$1 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/career/index.astro";
const $$url$1 = "/career";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://omniherald.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { blog_folder } = config.settings;
  const postIndex = await getEntryBySlug(blog_folder, "-index");
  const posts = await getSinglePage(blog_folder);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": postIndex.data.title, "meta_title": postIndex.data.meta_title, "image": postIndex.data.image, "description": postIndex.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": postIndex.data.title })} ${maybeRenderHead()}<section class="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]"> <div class="container relative z-30"> <div class="row gy-4"> ${currentPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages, "currentPage": 1, "section": blog_folder })} </div> <!-- Start Bg Shape --> <div class="pointer-events-none absolute left-0 top-[40%] select-none"> <img class="inject-svg text-quaternary" src="/images/shapes/blog-list-s-1.svg" alt="shape"> </div> <div class="pointer-events-none absolute bottom-[20%] right-[-6%] select-none"> <img class="inject-svg text-quinary" src="/images/shapes/team-member-s-2.svg" alt="shape"> </div> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/posts/index.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
