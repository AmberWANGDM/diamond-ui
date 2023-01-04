<template>
  <article class="markdown-body" v-html="md"></article>
  下一节：<a href="#/doc/get-started">快速上手</a>
</template>

<script lang="ts">
import md from '../markdown/intro.md'
export default {
  data() {
    return { md }
  },
}
</script>

<style lang="scss" scoped>
article {
  margin: 30px;
}
</style>
