import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ router }) {
    // 添加路由钩子
    router.beforeEach((to) => {
      // 如果访问的是 /myself.html，则重定向到外部URL
      if (to.path === "/myself.html") {
        // 检查是否在客户端环境
        if (typeof window !== "undefined") {
          // 使用window.location进行重定向
          window.location.href = "/myself/index.html";
          return false; // 终止导航
        }
      }

      if (to.path === "/myself-cn.html") {
        // 检查是否在客户端环境
        if (typeof window !== "undefined") {
          // 使用window.location进行重定向
          window.location.href = "/myself/cn.html";
          return false; // 终止导航
        }
      }

    });
  },
}); 