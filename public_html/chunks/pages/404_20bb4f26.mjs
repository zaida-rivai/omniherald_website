/* empty css                               */import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent, A as AstroError, h as ImageMissingAlt, s as spreadAttributes, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, u as unescapeHTML, n as renderHead, o as renderSlot } from '../astro_a70aee5d.mjs';
import 'clsx';
import { slug } from 'github-slugger';
import { marked } from 'marked';
import { jsx } from 'react/jsx-runtime';
import 'react';
import * as FaIcons6 from 'react-icons/fa6/index.js';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_283785fb.mjs';
import { FaWindows, FaDropbox, FaHashtag, FaAndroid } from 'react-icons/fa/index.js';

const $$Astro$8 = createAstro("https://omniherald.com");
const $$LineBg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LineBg;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`line-bg ${classkName}`, "class")}> <div class="container flex justify-between"></div> </div>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/LineBg.astro", void 0);

const iconLibraries = {
  fa: FaIcons6
};
const DynamicIcon = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : void 0;
  if (!Icon) {
    return /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Icon not found" });
  }
  return /* @__PURE__ */ jsx(Icon, { ...props });
};
const getIconLibrary = (icon) => {
  const libraryKey = [...icon].reduce((lib, letter, i) => {
    if (letter === letter.toUpperCase() && lib === "" && i > 0) {
      return icon.slice(0, i).toLowerCase();
    }
    return lib;
  }, "");
  return iconLibraries[libraryKey];
};

