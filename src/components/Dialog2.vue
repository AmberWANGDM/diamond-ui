<demo>函数调用</demo>
<template>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import { h } from 'vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/showDialog'

export default {
  setup() {
    // 一句代码显示Dialog
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: 'hello world',
        closeOnClickOverlay: false,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
      })
    }
    return { showDialog }
  },
  components: { Button },
}
</script>
