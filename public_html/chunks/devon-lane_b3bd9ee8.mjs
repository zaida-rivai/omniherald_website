import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "<p>We are especially interested in finding developers with experience either building web APIs with Go or experience with functional programming (e.g. Elixir, NodeJS, Clojure, F#). You might not have experience with all the technologies in our stack, but you are motivated to learn deeply. You will get the opportunity to work with both Go and Elixir with experienced team mates who can teach and pair with you to learn whatever you have less experience with.You care about security, code quality, scalability.</p>\n<p>We are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. on areas including: saving, retirement, debt management,</p>";

				const frontmatter = {"title":"Devon Lane","email":"johndoe@email.com","image":"/images/authors/7.jpg","description":"Lorem ipsum dolor sit amet, cons cte tur dolorili","social":[{"icon":"FaFacebook","link":"https://facebook.com/"},{"icon":"FaTwitter","link":"https://twitter.com/"},{"icon":"FaInstagram","link":"https://www.instagram.com/"}]};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/authors/devon-lane.md";
				const url = undefined;
				function rawContent() {
					return "\nWe are especially interested in finding developers with experience either building web APIs with Go or experience with functional programming (e.g. Elixir, NodeJS, Clojure, F#). You might not have experience with all the technologies in our stack, but you are motivated to learn deeply. You will get the opportunity to work with both Go and Elixir with experienced team mates who can teach and pair with you to learn whatever you have less experience with.You care about security, code quality, scalability.\n\nWe are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. on areas including: saving, retirement, debt management,\n";
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