const $$Astro$7 = createAstro("https://omniherald.com");
const $$TwSizeIndicator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwSizeIndicator;
  return renderTemplate`${process.env.NODE_ENV === "development" && renderTemplate`${maybeRenderHead()}<div class="fixed left-0 top-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"><span class="block sm:hidden">all</span><span class="hidden sm:block md:hidden">sm</span><span class="hidden md:block lg:hidden">md</span><span class="hidden lg:block xl:hidden">lg</span><span class="hidden xl:block 2xl:hidden">xl</span><span class="hidden 2xl:block">2xl</span></div>`}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/TwSizeIndicator.astro", void 0);

const site = {
	title: "OmniHerald",
	base_url: "https://omniherald.com",
	base_path: "/",
	trailing_slash: false,
	favicon: "/images/favicon.png",
	logo: "/images/logo-dark.png",
	logo_light: "/images/logo-light.png",
	logo_width: "158",
	logo_height: "37",
	logo_text: "OmniHerald"
};
const settings = {
	pagination: 3,
	blog_folder: "posts"
};
const params = {
	contact_form_action: "#",
	copyright: "Designed And Developed by [OmniHerald](https://omniherald.com)",
	email: "info@omniherald.com",
	phone: "+123456789"
};
const navigation_buttons = [
	{
		enable: true,
		label: "Login",
		link: "/login"
	},
	{
		enable: true,
		label: "Get Started",
		link: "/contact"
	}
];
const disqus = {
	enable: true,
	shortname: "omniherald-website",
	settings: {
	}
};
const metadata = {
	meta_author: "omniherald.com",
	meta_image: "/images/og-image.png",
	meta_description: "OmniHerald Website"
};
const config = {
	site: site,
	settings: settings,
	params: params,
	navigation_buttons: navigation_buttons,
	disqus: disqus,
	metadata: metadata
};

const colors = {
	"default": {
		theme_color: {
			primary: "#000",
			secondary: "#73cfa8",
			tertiary: "#fb9289",
			quaternary: "#fde179",
			quinary: "#73b1ff",
			senary: "#F4FDFF",
			body: "#fff",
			border: "#DBDBDB",
			theme_light: "#f3f0f0",
			theme_dark: "#000000"
		},
		text_color: {
			"default": "#555555",
			dark: "#222222",
			light: "#fffefe"
		}
	}
};
const fonts = {
	font_family: {
		primary: "Maven+Pro:wght@400;500;600;700",
		primary_type: "sans-serif",
		secondary: "Merriweather:wght@400;700",
		secondary_type: "sans-serif"
	},
	font_size: {
		base: "16",
		scale: "1.23"
	}
};
const theme = {
	colors: colors,
	fonts: fonts
};

const slugify = (content) => {
  return slug(content);
};
const markdownify = (content, div) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};
const humanize = (content) => {
  return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
    return m.toUpperCase();
  });
};
const plainify = (content) => {
  const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

const $$Astro$6 = createAstro("https://omniherald.com");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Social;
  const { source, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(className, "class")}> ${source?.map(({ icon, link }, i) => {
    return renderTemplate`<li> <a class="inline-block"${addAttribute(icon, "aria-label")}${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "DynamicIcon", DynamicIcon, { "className": "inline-block", "icon": icon })} </a> </li>`;
  })} </ul>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/components/Social.astro", void 0);

const main$1 = [
	{
		name: "Home",
		url: "/"
	},
	{
		name: "Dashboard",
		url: "/elements"
	},
	{
		name: "About",
		url: "/about"
	}
];
const footer = [
	{
		title: "Company",
		links: [
			{
				name: "About us",
				url: "/about"
			},
			{
				name: "Contact us",
				url: "/contact"
			},
			{
				name: "Pricing",
				url: "/pricing"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				name: "Blog",
				url: "/blogs"
			},
			{
				name: "Career",
				url: "/career"
			},
			{
				name: "Terms & Conditions",
				url: "/terms-policy"
			}
		]
	}
];
const menu = {
	main: main$1,
	footer: footer
};

const main = [
	{
		name: "facebook",
		link: "https://facebook.com/",
		icon: "FaFacebook"
	},
	{
		name: "skype",
		link: "https://skype.com/",
		icon: "FaSkype"
	},
	{
		name: "twitter",
		link: "https://twitter.com/",
		icon: "FaTwitter"
	},
	{
		name: "linkedin",
		icon: "FaLinkedin",
		link: "https://www.linkedin.com/"
	}
];
const social = {
	main: main
};

const $$Astro$5 = createAstro("https://omniherald.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/node_modules/astro/components/Image.astro", void 0);

const $$Astro$4 = createAstro("https://omniherald.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/zaidarivai/Desktop/website/omniheral_light/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://omniherald.com","ASSETS_PREFIX":undefined},{_:process.env._,}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/-index.md": () => import('../-index_f6a61687.mjs'),"/src/content/authors/benjamin.md": () => import('../benjamin_d94ef007.mjs'),"/src/content/authors/daniel-mitchell.md": () => import('../daniel-mitchell_6f86a762.mjs'),"/src/content/authors/darlene-robertson.md": () => import('../darlene-robertson_6f2a3915.mjs'),"/src/content/authors/devid-harrison.md": () => import('../devid-harrison_2ce9accd.mjs'),"/src/content/authors/devon-lane.md": () => import('../devon-lane_5a948910.mjs'),"/src/content/authors/jacob-jones.md": () => import('../jacob-jones_b3e7bab0.mjs'),"/src/content/authors/jerome-bell.md": () => import('../jerome-bell_a7367bea.mjs'),"/src/content/authors/wlliam-evans.md": () => import('../wlliam-evans_4504de02.mjs'),"/src/content/careers/-index.md": () => import('../-index_2badbb22.mjs'),"/src/content/careers/position-1.md": () => import('../position-1_93b329b7.mjs'),"/src/content/careers/position-2.md": () => import('../position-2_fc4d7306.mjs'),"/src/content/careers/position-3.md": () => import('../position-3_47a9eadb.mjs'),"/src/content/careers/position-4.md": () => import('../position-4_6bd3e75f.mjs'),"/src/content/homepage/index.md": () => import('../index_b4fbd6fc.mjs'),"/src/content/integrations/-index.md": () => import('../-index_1abd5dde.mjs'),"/src/content/integrations/figma.md": () => import('../figma_d9c7f614.mjs'),"/src/content/integrations/framer.md": () => import('../framer_a9c2a448.mjs'),"/src/content/integrations/slack.md": () => import('../slack_b535a5b8.mjs'),"/src/content/integrations/spotify.md": () => import('../spotify_f32ff7c6.mjs'),"/src/content/integrations/telegram.md": () => import('../telegram_a22b997a.mjs'),"/src/content/pages/404.md": () => import('../404_eea1c363.mjs'),"/src/content/pages/about.md": () => import('../about_cdf48a96.mjs'),"/src/content/pages/contact.md": () => import('../contact_67024dda.mjs'),"/src/content/pages/elements.mdx": () => import('../elements_0ac6a060.mjs'),"/src/content/pages/pricing.md": () => import('../pricing_e3340402.mjs'),"/src/content/pages/terms-policy.md": () => import('../terms-policy_cc73f353.mjs'),"/src/content/posts/-index.md": () => import('../-index_d1c0dd69.mjs'),"/src/content/posts/post-1.md": () => import('../post-1_30e08239.mjs'),"/src/content/posts/post-2.md": () => import('../post-2_edc0bb04.mjs'),"/src/content/posts/post-3.md": () => import('../post-3_2d42868f.mjs'),"/src/content/posts/post-4.md": () => import('../post-4_54ad4258.mjs'),"/src/content/sections/call-to-action.md": () => import('../call-to-action_9a4756b7.mjs'),"/src/content/sections/faq.md": () => import('../faq_89c90a8d.mjs'),"/src/content/sections/testimonial.md": () => import('../testimonial_e2c2d774.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"careers":{"type":"content","entries":{"-index":"/src/content/careers/-index.md","position-1":"/src/content/careers/position-1.md","position-2":"/src/content/careers/position-2.md","position-4":"/src/content/careers/position-4.md","position-3":"/src/content/careers/position-3.md"}},"authors":{"type":"content","entries":{"-index":"/src/content/authors/-index.md","daniel-mitchell":"/src/content/authors/daniel-mitchell.md","benjamin":"/src/content/authors/benjamin.md","darlene-robertson":"/src/content/authors/darlene-robertson.md","devid-harrison":"/src/content/authors/devid-harrison.md","devon-lane":"/src/content/authors/devon-lane.md","jacob-jones":"/src/content/authors/jacob-jones.md","jerome-bell":"/src/content/authors/jerome-bell.md","wlliam-evans":"/src/content/authors/wlliam-evans.md"}},"homepage":{"type":"content","entries":{"index":"/src/content/homepage/index.md"}},"integrations":{"type":"content","entries":{"-index":"/src/content/integrations/-index.md","figma":"/src/content/integrations/figma.md","framer":"/src/content/integrations/framer.md","slack":"/src/content/integrations/slack.md","spotify":"/src/content/integrations/spotify.md","telegram":"/src/content/integrations/telegram.md"}},"sections":{"type":"content","entries":{"call-to-action":"/src/content/sections/call-to-action.md","faq":"/src/content/sections/faq.md","testimonial":"/src/content/sections/testimonial.md"}},"pages":{"type":"content","entries":{"404":"/src/content/pages/404.md","contact":"/src/content/pages/contact.md","about":"/src/content/pages/about.md","elements":"/src/content/pages/elements.mdx","pricing":"/src/content/pages/pricing.md","terms-policy":"/src/content/pages/terms-policy.md"}},"posts":{"type":"content","entries":{"-index":"/src/content/posts/-index.md","post-2":"/src/content/posts/post-2.md","post-1":"/src/content/posts/post-1.md","post-3":"/src/content/posts/post-3.md","post-4":"/src/content/posts/post-4.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/-index.md": () => import('../-index_2cd369e2.mjs'),"/src/content/authors/benjamin.md": () => import('../benjamin_47524af4.mjs'),"/src/content/authors/daniel-mitchell.md": () => import('../daniel-mitchell_d19f7018.mjs'),"/src/content/authors/darlene-robertson.md": () => import('../darlene-robertson_ba3a83b8.mjs'),"/src/content/authors/devid-harrison.md": () => import('../devid-harrison_d7bfb784.mjs'),"/src/content/authors/devon-lane.md": () => import('../devon-lane_d7a0add5.mjs'),"/src/content/authors/jacob-jones.md": () => import('../jacob-jones_e6b4878b.mjs'),"/src/content/authors/jerome-bell.md": () => import('../jerome-bell_70fdc44d.mjs'),"/src/content/authors/wlliam-evans.md": () => import('../wlliam-evans_4a18ee1f.mjs'),"/src/content/careers/-index.md": () => import('../-index_2a0908ff.mjs'),"/src/content/careers/position-1.md": () => import('../position-1_f997dee4.mjs'),"/src/content/careers/position-2.md": () => import('../position-2_271c5bce.mjs'),"/src/content/careers/position-3.md": () => import('../position-3_cedcdea9.mjs'),"/src/content/careers/position-4.md": () => import('../position-4_f85a7f76.mjs'),"/src/content/homepage/index.md": () => import('../index_e28cf403.mjs'),"/src/content/integrations/-index.md": () => import('../-index_14f2e3d7.mjs'),"/src/content/integrations/figma.md": () => import('../figma_7b70f9ab.mjs'),"/src/content/integrations/framer.md": () => import('../framer_acce54d0.mjs'),"/src/content/integrations/slack.md": () => import('../slack_194e1194.mjs'),"/src/content/integrations/spotify.md": () => import('../spotify_3c7e0b07.mjs'),"/src/content/integrations/telegram.md": () => import('../telegram_c1d82a7f.mjs'),"/src/content/pages/404.md": () => import('../404_4ec151f2.mjs'),"/src/content/pages/about.md": () => import('../about_bc6cd369.mjs'),"/src/content/pages/contact.md": () => import('../contact_9a347029.mjs'),"/src/content/pages/elements.mdx": () => import('../elements_3be51545.mjs'),"/src/content/pages/pricing.md": () => import('../pricing_0213d004.mjs'),"/src/content/pages/terms-policy.md": () => import('../terms-policy_9b135619.mjs'),"/src/content/posts/-index.md": () => import('../-index_3421e393.mjs'),"/src/content/posts/post-1.md": () => import('../post-1_74f81760.mjs'),"/src/content/posts/post-2.md": () => import('../post-2_dd9e986f.mjs'),"/src/content/posts/post-3.md": () => import('../post-3_dad772b4.mjs'),"/src/content/posts/post-4.md": () => import('../post-4_f2d5aa3a.mjs'),"/src/content/sections/call-to-action.md": () => import('../call-to-action_38220de2.mjs'),"/src/content/sections/faq.md": () => import('../faq_aacadba9.mjs'),"/src/content/sections/testimonial.md": () => import('../testimonial_e70d6ab4.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$3 = createAstro("https://omniherald.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const { data: cta } = await getEntryBySlug("sections", "call-to-action");
  const { footer } = menu;
  const { email, phone, copyright } = config.params;
  const { showCta, showFooter } = Astro2.props;
  return renderTemplate`${showFooter && renderTemplate`${maybeRenderHead()}<footer${addAttribute(`${!showCta && "footer-alt"} relative z-20 bg-theme-dark after:absolute after:left-0 after:top-0 after:-z-10 after:h-[400px] after:w-full after:bg-[white] after:content-['']`, "class")}><div class="container relative z-30">${showCta && renderTemplate`<div class="shadow-default relative z-20 overflow-hidden rounded-lg bg-white px-8 py-10 sm:px-14"><div class="row items-center text-center sm:text-left"><div class="md:col-12 lg:col-7 xl:col-6"><h2 data-aos="fade-up-sm" class="mb-6 font-secondary !leading-normal sm:text-[46px]">${cta.title}</h2><span class="inline-block align-middle text-[20px] font-bold text-dark" data-aos="fade-up-sm" data-aos-delay="50">
Supported
</span><ul class="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-7 xs:mt-0 xs:inline-flex"><li data-aos="fade-in" class="text-dark" data-aos-delay="300"><a href="#">${renderComponent($$result, "FaWindows", FaWindows, {})}</a></li><li data-aos="fade-in" class="text-dark" data-aos-delay="350"><a href="#">${renderComponent($$result, "FaDropbox", FaDropbox, {})}</a></li><li data-aos="fade-in" class="text-dark" data-aos-delay="400"><a href="#">${renderComponent($$result, "FaHashtag", FaHashtag, {})}</a></li><li data-aos="fade-in" class="text-dark" data-aos-delay="450"><a href="#">${renderComponent($$result, "FaAndroid", FaAndroid, {})}</a></li></ul><div class="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:justify-start sm:gap-8" data-aos="fade-up-sm" data-aos-delay="50">${cta.buttons.primary.enable && renderTemplate`<a${addAttribute(cta.buttons.primary.link, "href")} class="btn btn-primary btn-md">${cta.buttons.primary.label}</a>`}${cta.buttons.secondary.enable && renderTemplate`<a${addAttribute(cta.buttons.secondary.link, "href")} class="btn btn-outline-primary btn-md">${cta.buttons.secondary.label}</a>`}</div></div><!-- End Call To Action Content --><div class="hidden lg:col-5 xl:col-6 lg:block"><div class="cta-clip-path relative" data-aos="fade-right-md">${renderComponent($$result, "Image", $$Image, { "width": 470, "height": 484, "src": cta.image, "class": "mx-auto block", "alt": "banner image" })}</div></div><!-- End Call To Action Image --></div><!-- Start CTA BG SHAPES --><div data-aos="fade-left-sm" class="pointer-events-none absolute left-[-65px] top-0 -z-10 select-none sm:left-0"></div><div data-aos="fade-right-sm" class="pointer-events-none absolute bottom-[40px] right-[-90px] -z-10 select-none xl:right-[-60px]"></div><div class="pointer-events-none absolute bottom-[-120px] left-1/2 -z-10 -translate-x-1/2 select-none sm:bottom-[-90px]"></div></div>`}</div><!-- End Call To Action --><div data-aos="fade-in" data-aos-delay="50"${addAttribute(`container relative z-30 ${showCta ? "pt-[80px] lg:pt-[130px]" : "pt-28 md:pt-40"}`, "class")}><div class="row items-center justify-center pb-10 lg:justify-between"><div class="col-auto"><a href="index.html">${renderComponent($$result, "Image", $$Image, { "width": 164, "height": 38, "src": "/images/logo-light.png", "alt": "spydea" })}</a></div><!-- End Site Logo --><div class="pt-10 lg:col-6 lg:pt-0"><form class="mx-auto flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] sm:flex-row lg:ml-auto lg:mr-0 lg:max-w-full"><input type="search" class="w-full border-0 bg-transparent p-4 pl-6 text-center text-lg placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left md:text-base" placeholder="Enter Your Email Address"><button type="submit" class="btn btn-primary btn-md">
Get A Quote
</button></form></div><!-- End Newletter --></div><!-- End Footer First Row --><hr class="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent"><div class="row gy-5 py-7 text-center lg:g-4 sm:py-14 sm:text-left">${footer.map(
    (widget) => renderTemplate`<div class="sm:col-6 md:col-4 mb-8 xl:mb-0 lg:col-3 xl:col-3"><div class="widget lg:pl-16"><h3 class="widget-title">${widget.title}</h3><ul class="widget-content">${widget.links.map((link) => renderTemplate`<li><a${addAttribute(link.url, "href")}>${link.name}</a></li>`)}</ul></div></div>`
  )}<!-- End Footer Widget --><div class="sm:col-6 md:col-4 mb-8 xl:mb-0 lg:col-4 xl:col-3">${email && renderTemplate`<div class="widget lg:pl-8"><h3 class="widget-title">Email US</h3><div class="mx-auto -mt-1 mb-4 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0"><a${addAttribute(`mailto:${email}`, "href")}>${email}</a></div>${renderComponent($$result, "Social", $$Social, { "className": "social-icons justify-center sm:justify-start", "source": social.main })}</div>`}</div><!-- End Footer Widget --><div class="sm:col-6 md:col-6 mb-8 xl:mb-0 lg:col-3 xl:col-3"><div class="widget lg:pl-16">${phone && renderTemplate`<h3 class="widget-title">Contact US</h3><div class="mx-auto -mt-1 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0"><a${addAttribute(`tel:${phone}`, "href")}>${phone}</a></div>`}</div></div><!-- End Footer Widget --></div><!-- End Footer First Row --><hr class="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent"><p class="copyright">${unescapeHTML(markdownify(copyright))}</p><!-- End Copyright  --></div><!-- End Main Content -->${renderComponent($$result, "LineBg", $$LineBg, { "className": "absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 justify-between", "color": "bg-line-dark" })}<div class="absolute bottom-0 left-0 -z-10 h-full w-full"><div class="pointer-events-none absolute right-0 top-[35%] hidden select-none lg:block"><img class="inject-svg text-quaternary" src="/images/shapes/footer-s-1.svg" alt="shape"></div><div class="pointer-events-none absolute bottom-0 hidden select-none lg:block min-[1024px]:left-[-6%] min-[1400px]:left-0"><img class="inject-svg text-quinary" src="/images/shapes/footer-s-2.svg" alt="shape"></div><div class="pointer-events-none absolute bottom-0 right-0 hidden select-none lg:block"><img class="inject-svg text-secondary" src="/images/shapes/footer-s-3.svg" alt="shape"></div></div><!-- End background Lines --></footer>`}<!-- End Main Footer -->`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/partials/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://omniherald.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { bgColor = "bg-quaternary/20" } = Astro2.props;
  return renderTemplate`<!--<LineBg--><!--  className="line-bg fixed left-0 top-1/2 z-10 flex h-screen w-full -translate-y-1/2 justify-between"--><!--/>--><!-- End background lines -->${renderComponent($$result, "PromoBar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/PromoBar", "client:component-export": "default" })} <!-- End Top Header  --> ${maybeRenderHead()}<header${addAttribute(`header z-50 ${bgColor}`, "class")}> <nav class="navbar container relative z-30"> <a href="/" class="navbar-brand"> ${renderComponent($$result, "Image", $$Image, { "width": 158, "height": 36, "src": "/images/logo-dark.png", "alt": "spydea" })} </a>   <button${addAttribute(`navbar-toggler group relative ml-auto lg:ml-4`, "class")} aria-label="navbar toggler"> <div class="relative flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden rounded-full ring-0 transition-all duration-200"> <div class="flex h-[15px] w-[18px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 group-[.active]:h-[21px]"> <div class="h-[2px] w-7 origin-left transform bg-dark transition-all duration-300 group-[.active]:translate-x-10"></div> <div class="h-[2px] w-7 transform rounded bg-dark transition-all delay-75 duration-300 group-[.active]:translate-x-10"></div> <div class="h-[2px] w-7 origin-left transform bg-dark transition-all delay-150 duration-300 group-[.active]:translate-x-10"></div> <div class="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-[.active]:w-12 group-[.active]:translate-x-0"> <div class="absolute h-[2px] w-5 rotate-0 transform bg-dark transition-all delay-300 duration-500 group-[.active]:rotate-45"></div> <div class="absolute h-[2px] w-5 -rotate-0 transform bg-dark transition-all delay-300 duration-500 group-[.active]:-rotate-45"></div> </div> </div> </div> </button>  <div${addAttribute(`navbar-wrapper`, "class")}> <ul class="navbar-nav"> ${// main.map((item, i) => {
  //   return item.hasChildren ? (
  //     <li class="nav-item nav-dropdown group">
  //       <label for={item.name}>
  //         <span class="nav-link inline-flex items-center">
  //           {item.name}
  //           <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
  //             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  //           </svg>
  //         </span>
  //       </label>
  //       <input class="peer hidden" type="checkbox" id={item.name} />
  //       <ul class="nav-dropdown-list lg:group-hover:visible lg:group-hover:opacity-100 peer-checked:max-lg:block">
  //         {item.children?.map((child, i) => {
  //           return (
  //             <li key={i} class="nav-dropdown-item">
  //               <a href={child.url} class="nav-dropdown-link">
  //                 {child.name}
  //               </a>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </li>
  //   ) : (
  //     <li key={i} class="nav-item">
  //       <a href={item.url} class="nav-link">
  //         {item.name}
  //       </a>
  //     </li>
  //   );
  // })
  renderTemplate`<!--}--><div class="order-2 mx-auto mb-[0.75rem] flex flex-col items-center lg:mx-0 lg:mb-0 lg:ml-7 lg:flex-row"> <div class="flex flex-col justify-center gap-5 pt-4 text-center lg:ml-7 lg:flex-row lg:gap-7 lg:pt-0 lg:text-left"> <!--{--> <!--  navigation_buttons.map((button, i) => {--> <!--    return (--> <!--      button?.enable && (--> <!--        <a--> <!--          href={button.link}--> <!--          class={\`btn \${--> <!--            i === 0 ? "btn-outline-primary" : "btn-primary"--> <!--          } w-[200px] min-[340px]:w-[300px] lg:w-auto\`}--> <!--        >--> <!--          {button.label}--> <!--        </a>--> <!--      )--> <!--    );--> <!--  })--> <!--}--> </div> </div>`}  ${bgColor !== "bg-transparent" && renderTemplate`${renderComponent($$result, "LineBg", $$LineBg, { "className": "line-bg absolute z-20", "color": "bg-line-yellow" })}`} </ul> </div></nav></header>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/partials/Header.astro", void 0);

