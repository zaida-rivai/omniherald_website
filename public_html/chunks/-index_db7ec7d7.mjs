import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Career At Spydea","meta_title":"career at spydea","description":"Nulla quis lorem ut libero male suada feugiat. Prae sent massa, convallis a pellent esque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Quisque velit nisi","image":"/images/career.jpg","benefits":{"subtitle":"BENEFITS AND ADVANTAGES","title":"Why Working With Us?","description":"Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum","list":[{"icon":"FaClock","title":"Flexible Hours","content":"laoreet elementum nulla dolor sit amet conctetur adipiscing elit aluam lorem amet eget netus dictum odio"},{"icon":"FaHouseLaptop","title":"100% Remote","content":"laoreet elementum nulla dolor sit amet conctetur adipiscing elit aluam lorem amet eget netus dictum odio"},{"icon":"FaChartLine","title":"Career Growth","content":"laoreet elementum nulla dolor sit amet conctetur adipiscing elit aluam lorem amet eget netus dictum odio"}]},"openPositions":{"enable":true,"subtitle":"JOIN OUR TEAM","title":"Spydea Open Positions","description":"Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum"}};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/careers/-index.md";
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
