import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "博客主页", icon: "home", link: "/" },
  { text: "Research", icon: "fa-solid fa-graduation-cap", link: "/research/" },
  { text: "Gist", icon: "fa-solid fa-blog", link: "https://gist.github.com/guomaimang" },
  { text: "关于我", icon: "fa-solid fa-id-card", link: "/myself/" },
  {
    text: "学习笔记",
    prefix: "/note/",
    icon: "fa-solid fa-book-tanakh",
    children:[
      {
        text: "Computer Science",
        prefix: "cs/",
        icon: "c",
        children:[
          {
            text: "Programming",
            icon: "c",
            link: "programming/",
          },
          {
            text: "Computer Organization",
            icon: "fa-solid fa-floppy-disk",
            link: "co/",
          },
          {
            text: "Operating System",
            icon: "fa-brands fa-centos",
            link: "os/",
          },
          {
            text: "Computer Network",
            icon: "fa-solid fa-network-wired",
            link: "cn/",
          },
        ],
      },

      {
        text: "Data Science",
        icon: "emmet",
        prefix: "ds/",
        children:[
          {
            text: "Data Analysis",
            icon: "fa-solid fa-chart-simple",
            link: "da/",
          },
          {
            text: "Machine Learning",
            icon: "fa-brands fa-codepen",
            link: "ml/",
          },
          {
            text: "Database and SQL",
            icon: "fa-solid fa-database",
            link: "db/",
          },
        ],
      },
      {
        text: "IT & Management",
        icon: "emmet",
        prefix: "it/",
        children:[
          {
          text: "Project Management",
          icon: "table",
          link: "pm/"
          },
          {
            text: "Information Governance",
            icon: "fa-solid fa-scroll",
            link: "ig/"
            },
          {
          text: "Cloud Computing",
          icon: "fa-brands fa-cloudflare",
          link: "cc/"
          },
        ],
      },
      {
        text: "Others",
        icon: "relation",
        prefix: "",
        children:[
          {
            text: "Humanistic",
            icon: "heading",
            link: "humanistic/"
          },
          {
            text: "Computer Application",
            icon: "fa-brands fa-digital-ocean",
            link: "ca/"
          },
        ],
      },
  ]
  },
  {
    text: "校园",
    prefix: "/",
    icon: "fa-solid fa-building-columns",
    children:[
      {
        text: "河北衡水中学",
        link: "http://www.hbhszx.cn",
      },
      {
        text: "上海交通大学",
        link: "https://www.sjtu.edu.cn/",
      },
      {
        text: "香港理工大学",
        link: "https://polyu.edu.hk",
      },
      {
        text: "香港中文大学",
        link: "https://www.cuhk.edu.hk",
      },
  ]
  },
  {
    text: "更多",
    prefix: "/",
    icon: "fa-solid fa-bolt",
    children:[
      {
        text: "Friend Links",
        icon: "link",
        link: "#",
      },
      {
        text: "My Gallary",
        icon: "fa-solid fa-images",
        link: "gallery",
      },
      {
        text: "Navigation",
        icon: "fa-solid fa-share-nodes",
        link: "http://nav.hirsun.tech",
      },
      {
        text: "追番列表",
        icon: "fa-solid fa-photo-film",
        link: "cartoon-recommend",
      },
  ]
  },
]);