const $$Astro$1 = createAstro("https://omniherald.com");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const {
    title,
    meta_title,
    description,
    image,
    noindex,
    canonical,
    headerBg,
    showCta = true,
    showFooter = false
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="spydea-astro"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- google font css --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link${addAttribute(`https://fonts.googleapis.com/css2?family=${pf}${"&family=" + sf }&display=swap`, "href")} rel="stylesheet"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>
      ${plainify(meta_title ? meta_title : title ? title : config.site.title)}
    </title><!-- canonical url -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}<!-- noindex robots -->${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- meta-description --><meta name="description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- og-title --><meta property="og:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- og-description --><meta property="og:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}><!-- twitter-title --><meta name="twitter:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- twitter-description --><meta name="twitter:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- og-image --><meta property="og:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><!-- twitter-image --><meta name="twitter:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <body> ${renderComponent($$result, "TwSizeIndicator", $$TwSizeIndicator, {})} ${renderComponent($$result, "Header", $$Header, { "bgColor": headerBg })} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "showFooter": showFooter, "showCta": showCta })}  </body> </html>`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/layouts/Base.astro", void 0);

const $$Astro = createAstro("https://omniherald.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const entry = await getEntryBySlug("pages", "404");
  const { Content } = await entry.render();
  const {
    data: { title, image }
  } = entry;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": entry.data.title, "headerBg": "bg-transparent", "showCta": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container relative z-30"> <h1 class="h2 mb-4 text-center">${unescapeHTML(markdownify(title))}</h1> <div class="row items-center"> <div data-aos="fade-in" class="col-12 text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": "404 illustration", "width": 750, "height": 438, "class": "mx-auto mb-14 block w-full max-w-[750px] select-none" })} <div class="content mb-5 text-lg"> ${renderComponent($$result2, "Content", Content, {})} </div> <a href="/" class="btn btn-primary">Go Back Home</a> </div> </div> </div> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/404.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LineBg as $, DynamicIcon as D, _404 as _, $$Base as a, $$Image as b, config as c, $$Social as d, getEntryBySlug as e, getCollection as g, humanize as h, markdownify as m, plainify as p, slugify as s };
