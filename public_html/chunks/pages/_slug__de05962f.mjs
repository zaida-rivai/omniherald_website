/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent } from '../astro_a70aee5d.mjs';
import 'clsx';
import { $ as $$BlogCard } from './_single__06d6ab90.mjs';
import { c as config, e as getEntryBySlug, a as $$Base } from './404_20bb4f26.mjs';
import { g as getSinglePage, $ as $$PageHeader } from './_regular__fe8b40d2.mjs';

const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.data.date && b.data.date).valueOf() - new Date(a.data.date && a.data.date).valueOf()
  );
  return sortedArray;
};

const $$Astro$1 = createAstro("https://omniherald.com");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage = 1, totalPages = 1 } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mt-8 flex items-center justify-center space-x-3" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="rounded px-2 py-1.5 text-dark hover:bg-theme-light  "><span class="sr-only">Previous</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="rounded px-2 py-1.5 text-light"><span class="sr-only">Previous</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page" class="rounded bg-primary px-4 py-2 text-white  ">${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page" class="rounded px-4 py-2 text-dark hover:bg-theme-light  ">${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="rounded px-2 py-1.5 text-dark hover:bg-theme-light  "><span class="sr-only">Next</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="rounded px-2 py-1.5 text-light"><span class="sr-only">Next</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://omniherald.com");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blog_folder } = config.settings;
  const { slug } = Astro2.params;
  const postIndex = await getEntryBySlug(blog_folder, "-index");
  const posts = await getSinglePage(blog_folder);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": postIndex.data.title, "meta_title": postIndex.data.meta_title, "image": postIndex.data.image, "description": postIndex.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": postIndex.data.title })} ${maybeRenderHead()}<section class="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]"> <div class="container relative z-30"> <div class="row gy-4"> ${currentPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages, "currentPage": currentPage, "section": blog_folder })} </div> <!-- Start Bg Shape --> <div class="pointer-events-none absolute left-0 top-[40%] select-none"> <img class="inject-svg text-quaternary" src="/images/shapes/blog-list-s-1.svg" alt="shape"> </div> <div class="pointer-events-none absolute bottom-[20%] right-[-6%] select-none"> <img class="inject-svg text-quinary" src="/images/shapes/team-member-s-2.svg" alt="shape"> </div> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/posts/page/[slug].astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/posts/page/[slug].astro";
const $$url = "/posts/page/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pagination as $, _slug_ as _, sortByDate as s };
