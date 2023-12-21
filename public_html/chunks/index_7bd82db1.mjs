import { v as createComponent, w as renderTemplate, x as maybeRenderHead, y as unescapeHTML } from './astro_a70aee5d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"banner":{"title":"Optimize your agricultural data","content":"OmniHerald is an agricultural data marketplace that unites farmers and stakeholders in a revolution of agricultural intelligence. Suitable for Agricultural Commodity traders, Food industries and Governments.","image":"/images/banner.png","newsletter":true,"supported":{"title":"Supported","list":[{"icon":"FaWindows","link":"#?"},{"icon":"FaDropbox","link":"#?"},{"icon":"FaHashtag","link":"#"},{"icon":"FaAndroid","link":"#?"}],"facility":["AI-driven","Interoperable Data","Traceability"]}},"brands":["/images/brands/1.png","/images/brands/2.png"],"features":{"subtitle":"Our core features","title":"What you get with OmniHerald","description":"Innovative agricultural analytics platform","button":{"enable":true,"label":"All Features","link":"#"},"list":[{"icon":"FaObjectUngroup","title":"AI-driven decision support","description":"Advanced analytics and AI-driven insights, optimizing crop production, reduce costs, and increase sustainability."},{"icon":"FaRegLightbulb","title":"Market Insights","description":"Tailored analytics and predictive models to forecast market trends, evaluate risks, and identify opportunities."},{"icon":"FaRegPaperPlane","title":"Data Interoperability","description":"A seamless integration of diverse, real-time agricultural data into a unified database for precision-driven decision-making"},{"icon":"FaCopy","title":"Data Access","description":"A comprehensive database offering granular, realtime agricultural data for informed decision-making."}]},"showcase":{"subtitle":"EXPERIENCE SPEAKS","title":"Don't Take Our Word For It","description":"Real-time insights into specialty agricultural commodities","list":[{"title":"Features You will Need","description":"Access to crop yields, price data, granular weather data, finacial farm data and more.","image":"/images/tab-contents/feature-tab-content-1.jpg"},{"title":"Increase Your Sales","description":"Know exactly when it is the right time to buy and to sell.","image":"/images/tab-contents/feature-tab-content-2.jpg"},{"title":"Choose Right Plan","description":"Customize your pricing plan to give yourself the optimal experience.","image":"/images/tab-contents/feature-tab-content-3.jpg"}]},"funfacts":{"subtitle":"ACHIEVING EXCELLENCE","title":"What we have achieved so far","description":null,"list":[{"count":"550+","text":"Data Suppliers Onboard"},{"count":"150 K+","text":"New Data Points Monthly"},{"count":"30","text":"Different Countries"}]},"services":[{"subtitle":"Honest support for farmers","title":"Envision a world where farmers are rightfully rewarded for their hard work and dedication.","description":"A safe and secure portal for farmers to upload and monetize agricultural data","image":"/images/feature-1.png"},{"subtitle":"Transparent Insights","title":"And where you can ensure transparency in 100+ commodity trading data.","description":"Seamlessly navigate our platform from any device – experience the convenience of accessing comprehensive features through a web browser or on your smartphone. Designed with user-friendliness at its core, our interface ensures effortless interaction and accessibility.","image":"/images/feature-2.png"}],"article":{"subtitle":"Transparency for you","title":"Take a Look at the Latest Articles from Our Blog","button":{"enable":true,"label":"All Features","link":"#"}}};
				const file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/content/homepage/index.md";
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
