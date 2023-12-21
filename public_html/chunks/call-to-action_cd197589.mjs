import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"title":"Sign up and Get Insights Today!","image":"/images/cta-image.png","buttons":{"primary":{"enable":true,"label":"Sign up!","link":"https://github.com/zeon-studio/astroplate"},"secondary":{"enable":true,"label":"Contact Us!","link":"https://github.com/zeon-studio/astroplate"}}};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/sections/call-to-action.md";
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
