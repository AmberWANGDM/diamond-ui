<demo>基本用法</demo>
<template>
  <Input v-model:value="textValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../lib/Input.vue'
const textValue = ref('')
</script>
