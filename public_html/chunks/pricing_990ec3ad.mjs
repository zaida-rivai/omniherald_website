import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Choose the Plan That’s Right for You","meta_title":"","description":"this is meta description","draft":false,"pricing":{"subtitle":"CHOOSE PLAN FOR YOU","title":"Try Spydea for free Now","description":"Lorem ipsum dolor sit amet, consectetur mag na dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut","button":{"enable":true,"label":"Sign up For Free","link":"/register"},"plans":[{"title":"Standard license","icon":"/images/icons/award.png","subtitle":"Traffic Corporate Sites","price":"200 <span>/month</span>","type":"Standard","content":["<strong>Pellentesque</strong> dapibus quam","<strong>Morbi convallis</strong> a urna quis lacinia","<strong>Aliquam</strong> vehicula laoreet ligula","<strong>Sed dapibus</strong> vitae mauris id fringilla"]},{"title":"Enterprise License","icon":"/images/icons/price-tag.png","subtitle":"Traffic Corporate Sites","price":"500 <span>/month</span>","type":"Enterprise","tag":"popular","content":["<strong>Pellentesque</strong> dapibus quam","<strong>Morbi convallis</strong> a urna quis lacinia","<strong>Aliquam</strong> vehicula laoreet ligula","<strong>Sed dapibus</strong> vitae mauris id fringilla"]}]}};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/pages/pricing.md";
				const url = "/pricing";
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
