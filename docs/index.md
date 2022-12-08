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
features:
  - title: 技术栈
    details: TypeScript / Vue3 / Vue2 / React / CSS / Tailwind / Node.js / PostgreSQL / MySQL / PM / and more...
  - title: 信条
    details: 专注一个领域，不断学习，并以此探索创新，创造价值，发展并传承人类文明。
---

<script setup>
import SkillIcons from './components/home/SkillIcons.vue'
// import handbook from './components/home/handbook.vue'
</script>
<!-- <handbook /> -->
<skill-icons />

<style scoped>
.skill-icons {
  display: flex;
  justify-content: center;
  margin-block-start: 32px;
  margin-inline: 24px;
}
</style>
