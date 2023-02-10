<demo>禁止输入</demo>
<template>
  <Input v-model:value="textValue" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../lib/Input.vue'
const textValue = ref('disabled')
</script>

<style lang="scss" scoped>

</style>