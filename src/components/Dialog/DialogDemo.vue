<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import Dialog1 from './Dialog1.demo.vue'
import Dialog2 from './Dialog2.demo.vue'
</script>
