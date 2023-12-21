import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "<p>The page you are looking for is not found!</p>";

				const frontmatter = {"title":"Page Not Found","image":"/images/404.png"};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/pages/404.md";
				const url = "/404";
				function rawContent() {
					return "\nThe page you are looking for is not found!\n";
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
