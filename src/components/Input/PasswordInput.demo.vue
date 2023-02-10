<demo>基本用法</demo>
<template>
  <InputPassword v-model:value="textValue" placeholder="请输入密码" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputPassword from '../../lib/InputPassword.vue';
const textValue = ref('')
</script>
