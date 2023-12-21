import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "<h4 id=\"what-is-the-role\">What Is the role?</h4>\n<p>We are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt management, investments. You’ll be on the front lines helping clients in what is arguably the most important position at the company.</p>\n<h4 id=\"about-you\">About you</h4>\n<p>We are especially interested in finding developers with experience either building web APIs with Go or experience with functional programming (e.g. Elixir, NodeJS, Clojure, F#). You might not have experience with all the technologies in our stack, but you are motivated to learn deeply. You will get the opportunity to work with both Go and Elixir with experienced team mates who can teach and pair with you to learn whatever you have less experience with.You care about security, code quality, scalability, performance, and simplicity. Above all, you seek operational excellence and apply the best engineering practices possible. Not everything that you or your team do can be perfect, but you make sure that you always know the trade-offs.</p>\n<h4 id=\"what-is-the-role-1\">What Is the role?</h4>\n<p>We are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt management, investments. You’ll be on the front lines helping clients in what is arguably the most important position at the company.</p>\n<h4 id=\"responsibilities\">Responsibilities</h4>\n<ul>\n<li>Enhance or improve User experience, our Site, or our Service.</li>\n<li>Process transactions.</li>\n<li>Send emails about our Site or respond to inquiries.</li>\n<li>Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our - Terms of Service.</li>\n<li>Perform any other function that we believe in good is necessary to protect the or proper functioning of our Site or Service.</li>\n</ul>\n<h4 id=\"requirements\">Requirements</h4>\n<p>We are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt</p>\n<h4 id=\"we-offer-you\">We offer you</h4>\n<ul>\n<li>Enhance or improve User experience, our Site, or our Service.</li>\n<li>Process transactions.</li>\n<li>Send emails about our Site or respond to inquiries.</li>\n<li>Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our - Terms of Service.</li>\n<li>Perform any other function that we believ</li>\n</ul>";

				const frontmatter = {"title":"Lead Brand Designer","description":"Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte","location":"San Francisco","type":"fulltime","draft":false};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/careers/position-4.md";
				const url = undefined;
				function rawContent() {
					return "\n#### What Is the role?\n\nWe are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt management, investments. You’ll be on the front lines helping clients in what is arguably the most important position at the company.\n\n#### About you\n\nWe are especially interested in finding developers with experience either building web APIs with Go or experience with functional programming (e.g. Elixir, NodeJS, Clojure, F#). You might not have experience with all the technologies in our stack, but you are motivated to learn deeply. You will get the opportunity to work with both Go and Elixir with experienced team mates who can teach and pair with you to learn whatever you have less experience with.You care about security, code quality, scalability, performance, and simplicity. Above all, you seek operational excellence and apply the best engineering practices possible. Not everything that you or your team do can be perfect, but you make sure that you always know the trade-offs.\n\n#### What Is the role?\n\nWe are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt management, investments. You’ll be on the front lines helping clients in what is arguably the most important position at the company.\n\n#### Responsibilities\n\n- Enhance or improve User experience, our Site, or our Service.\n- Process transactions.\n- Send emails about our Site or respond to inquiries.\n- Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our - Terms of Service.\n- Perform any other function that we believe in good is necessary to protect the or proper functioning of our Site or Service.\n\n#### Requirements\n\nWe are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt\n\n#### We offer you\n\n- Enhance or improve User experience, our Site, or our Service.\n- Process transactions.\n- Send emails about our Site or respond to inquiries.\n- Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our - Terms of Service.\n- Perform any other function that we believ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"what-is-the-role","text":"What Is the role?"},{"depth":4,"slug":"about-you","text":"About you"},{"depth":4,"slug":"what-is-the-role-1","text":"What Is the role?"},{"depth":4,"slug":"responsibilities","text":"Responsibilities"},{"depth":4,"slug":"requirements","text":"Requirements"},{"depth":4,"slug":"we-offer-you","text":"We offer you"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
