<demo>
基本用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script setup lang="ts">
import { Switch } from 'diamond-vue-ui'
import { ref } from 'vue'
const bool = ref(false)
</script>
