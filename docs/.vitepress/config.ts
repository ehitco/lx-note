import { defineConfig } from "vitepress";
import AutoNavPlugin from "vitepress-auto-nav-sidebar";

// import XMindPlugin from 'vite-plugin-vue-xmind'
const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: [
    "node_modules",
    "components",
    "assets",
    "public",
    ".vitepress",
  ],
  ignoreFiles: ["index"],
});
const url = "https://ehnote.cn";
const title = "忆海笔记";
const description = "Web Application Engineer / Frontend Engineer";

export default defineConfig({
  lang: "zh-CN",
  appearance: false,
  title,
  description,
  head: [["link", { rel: "icon", href: "/icon/favicon.ico" }]],
  lastUpdated: true,
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/ehitco" }],
    lastUpdatedText: "Last Updated",
    nav: [...nav],
    sidebar,
    footer: {
      copyright: "Copyright © 2013-present ehnote",
    },
  },
});
