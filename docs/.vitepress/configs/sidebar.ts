import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/front-end/': [
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: '原型和原型链', link: '/front-end/javascript/prototype' },
        { text: '模块化编程', link: '/front-end/javascript/index' },
        { text: '概念知识点', link: '/front-end/javascript/conceptual-knowledge-point' },
        { text: '常用数组操作', link: '/front-end/javascript/array' },
        { text: '变量与作用域', link: '/front-end/javascript/variables-and-scopes' },
        { text: 'this指向', link: '/front-end/javascript/this' },
        { text: '改变this指向', link: '/front-end/javascript/call-apply-bind' },
        { text: '节流和防抖的区别', link: '/front-end/javascript/throttle-debounce' },
        { text: '自定义事件', link: '/front-end/javascript/custom-event' },
        { text: '事件循环', link: '/front-end/javascript/event-loop' },
        { text: '数据类型与值', link: '/front-end/javascript/type-and-value' },
        { text: '垃圾回收机制', link: '/front-end/javascript/garbage-collection-mechanism' }
      ]
    },
    {
      text: 'ES6 常用知识点',
      link: '/front-end/es6/'
    },
    {
      text: 'TypeScript',
      link: '/front-end/typescript/base'
    },
    {
      text: 'HTML / CSS',
      collapsed: false,
      items: [
        { text: 'HTML 理论知识点', link: '/front-end/html/' },
        { text: 'CSS 理论知识点', link: '/front-end/css/' }
      ]
    },
    {
      text: '浏览器与网络',
      collapsed: false,
      items: [
        { text: '浏览器相关知识点', link: '/front-end/browser/' },
        { text: 'TCP', link: '/front-end/network/tcp' },
        { text: 'HTTP', link: '/front-end/network/http' }
      ]
    },
    {
      text: '概念知识点',
      collapsed: false,
      items: [
        { text: '模块化', link: '/front-end/concept/module' },
        { text: '前端页面渲染方式', link: '/front-end/concept/page-rendering' }
      ]
    },
    {
      text: '编程题',
      link: '/front-end/coding/'
    }
  ],
  '/analysis/': [
    {
      text: '工具库',
      // collapsed: false,
      items: [
        { text: 'only-allow', link: '/analysis/utils/only-allow' },
        { text: 'clsx', link: '/analysis/utils/clsx' }
      ]
    }
  ],
  '/workflow/': [
    {
      text: '常用工具/方法',
      collapsed: false,
      items: [
        { text: '工具库整理', link: '/workflow/utils/library' },
        { text: '常用正则整理', link: '/workflow/utils/regexp' },
        { text: '常用方法整理', link: '/workflow/utils/function' }
      ]
    },
    {
      text: 'CSS 相关',
      collapsed: false,
      items: [
        { text: 'CSS 语法', link: '/workflow/css/spec' },
        { text: 'CSS 奇淫技巧', link: '/workflow/css/tricks' },
        { text: 'Sass 常用技巧', link: '/workflow/sass/' }
      ]
    },
    {
      text: 'Vue 相关',
      link: '/workflow/vue/'
    },
    {
      text: 'Node 相关',
      // collapsed: false,
      items: [{ text: 'npm 常用命令', link: '/workflow/node/npm' }]
    },
    {
      text: '终端相关',
      collapsed: false,
      items: [
        { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
        { text: '命令行工具', link: '/workflow/terminal/toolkit' },
        { text: 'Shell 命令', link: '/workflow/terminal/shell' }
      ]
    },
    {
      text: 'Git 相关',
      collapsed: false,
      items: [
        { text: 'Git 相关技巧', link: '/workflow/git/' },
        { text: 'Git 命令清单', link: '/workflow/git/command' }
      ]
    }
  ],
  '/efficiency/': [
    {
      text: '软件推荐与配置',
      // collapsed: false,
      items: [
        { text: '多平台软件', link: '/efficiency/software/cross-platform' },
        { text: 'Mac 平台', link: '/efficiency/software/mac' },
        { text: 'Windows 平台', link: '/efficiency/software/windows' },
        { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
        { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
        { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
      ]
    },
    { text: '在线工具', link: '/efficiency/online-tools' },
    { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
  ],
  '/pit/': [
    {
      text: '踩坑记录',
      // collapsed: false,
      items: [
        { text: 'npm 踩坑记录', link: '/pit/npm' },
        { text: 'PC 踩坑记录', link: '/pit/pc' },
        { text: 'H5 踩坑记录', link: '/pit/h5' }
      ]
    }
  ]
}
