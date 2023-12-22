import { defineConfig } from 'vitepress'
import { head, nav, sidebar, algolia } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "炼心笔记",
  description: "炼心的知识笔记",
  lang: 'zh-CN',
  head,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '前端物语', link: '/front-end' },
    //   { text: '架构设计', link: '/architectural-design' },
    //   { text: '源码阅读', link: '/source-code-reading' },
    //   { text: '经验积累', link: '/experience-accumulation' },
    //   { text: '其他语言', link: '/other' },
    // ],
    // sidebar: [
    //   {
    //     text: '前端物语',
    //     items: [
    //       { text: 'JavaScript', link: '/javascript' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
