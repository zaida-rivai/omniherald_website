/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_a70aee5d.mjs';
import 'clsx';
import { e as getEntryBySlug, a as $$Base } from './404_20bb4f26.mjs';
import { $ as $$PageHeader } from './_regular__fe8b40d2.mjs';

const $$Astro = createAstro("https://omniherald.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const entry = await getEntryBySlug("pages", "contact");
  const { title, description, meta_title, image, supports } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<section class="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]"> <div class="container relative z-30"> <div class="row relative"> <div class="mx-auto md:col-10"> <div data-aos="fade-up-sm" class="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"> <form method="post" class="row gy-4 text-dark"> <div class="sm:col-6"> <label for="fname" class="form-label">First Name</label> <input type="text" class="form-input" placeholder="Your First Name" id="fname" name="fname" required> </div> <div class="sm:col-6"> <label for="lname" class="form-label">Last Name</label> <input type="text" class="form-input" placeholder="Your Last Name" id="lname" name="lname" required> </div> <div class="col-12"> <label for="email" class="form-label">Email Address</label> <input type="email" class="form-input" placeholder="Your Email Address" id="email" required name="email"> </div> <div class="col-12"> <label for="purpose" class="form-label">Reason/Purpose</label> <select id="purpose" required class="w-full rounded-lg border-border px-5 py-4 text-sm"> <option value="0">General Inquiry</option> <option value="1">Support Request</option> <option value="2">Partnership Opportunity</option> </select> </div> <div class="col-12"> <label for="message" class="form-label">Message</label> <textarea name="message" class="form-textarea" placeholder="Your Message" id="message" cols="30" required rows="4"></textarea> </div> <div class="col-12 text-right"> <button type="submit" class="btn btn-primary">
Submit Now
</button> </div> </form> </div> </div> <!-- Start Bg Shape --> <div data-aos="fade-right-sm" class="pointer-events-none absolute bottom-[-8%] left-[5%] -z-10 hidden w-fit lg:block"> <img class="inject-svg text-quaternary" src="/images/shapes/contact-s-1.svg" alt="shape"> </div> <div data-aos="fade-left-sm" class="pointer-events-none absolute right-[4%] top-[35%] -z-10 hidden w-fit lg:block"> <img class="inject-svg text-tertiary" src="/images/shapes/contact-s-2.svg" alt="shape"> </div> <!-- End Bg Shape --> </div> <div class="row gy-4 pt-12 text-center md:justify-between md:pt-24 lg:justify-around"> ${supports.map((support) => {
    return renderTemplate`<div data-aos="fade-up-sm" class="md:col-auto"> <h2 class="sm:3xl mb-5 text-2xl font-semibold text-dark md:text-4xl"> ${support.type} </h2> <p class="mb-2 text-lg sm:text-xl"> <a class="hover:underline hover:underline-offset-2" href="mailto:support@company.com"> ${support.email} </a> </p> <p class="text-lg sm:text-xl"> <a class="hover:underline hover:underline-offset-2" href="tel:+1 234 567 8999"> ${support.mobile} </a> </p> </div>`;
  })} </div> </div> </section> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/contact.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
