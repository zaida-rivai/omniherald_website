/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML, f as addAttribute } from '../astro_a70aee5d.mjs';
import 'clsx';
import { a as $$Base, b as $$Image, m as markdownify, s as slugify, c as config, $ as $$LineBg, d as $$Social } from './404_20bb4f26.mjs';
import { g as getSinglePage, $ as $$PageHeader } from './_regular__fe8b40d2.mjs';
import { formatInTimeZone } from 'date-fns-tz';

const $$Astro$6 = createAstro("https://omniherald.com");
async function getStaticPaths$3() {
  const technologies = await getSinglePage("integrations");
  const paths = technologies.map((technology) => ({
    params: { single: technology.slug },
    props: { technology }
  }));
  return paths;
}
const $$single$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$single$3;
  const { technology } = Astro2.props;
  const { Content } = await technology.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": technology.data.title, "meta_title": technology.data.meta_title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": `How To Integrate With ${technology.data.title}` })} ${maybeRenderHead()}<section class="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]"> <div class="container"> <div class="row"> <div class="mx-auto lg:col-11"> <div data-aos="fade-up-sm" data-aos-delay="100" class="shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-24 lg:py-24"> <div class="mb-12 flex flex-col flex-wrap items-start justify-between gap-y-4 border-b border-border border-opacity-50 pb-14 sm:flex-nowrap md:flex-row md:items-center"> <div class="mb-4 flex flex-wrap items-center gap-6 md:mb-0"> <div class="h-[85px] w-[85px] overflow-hidden rounded-2xl md:h-[110px] md:w-[110px]"> ${renderComponent($$result2, "Image", $$Image, { "src": technology.data.icon, "class": "h-full w-full", "width": 110, "height": 110, "alt": "icon" })} </div> <div> <h2 class="mb-4 font-primary text-3xl font-semibold text-dark sm:text-4xl">${unescapeHTML(markdownify(
    technology.data.title + " integration"
  ))}</h2> <p class="w-full max-w-[500px] text-lg">${unescapeHTML(markdownify(technology.data.description))}</p> </div> </div> <a href="#" class="btn btn-primary btn-md">Install Now</a> </div> <div class="content prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </div> <!-- End Main Content --> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/integrations/[single].astro", void 0);

const $$file$3 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/integrations/[single].astro";
const $$url$3 = "/integrations/[single]";

const _single_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const dateFormat = (date, format = "dd MMM, yyyy") => {
  return formatInTimeZone(date, "America/New_York", format);
};

const $$Astro$5 = createAstro("https://omniherald.com");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { blog_folder } = config.settings;
  const { data } = Astro2.props;
  const { title, image, date, author, author_avatar } = data.data;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up-sm" class="md:col-6 lg:col-4"> <div class="shadow-default group min-h-full overflow-hidden rounded-xl bg-white"> <a${addAttribute(`/${blog_folder}/${data.slug}`, "href")} class="inline-block h-full max-h-[270px] w-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105", "src": image, "width": 408, "height": 262, "alt": "author" })} </a> <div class="px-5 pb-12"> <div class="-mt-[30px] mb-3 flex items-center"> <a${addAttribute(`/authors/${slugify(author)}`, "href")} class="relative z-20 overflow-hidden rounded-full border-[6px] border-white"${addAttribute(author, "title")}> ${renderComponent($$result, "Image", $$Image, { "src": author_avatar, "width": 40, "height": 40, "class": "w-[40px] h-[40px] object-cover", "alt": author })} </a> <a${addAttribute(`/authors/${slugify(author)}`, "href")} class="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"> ${author} </a> </div> <h2 class="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl"> <a${addAttribute(`/${blog_folder}/${data.slug}`, "href")} class="link-animation relative after:absolute after:inset-0"> ${title} </a> </h2> <span class="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark"> ${dateFormat(date)} </span> </div> </div> </div>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/BlogCard.astro", void 0);

