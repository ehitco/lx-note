<script setup lang="ts">
interface listItem {
  icon: string,
  link: string,
  title: string
}
const bookList:listItem[] = [
  {icon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png', link:'https://developer.mozilla.org/zh-CN/docs/Web',title:'MDN Web 开发技术'}
]
</script>
<template>
  <div v-for="item in bookList">
    <h5>{{item.title}}</h5>
    <span>{{item.link}}</span>
    <img :src="item.icon" />
  </div>
</template>