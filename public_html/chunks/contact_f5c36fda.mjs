import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Drop Us a Line and Will Get Back to You","meta_title":"","description":"this is meta description","draft":false,"supports":[{"type":"Contact Support","email":"support@company.com","mobile":"+1 234 567 8999"},{"type":"Contact Careers","email":"careers@company.com","mobile":"+1 234 567 8999"},{"type":"Contact Press","email":"press@company.com","mobile":"+1 234 567 8999"}]};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/pages/contact.md";
				const url = "/contact";
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