const $$Astro$4 = createAstro("https://omniherald.com");
const $$AuthorSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AuthorSingle;
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const { author } = Astro2.props;
  const { Content } = await author.render();
  const { title, image, social } = author.data;
  const postFilterByAuthor = posts.filter(
    (post) => slugify(post.data.author) === slugify(title)
  );
  return renderTemplate`${maybeRenderHead()}<section class="section page-header author-single relative overflow-hidden after:z-10"> ${renderComponent($$result, "LineBg", $$LineBg, { "className": "line-bg absolute z-20", "color": "bg-line-yellow" })} <div class="container relative z-30"> <div class="row"> <div class="col-12 relative mx-auto"> <div class="shadow-default rounded-2xl bg-white px-6 py-10 sm:px-11"> <div class="row gy-4"> <div data-aos="fade-up-sm" class="border-b border-border border-opacity-50 pb-8 lg:col-4 xl:col-3 lg:border-b-0 lg:border-r lg:border-border lg:pb-0"> <div class="mb-6 h-fit w-full"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto h-[180px] w-[180px] rounded-full object-cover", "src": image, "alt": title, "width": 180, "height": 180 })}`} </div> <div class="px-5 text-center"> <h3 class="mb-4 text-xl font-semibold text-dark sm:text-2xl">${unescapeHTML(markdownify(title))}</h3> ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark" })} </div> </div> <div data-aos="fade-up-sm" data-aos-delay="100" class="lg:col-8 xl:col-9"> <div class="content lg:px-10"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </div> <div data-aos="fade-up-sm" class="pointer-events-none absolute -top-6 left-[-2%] -z-10 select-none lg:top-[-15%]"> <img class="inject-svg w-[150px] text-quaternary" src="/images/shapes/login-s-1.svg" alt="shape"> </div> <div data-aos="fade-up-sm" class="pointer-events-none absolute -top-8 right-[-4%] -z-10 select-none lg:-top-12"> <img class="inject-svg w-[150px] text-quinary" src="/images/shapes/login-s-2.svg" alt="shape"> </div> <div data-aos="fade-up-sm" class="pointer-events-none absolute -bottom-8 left-[-4%] -z-10 select-none lg:bottom-[-22%]"> <img class="inject-svg w-[150px] text-tertiary" src="/images/shapes/login-s-3.svg" alt="shape"> </div> <div data-aos="fade-up-sm" class="pointer-events-none absolute -bottom-8 right-[-3%] -z-10 select-none lg:bottom-[-32%]"> <img class="inject-svg w-[150px] text-secondary" src="/images/shapes/login-s-4.svg" alt="shape"> </div> </div> </div> </div>  </section> <section class="lg:section pb-20 pt-10 lg:pt-0"> <div class="container relative z-30"> <div class="row pb-12"> <div class="col-12 text-center"> <h2 class="font-semibold" data-aos="fade-up-sm"> <span class="text-zinc-500 text-opacity-70">
