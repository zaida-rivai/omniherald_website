import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"subtitle":"COMMON INQUIRIES","title":"Frequently Asked Questions","description":"Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum.","faqs":[{"title":"How does the free trial work?","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid."},{"title":"Do I need a creditcard to Sign up?","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid."},{"title":"How does the free trial work?","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid."},{"title":"How does the free trial work?","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid."},{"title":"Do I need a creditcard to Sign up?","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid."},{"title":"Can I change my plan at any time?","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid."}]};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/sections/faq.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
