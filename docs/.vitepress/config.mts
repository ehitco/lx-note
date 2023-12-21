import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "炼心笔记",
  description: "炼心的知识笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '前端物语', link: '/front-end' },
      { text: '架构设计', link: '/architectural-design' },
      { text: '源码阅读', link: '/source-code-reading' },
      { text: '经验积累', link: '/experience-accumulation' },
      { text: '其他语言', link: '/other' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
