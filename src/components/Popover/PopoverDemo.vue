<template>
  <h1>气泡弹出框</h1>
  <Demo :component="Popover1" />
  <Demo :component="Popover2" />
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import Popover1 from './Popover1.demo.vue'
import Popover2 from './Popover2.demo.vue'
</script>

<style scoped lang="scss">

</style>
