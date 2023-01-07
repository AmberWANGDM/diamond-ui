<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<style lang="scss" scoped>
article {
  margin: 30px;
}
</style>
