import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"subtitle":"INSPIRING TESTIMONIALS","title":"Take an Look at Our Customers Stories","list":[{"name":"Devon Lane","designation":"VP growth at Facebook","avatar":"/images/customers/1.jpg","company_logo":"/images/logo/1.png","title":"Efficient Experience with Superb Customer Support","content":"elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam"},{"name":"Guy Hawkins","designation":"VP growth at Facebook","avatar":"/images/customers/2.jpg","company_logo":"/images/logo/2.png","title":"Seamless Integration and Powerful Functionality","content":"elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam"},{"name":"Savannah Nguyen","designation":"VP growth at Facebook","avatar":"/images/customers/3.jpg","company_logo":"/images/logo/3.png","title":"Empowering Businesses with Cutting-Edge Solutions","content":"elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam"},{"name":"Ronald Richards","designation":"VP growth at Facebook","avatar":"/images/customers/4.jpg","company_logo":"/images/logo/1.png","title":"Revolutionizing Business with Scalable Solutions","content":"elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam"}]};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/sections/testimonial.md";
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
