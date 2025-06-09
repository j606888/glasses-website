import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const items = [
  {
    icon: "home-section2-1.png",
    title: "單一價格",
    description: "無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。"
  },
  {
    icon: "home-section2-2.png",
    title: "20 分鐘即可取件",
    description: "為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。"
  },
  {
    icon: "home-section2-3.png",
    title: "安心售後服務",
    description: "我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。"
  },
  {
    icon: "home-sectioin2-4.png",
    title: "關於鏡片",
    description: "使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。"
  }
];
function AboutUs() {
  return /* @__PURE__ */ jsxs("section", { className: "px-3 bg-[#FBF2F2] py-10 md:px-9 md:py-20 xl:px-0 ", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl md:text-5xl font-bold mb-9 text-[#650300]", children: "用專業的心，做專業的事" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center flex-col gap-6 max-w-7xl mx-auto  md:flex-row md:flex-wrap lg:flex-nowrap", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:w-[calc(50%-12px)]", children: [
      /* @__PURE__ */ jsx("img", { src: `/${item.icon}`, alt: item.title, className: "mb-6 w-25 h-25 xl:w-16 xl:h-16 xl:mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#650300] mb-2", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-base ", children: item.description })
    ] }, item.title)) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "bg-[url('/home-header-sm.png')] xl:bg-[url('/home-header.png')] h-[396px] bg-cover bg-center xl:h-[787px] ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end justify-center mx-auto max-w-7xl h-full px-[14px] md:px-9", children: [
    /* @__PURE__ */ jsx("p", { className: "text-base text-[#650300] md:text-4xl", children: "Promise-Desert 2020 早春系列" }),
    /* @__PURE__ */ jsx("h2", { className: "text-[#650300] text-2xl mb-2 font-bold md:text-[64px] md:mb-1 ", children: "看得清，才能看得遠" }),
    /* @__PURE__ */ jsx("button", { className: "bg-[#AA0601] text-white text-xl border-none px-3 py-2", children: "立即購買" })
  ] }) });
}
const series$1 = [
  {
    image: "home-section3-1.png",
    title: "OPTICAL"
  },
  {
    image: "home-section3-2.png",
    title: "SUNGLASSES"
  },
  {
    image: "home-section3-3.png",
    title: "FUNCTIONAL"
  }
];
function Glasses() {
  return /* @__PURE__ */ jsxs("section", { className: "px-3 py-10 md:py-20 xl:px-0", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl mb-6 md:text-5xl font-bold md:mb-12 text-[#650300]", children: "經典系列鏡框" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-6 max-w-7xl mx-auto flex-col lg:flex-row", children: series$1.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("img", { src: `/${item.image}`, alt: item.title, className: "w-full mb-4 md:w-[336px] xl:w-full" }),
      /* @__PURE__ */ jsx("h3", { className: "text-5xl font-bold text-[#AA0601] mb-2 italic", children: item.title })
    ] }, item.title)) })
  ] });
}
const series = [
  {
    image: "home-section4-1.png",
    mobileImage: "home-section4-1-sm.png",
    title: "DOUBLE A+"
  },
  {
    image: "home-section4-2.png",
    mobileImage: "home-section4-2-sm.png",
    title: "YOUTH"
  }
];
function CoBranding() {
  return /* @__PURE__ */ jsxs("section", { className: "py-10 px-3 md:py-20 bg-[url('/index-bg.png')] bg-center md:px-9 xl:px-0", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl text-center md:text-5xl font-bold mb-6 md:mb-12 text-white", children: "聯名設計鏡框" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center max-w-7xl mx-auto flex-col xl:flex-row gap-6 xl:gap-0", children: series.map((series2) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: `/${series2.image}` }),
        /* @__PURE__ */ jsx("source", { media: "(max-width: 767px)", srcSet: `/${series2.mobileImage}` }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `/${series2.image}`,
            alt: series2.title,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center bg-white py-2 w-full", children: /* @__PURE__ */ jsx("h3", { className: "text-5xl font-bold text-[#AA0601] italic leading-[72px]", children: series2.title }) })
    ] }, series2.title)) })
  ] });
}
const customers = [
  {
    image: "home-section5-1.png",
    name: "Jessy",
    content: "眼鏡品質優良，下次還會想來這邊購買！",
    date: "2021/06/20"
  },
  {
    image: "home-section5-2.png",
    name: "凱倫",
    content: "做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！",
    date: "2021/04/18"
  },
  {
    image: "home-section5-3.png",
    name: "悠悠",
    content: "謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！",
    date: "2020/12/25"
  },
  {
    image: "home-section5-4.png",
    name: "Kyuan",
    content: "服務很好，品質沒有任何問題，非常喜歡。",
    date: "2020/10/31"
  }
];
function Customers() {
  return /* @__PURE__ */ jsxs("section", { className: "py-10 px-3 md:py-20 md:px-9 xl:px-0", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl md:text-5xl font-bold mb-6 md:mb-12 text-[#650300]", children: "顧客推薦" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center max-w-7xl mx-auto gap-4 md:gap-6 flex-col md:flex-row md:flex-wrap xl:flex-nowrap", children: customers.map((customer) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center rounded-sm shadow-[0_2px_6px_#00000029] md:w-[calc(50%-12px)]", children: [
      /* @__PURE__ */ jsx("img", { src: `/${customer.image}`, alt: customer.name, className: "w-full h-[306px] object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 h-[205px] flex flex-col w-full", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-medium mb-2", children: customer.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-6", children: customer.content }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-[#707070] mt-auto", children: customer.date })
      ] })
    ] })) })
  ] });
}
const InputForm = ({ label, placeholder, type, id, name }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block mb-2", htmlFor: id, children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "w-full border-1 py-1.5 px-3 placeholder:text-[#c0c0c0]",
        placeholder,
        type,
        id,
        name
      }
    )
  ] });
};
function ContactUs() {
  return /* @__PURE__ */ jsxs("section", { className: "py-10 px-3 md:py-20 md:px-9 xl:px-0 bg-[#FBF2F2]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl md:text-5xl font-bold mb-6 md:mb-12 text-[#650300]", children: "聯絡我們" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto md:max-w-[576px] xl:max-w-[636px] ", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base xl:text-xl mb-6", children: "我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。" }),
      /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx(InputForm, { label: "姓名", placeholder: "陳小明", type: "text", id: "name", name: "name" }),
        /* @__PURE__ */ jsx(InputForm, { label: "聯絡電話", placeholder: "0912-345-678", type: "text", id: "phone", name: "phone" }),
        /* @__PURE__ */ jsx(InputForm, { label: "電子郵件", placeholder: "example@email.com", type: "text", id: "phone", name: "phone" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block mb-2", htmlFor: "review", children: "意見反應" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              className: "w-full border-1 py-1.5 px-3 placeholder:text-[#c0c0c0]",
              placeholder: "請輸入您的意見",
              id: "review",
              name: "review",
              rows: 5
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "privacy", name: "privacy", className: "mr-2 hidden" }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "privacy", className: "flex items-start cursor-pointer", children: [
            /* @__PURE__ */ jsx("img", { src: "/checkbox.svg", alt: "checkbox", className: "w-6 h-6 mr-2" }),
            "我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "bg-[#AA0601] text-white p-4 w-full mx-auto mt-9 md:w-[336px] xl:w-[416px]",
            children: "確認送出"
          }
        )
      ] })
    ] })
  ] });
}
const socials = [
  {
    image: "/ic-social-fb.png",
    alt: "facebook"
  },
  {
    image: "/ic_social_ig.png",
    alt: "instagram"
  },
  {
    image: "/ic_social_line.png",
    alt: "line"
  }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#AA0601] px-3 pt-6 md:pt-12 pb-6 md:pb-8 md:px-9 relative", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col max-w-7xl mx-auto text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute top-6 right-6 md:relative md:top-0 md:right-0 flex justify-end  md:flex-row md:justify-between w-full items-center mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-12", children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: "首頁" }),
        /* @__PURE__ */ jsx("a", { href: "/", children: "系列鏡框" }),
        /* @__PURE__ */ jsx("a", { href: "/", children: "門市據點" }),
        /* @__PURE__ */ jsx("a", { href: "/", children: "部落格" }),
        /* @__PURE__ */ jsx("a", { href: "/", children: "常見問題" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 xl:gap-8 md:gap-4", children: socials.map((social) => /* @__PURE__ */ jsx("img", { src: social.image, alt: social.alt, className: "w-6 h-6 md:w-10 md:h-10 xl:w-12 xl:h-12" }, social.alt)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 md:gap-5 mb-2 font-noto", children: [
      /* @__PURE__ */ jsx("img", { src: "/ic_outline-phone.png", className: "w-4.5 h-4.5 md:w-9 md:h-9 text-white" }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-4xl", children: "0800-000-00" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 md:gap-5 mb-6 md:mb-8 font-noto", children: [
      /* @__PURE__ */ jsx("img", { src: "/ic_outline-email.png", className: "w-4.5 h-4.5 md:w-9 md:h-9 text-white" }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-4xl", children: "glasses@business.co" })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "mb-4 md:mb-8" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-2  md:gap-12 w-full items-start md:items-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mr-auto", children: "Copyright © 2020 Glasses.All rights reserved." }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "隱私權政策" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "服務條款" })
    ] })
  ] }) });
}
const navs = [
  "系列鏡框",
  "門市據點",
  "部落格",
  "常見問題"
];
function Header() {
  return /* @__PURE__ */ jsx("div", { className: "bg-[rgb(170,6,1)] sticky top-0 z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between md:px-9 xl:mx-auto xl:max-w-7xl", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full flex items-center p-4 h-[80px] md:w-auto md:p-0", children: /* @__PURE__ */ jsx("img", { src: "/logo-white.png", alt: "logo", className: "w-[80px]" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap text-white  w-full md:w-auto md:gap-16 md:text-xl", children: navs.map((nav) => /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-[48px] w-[50%] border-1 border-white md:border-none md:w-auto", children: /* @__PURE__ */ jsx("a", { className: "", href: "/", children: nav }, nav) })) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(AboutUs, {}),
    /* @__PURE__ */ jsx(Glasses, {}),
    /* @__PURE__ */ jsx(CoBranding, {}),
    /* @__PURE__ */ jsx(Customers, {}),
    /* @__PURE__ */ jsx(ContactUs, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const home = UNSAFE_withComponentProps(function HomePage() {
  return /* @__PURE__ */ jsx(Home, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const About = UNSAFE_withComponentProps(function About2() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "font-noto text-2xl ",
      children: "這是About (Noto Sans TC)"
    }), /* @__PURE__ */ jsx("div", {
      className: "font-roboto text-2xl",
      children: "這是About (Roboto)"
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DZAi_oRo.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DcJwFL2p.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": ["/assets/root-DnKsON42.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Dbbvg2yO.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/About": { "id": "routes/About", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/About-BIBRw0mL.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-77435498.js", "version": "77435498", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/About": {
    id: "routes/About",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
