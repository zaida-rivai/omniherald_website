/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_a70aee5d.mjs';
import 'clsx';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import 'react';
import { FiChevronRight } from 'react-icons/fi/index.js';
import { a as $$Base } from './404_20bb4f26.mjs';

const Account = ({
  children,
  title,
  description,
  pathname
}) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "section relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container relative z-30", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto lg:col-9 xl:col-7", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        "data-aos": "fade-up-sm",
        className: "shadow-default rounded-2xl bg-white px-8 py-8 sm:px-20 sm:py-20",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
            /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "mx-auto mb-6 block w-[60px] sm:mb-12 sm:w-[70px] md:w-[130px]",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                width: 130,
                height: 130,
                fill: "none",
                children: [
                  /* @__PURE__ */ jsx("rect", { width: 130, height: 130, fill: "url(#a)", rx: 65 }),
                  /* @__PURE__ */ jsxs("defs", { children: [
                    /* @__PURE__ */ jsx(
                      "pattern",
                      {
                        id: "a",
                        width: 1,
                        height: 1,
                        patternContentUnits: "objectBoundingBox",
                        children: /* @__PURE__ */ jsx("use", { xlinkHref: "#b", transform: "scale(.00714)" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "image",
                      {
                        xlinkHref: "data:image/png;base64,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",
                        id: "b",
                        width: 140,
                        height: 140
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "mb-5 sm:mb-10 md:text-4xl lg:text-5xl", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg sm:mb-16", children: description }),
            pathname !== "/reset-password" && /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://google.com",
                target: "_blank",
                className: "block rounded-lg border border-border px-5 py-3 text-neutral-400 transition-colors duration-200 hover:border-dark sm:py-4",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      width: 24,
                      height: 24,
                      src: "./images/logo/google.svg",
                      className: "mr-2 inline-block w-fit",
                      alt: "google"
                    }
                  ),
                  title,
                  " With Google"
                ]
              }
            )
          ] }),
          pathname !== "/reset-password" && /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("hr", { className: "w-full border-border" }),
            /* @__PURE__ */ jsxs("span", { className: "whitespace-nowrap px-4 text-zinc-400 text-opacity-70", children: [
              "Or ",
              title,
              " With Email"
            ] }),
            /* @__PURE__ */ jsx("hr", { className: "w-full border-border" })
          ] }),
          /* @__PURE__ */ jsxs("form", { method: "post", className: "row gy-3 text-dark", children: [
            pathname !== "/reset-password" && /* @__PURE__ */ jsxs(Fragment, { children: [
              pathname === "/sign-up" && /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "form-label", children: "Full Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input",
                    placeholder: "Your Full Name",
                    id: "name",
                    required: true,
                    name: "name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "form-label", children: "Email Adrdess" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    className: "form-input",
                    placeholder: "Your Email Address",
                    id: "email",
                    required: true,
                    name: "email"
                  }
                )
              ] })
            ] }),
            title !== "/reset-password" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "password",
                    className: "form-input",
                    placeholder: "Enter Your Password",
                    id: "password",
                    required: true,
                    name: "password"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "btn btn-primary btn-icon mt-6",
                  children: [
                    title,
                    /* @__PURE__ */ jsx(FiChevronRight, {})
                  ]
                }
              ) })
            ] })
          ] }),
          children
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute left-[-4%] top-[-4%] -z-10 select-none",
        "data-aos": "fade-right-sm",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "inject-svg text-quaternary",
            src: "/images/shapes/login-s-1.svg",
            alt: "shape"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute right-[-12%] top-[12%] -z-10 select-none",
        "data-aos": "fade-left-sm",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "inject-svg text-quinary",
            src: "/images/shapes/login-s-2.svg",
            alt: "shape"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute bottom-[25%] left-[-10%] -z-10 select-none",
        "data-aos": "fade-right-sm",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "inject-svg text-tertiary",
            src: "/images/shapes/login-s-3.svg",
            alt: "shape"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute bottom-[-10%] right-[-9%] -z-10 select-none",
        "data-aos": "fade-left-sm",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "inject-svg text-secondary",
            src: "/images/shapes/login-s-4.svg",
            alt: "shape"
          }
        )
      }
    )
  ] }) }) }) }) });
};

const $$Astro = createAstro("https://omniherald.com");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { pathname } = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "showFooter": false, "headerBg": "bg-transparent" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Account", Account, { "title": "Login", "pathname": pathname, "description": "Donec rutrum congue leo eget malesuada. Sed porttitor nibh. Cras ultricies ligula sed magna dictum porta. Vestibulum" }, { "default": ($$result3) => renderTemplate` <p class="mt-6 text-center">
Don&apos;t have any account?${" "} <a class="font-medium underline underline-offset-2 hover:no-underline" href="sign-up">
Sign Up
</a> </p> <p class="mt-2 text-center">
Forget your password?${" "} <a class="font-medium underline underline-offset-2 hover:no-underline" href="/reset-password">
Reset Password
</a> </p> ` })} </main> ` })}`;
}, "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/login.astro", void 0);

const $$file = "/Users/zaidarivai/Desktop/website/omniheral_light/src/pages/login.astro";
const $$url = "/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Account as A, login as l };
