import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"About Spydea","meta_title":"About us","description":"Vivamus accu msan tincidunt. Vestib ulum ac diam sit amet quam vehicula elementum sed suscipit tortor eget felis porttitor volut","image":"/images/avatar.png","draft":false,"funfacts":{"subtitle":"ACHIEVING EXCELLENCE","title":"A Few Numbers We are Proud","description":"Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum","list":[{"count":"94 %","text":"Client Retention"},{"count":"70 M+","text":"Emails Per Month"},{"count":"10 K+","text":"Monthly Campaigns"}]},"goals":[{"title":"WE HAVE OUR VISION","subtitle":"A World Financial Connected with Open Opportunates all"},{"title":"WE ARE THE ULTIMATE","subtitle":"Connect the World Through a Smart, Free and Financing App"}],"team":{"subtitle":"OUR TEAM MEMBERS","title":"Amazing Team Behind The Spydea App","button":{"enable":true,"label":"Become A Team Member","link":"#"},"members":[{"avatar":"/images/team-member/1.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/2.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/3.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/4.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/5.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/6.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/7.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]},{"avatar":"/images/team-member/8.jpg","name":"Bessie Cooper","content":"adipiscing cons cte tur dolor sit amet, cons cte tur dolorili","socials":[{"icon":"FaFacebook","link":"#"},{"icon":"FaLinkedin","link":"#"},{"icon":"FaTwitter","link":"#"}]}]}};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\n";
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
