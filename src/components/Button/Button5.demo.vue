<demo>加载中状态</demo>

<template>
  <div>
    <Button theme="primary" loading>加载中</Button>
    <Button loading>加载中</Button>
    <Button theme="primary" :loading="loading1" @click="handleClick1">Click me</Button>
    <Button :loading="loading2" @click="handleClick2">Click me</Button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const loading1 = ref(false)
    const loading2 = ref(false)

    const handleClick1 = () => {
      loading1.value = !loading1.value
    }
    const handleClick2 = () => {
      loading2.value = !loading2.value
    }

    return {
      loading1,
      loading2,
      handleClick1,
      handleClick2,
    }
  },
}
</script>
