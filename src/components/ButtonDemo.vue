<template>
  <div>Button Demo</div>
  <h1>基本用法</h1>
  <div>
    <Button theme="primary">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>按钮尺寸</h1>
  <div>
    <Button theme="primary" size="small">Small</Button>
    <Button theme="primary">Medium</Button>
    <Button theme="primary" size="large">Large</Button>
  </div>
  <h1>按钮状态</h1>
  <div>
    <Button theme="primary" level="normal">你好</Button>
    <Button level="normal">你好</Button>
    <Button theme="link" level="normal">你好</Button>
    <Button theme="text" level="normal">你好</Button>
  </div>
  <div>
    <Button theme="primary" level="success">你好</Button>
    <Button level="success">你好</Button>
    <Button theme="link" level="success">你好</Button>
    <Button theme="text" level="success">你好</Button>
  </div>
  <div>
    <Button theme="primary" level="warning">你好</Button>
    <Button level="warning">你好</Button>
    <Button theme="link" level="warning">你好</Button>
    <Button theme="text" level="warning">你好</Button>
  </div>
  <div>
    <Button theme="primary" level="danger">你好</Button>
    <Button level="danger">你好</Button>
    <Button theme="link" level="danger">你好</Button>
    <Button theme="text" level="danger">你好</Button>
  </div>
  <h1>禁用状态</h1>
  <Button theme="primary" disabled>禁用按钮</Button>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
  <h1>加载中状态</h1>
  <div>
    <Button theme="primary" loading>加载中</Button>
    <Button loading>加载中</Button>
    <Button theme="primary" :loading="loading1" @click="handleClick1"
      >Click me</Button
    >
    <Button :loading="loading2" @click="handleClick2">Click me</Button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const loading1 = ref(false)
    const loading2 = ref(false)

    const handleClick1 = () => {
      loading1.value = !loading1.value
    }
    const handleClick2 = (e) => {
      console.log(e)
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
