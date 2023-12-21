---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "炼心笔记"
  text: "探索 学习 积累 成长 ..."
  tagline: 记录编程知识，开发经验，温故而知新。
  image:
    src: /logo.png
    alt: 炼心笔记
  actions:
    - text: 前端物语
      link: /front-end
      theme: brand
    - text: 前端导航
      link: /nav
      theme: alt

features:
  - icon: 📖
    title: 前端物语
    details: 前端常用知识点<small>（面试八股文）</small>
    link: /front-end
    linkText: 前端常用知识
  - icon: 💡
    title: 架构设计
    details: 设计模式、算法、编码规范、工作流、画图等。</small>
    link: /architectural-design
    linkText: 架构设计
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /source-code-reading
    linkText: 源码阅读
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: https://fe-mm.com
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
