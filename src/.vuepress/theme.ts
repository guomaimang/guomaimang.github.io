import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const MR_HOPE_AVATAR =
  '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';

export default hopeTheme({
  hostname: "https://guomaimang.github.io",

  author: {
    name: "Hirsun",
    url: "/myself.html",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "guomaimang/Guomaimang.github.io",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Legends never die | Serving since 2011.",

  displayFooter: true,

  blog: {
    medias: {
      Email: "mailto:hirsunmw@outlook.com",
      QQ: "tencent://message/?uin=1374921316",
      GitHub: "https://github.com/guomaimang",
      Linkedin: "https://www.linkedin.com/in/hanjiaming/",
      NEWVideo:["https://www.xinpianchang.com/u10602898", "<svg t=\"1684950755860\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"15630\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\"><circle cx=\"512\" cy=\"512\" r=\"512\" fill=\"#fff\"></circle><path d=\"M915.4048 420.3008c-11.0592 0-21.248-7.2192-24.5248-18.3808a373.1456 373.1456 0 0 0-10.24-30.1568c-5.0688-13.2096 1.4848-28.0064 14.6944-33.0752 13.1584-5.12 28.0064 1.4848 33.0752 14.6944 4.3008 11.1616 8.192 22.6304 11.5712 34.0992 3.9936 13.568-3.7888 27.8016-17.3056 31.7952-2.4576 0.6656-4.864 1.024-7.2704 1.024z\" fill=\"#44454A\" p-id=\"15631\"></path><path d=\"M514.7648 956.0064c-244.3776 0-443.1872-198.8096-443.1872-443.1872S270.3872 69.632 514.7648 69.632c147.8144 0 285.3376 73.3184 367.9744 196.096 7.8848 11.7248 4.7616 27.648-6.9632 35.5328s-27.648 4.7616-35.5328-6.9632c-73.0624-108.5952-194.7648-173.4656-325.4784-173.4656-216.1664 0-391.9872 175.872-391.9872 391.9872 0 216.1664 175.872 391.9872 391.9872 391.9872 216.1664 0 391.9872-175.872 391.9872-391.9872 0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6c0 244.3776-198.8096 443.1872-443.1872 443.1872z\" fill=\"#44454A\" p-id=\"15632\"></path><path d=\"M660.5824 470.4256L460.8 355.072c-28.7232-16.5888-64.5632 4.1472-64.5632 37.2736v230.7072c0 33.1264 35.8912 53.8624 64.5632 37.2736l199.7824-115.3536c28.7232-16.5376 28.7232-58.0096 0-74.5472z\" fill=\"#FFD833\" p-id=\"15633\"></path><path d=\"M439.2448 691.8144c-11.776 0-23.6032-3.1232-34.3552-9.3184-21.504-12.3904-34.304-34.6112-34.304-59.4432V392.3456c0-24.832 12.8512-47.0528 34.3552-59.4432s47.1552-12.3904 68.6592 0l199.7824 115.3536c21.504 12.3904 34.304 34.6112 34.304 59.4432s-12.8512 47.0528-34.304 59.4432L473.6 682.496c-10.752 6.1952-22.528 9.3184-34.3552 9.3184z m0.1024-316.9792c-4.0448 0-7.2192 1.4848-8.8064 2.4064-2.6112 1.536-8.7552 6.0416-8.7552 15.104v230.7072c0 9.1136 6.0928 13.6192 8.7552 15.104s9.5744 4.5568 17.4592 0l199.7824-115.3536c7.8848-4.5568 8.704-12.0832 8.704-15.104s-0.8704-10.5472-8.704-15.104L448 377.2416c-3.1232-1.792-6.0416-2.4064-8.6528-2.4064z\" fill=\"#44454A\" p-id=\"15634\"></path></svg>"] 
    },
    avatar: "/avatar.png",
    roundAvatar:false,
    description: "香港中文大学 信息工程研究生 <br> 香港理工大学 计算机学士学位<br> 研究人工智能开发, 云计算",
    intro: "/myself.html",
    articlePerPage: 6,
  },

  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  plugins: {
    blog: true,

    comment: {
      /**
       * Using giscus
       */
       provider: "Giscus",
       repo: "guomaimang/guomaimang.github.io",
       repoId: "R_kgDOMx4M7Q",
       category: "Announcements",
       categoryId: "DIC_kwDOMx4M7c4CjFI9",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    
    
    },

    readingTime:{
      wordPerMinute: 100,
    }

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
