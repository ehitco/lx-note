---
layout: home
title: 首页
hero:
  name: ehnote.cn
  text: Web Application Engineer
  tagline: Frontend Engineer
  image:
    src: https://images.unsplash.com/photo-1485988412941-77a35537dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDIyNzR8MHwxfHNlYXJjaHwxMXx8YmxvZ3xlbnwwfHx8fDE2NDg3OTc1MjY&ixlib=rb-1.2.1&q=80&w=1080
    alt: my work table
  actions:
    - theme: brand
      text: 博客笔记 →
      link: /note
features:
  - title: 技术栈
    details: TypeScript / Vue3 / Vue2 / React / CSS / Storybook / Node.js / Go / PostgreSQL / MySQL / Agile / PM / UI Design / and more...
---

<script setup>
import SkillIcons from './components/home/SkillIcons.vue'
</script>

<skill-icons />

<style scoped>
.skill-icons {
  display: flex;
  justify-content: center;
  margin-block-start: 32px;
  margin-inline: 24px;
}
</style>
