import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ router }) {
    // 添加路由钩子
    router.beforeEach((to) => {
      if (typeof window === "undefined") return;

      // 所有 /myself 开头的路径，强制浏览器原生跳转（绕过 Vue Router）
      if (to.path === "/myself/" || to.path === "/myself") {
        window.location.href = "/myself/";
        return false;
      }
      if (to.path === "/myself.html") {
        window.location.href = "/myself/";
        return false;
      }
      if (to.path === "/myself-cn.html") {
        window.location.href = "/myself/cn.html";
        return false;
      }
    });
  },
}); 