Recent Post By:${" "} </span> ${title} </h2> </div> </div> <div class="row gy-4 justify-center"> ${postFilterByAuthor.map((post, i) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "key": i, "data": post })}`)} </div> </div> </section>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/AuthorSingle.astro", void 0);

const $$Astro$3 = createAstro("https://omniherald.com");
async function getStaticPaths$2() {
  const authors = await getSinglePage("authors");
  const paths = authors.map((author) => ({
    params: {
      single: author.slug
    },
    props: { author }
  }));
  return paths;
}
const $$single$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$single$2;
  const { author } = Astro2.props;
  const { title, meta_title, description, image } = author.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthorSingle", $$AuthorSingle, { "author": author })} ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/authors/[single].astro", void 0);

const $$file$2 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/authors/[single].astro";
const $$url$2 = "/authors/[single]";

const _single_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://omniherald.com");
async function getStaticPaths$1() {
  const allPositions = await getSinglePage("careers");
  const paths = allPositions.map((position) => ({ params: { single: position.slug }, props: { jobPosition: position } }));
  return paths;
}
const $$single$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$single$1;
  const { jobPosition } = Astro2.props;
  const { Content } = await jobPosition.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": jobPosition.data.title, "meta_title": jobPosition.data.meta_title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {})} ${maybeRenderHead()}<section class="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]"> <div class="container"> <div class="row"> <div class="col-12"> <div data-aos="fade-up-sm" data-aos-delay="100" class="shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-24 lg:py-[85px]"> <div class="row gy-4"> <div class="content prose lg:col-7"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="lg:col-5"> <div class="sticky top-[120px] rounded-2xl bg-theme-light/40 p-6 md:px-8 md:py-12"> <h2 class="mb-4 text-xl sm:text-2xl">Apply Today</h2> <p class="mb-6">
Management, investments. You’ll be on arguably the most
                      important
</p> <a href="#" class="btn btn-sm btn-primary w-full text-center">
Apply Now
</a> </div> </div> <!-- End Sidebar --> </div> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/career/[single].astro", void 0);

const $$file$1 = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/career/[single].astro";
const $$url$1 = "/career/[single]";

const _single_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const similerItems = (currentItem, allItems, slug) => {
  let categories = [];
  let tags = [];
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }
  const filterByCategories = allItems.filter(
    (item) => categories.find((category) => item.data.categories.includes(category))
  );
  const filterByTags = allItems.filter(
    (item) => tags.find((tag) => item.data.tags.includes(tag))
  );
  const mergedItems = [.../* @__PURE__ */ new Set([...filterByCategories, ...filterByTags])];
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);
  return filterBySlug;
};

const $$Astro$1 = createAstro("https://omniherald.com");
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const { post } = Astro2.props;
  const similarPosts = similerItems(post, posts, post.slug);
  const { Content } = await post.render();
  const { title, author, image, date, author_avatar } = post.data;
  return renderTemplate`${maybeRenderHead()}<section class="pt-12 page-header blog-single relative overflow-hidden pb-0 after:z-10"> <div class="container relative z-40"> <div class="row"> ${image && renderTemplate`<div class="bg-white p-3 rounded-t-xl"> ${renderComponent($$result, "Image", $$Image, { "class": "h-[350px] outline-white w-full rounded-xl object-cover md:h-[450px]", "src": "/images/articles/featured-image.jpg", "alt": "featured-image", "width": 1272, "height": 450 })} </div>`} </div> </div> <!--<LineBg className="absolute z-20" color="bg-line-yellow" />--> <div class="pointer-events-none absolute left-0 top-[5%] z-30 hidden select-none lg:block" data-aos="fade-up-sm"></div> <div class="pointer-events-none absolute right-0 top-[25%] z-30 hidden select-none lg:block" data-aos="fade-up-sm"></div> </section> <section class="section-sm relative overflow-hidden pt-6 md:pt-10"> <div class="container relative z-30"> <article class="row"> <div class="mx-auto sm:col-10" data-aos="fade-up-sm"> <h1 class="h2 mb-6 font-secondary text-2xl capitalize !leading-normal text-dark md:text-3xl lg:text-4xl xl:text-5xl">${unescapeHTML(markdownify(title))}</h1> <div class="mb-6 flex flex-wrap items-center gap-x-12 gap-y-6"> <div class="flex items-center"> <a title="author image"${addAttribute(`/authors/${slugify(author)}`, "href")} class="relative z-20 overflow-hidden rounded-full border-[6px] border-zinc-100"> ${renderComponent($$result, "Image", $$Image, { "src": author_avatar, "class": "h-[70px] w-[70px] object-cover", "width": 70, "height": 70, "alt": "Daniel Mitchell" })} </a> <a${addAttribute(`/authors/${slugify(author)}`, "href")} class="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"> ${author} </a> </div> <span class="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark"> ${dateFormat(date)} </span> </div> </div> <div class="sm:col-10 sm:mx-auto" data-aos="fade-up-sm" data-aos-delay="50"> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </article> </div> <div class="pointer-events-none absolute left-0 top-[40%] hidden select-none lg:block" data-aos="fade-up-sm"> <img class="inject-svg text-quaternary" src="/images/shapes/blog-list-s-1.svg" alt="shape"> </div> <div class="pointer-events-none absolute bottom-[20%] right-[-6%] hidden select-none lg:block" data-aos="fade-up-sm"> <img class="inject-svg text-quinary" src="/images/shapes/team-member-s-2.svg" alt="shape"> </div> </section> <!-- Related posts --> <section class="section articles relative z-20 pb-20 after:-z-10 md:pb-40"> <div class="container relative z-30"> <div class="row items-end justify-between pb-12"> <div class="lg:col-8 xl:col-6"> <h2 class="font-semibold" data-aos="fade-up-sm">Related Posts</h2> </div> </div> <div class="row gy-4"> ${similarPosts.map((post2) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "data": post2 })}`)} </div> </div> ${renderComponent($$result, "LineBg", $$LineBg, { "className": "absolute z-20", "color": "bg-line-sky" })} </section>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/PostSingle.astro", void 0);

const $$Astro = createAstro("https://omniherald.com");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const paths = posts.map((post) => ({
    params: {
      single: post.slug
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": post })} ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/posts/[single].astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/posts/[single].astro";
const $$url = "/posts/[single]";

const _single_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogCard as $, _single_$3 as _, _single_$2 as a, _single_$1 as b, _single_ as c };
