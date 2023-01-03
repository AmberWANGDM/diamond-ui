<template>
  <h1>实例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="bool"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <!-- 具名插槽 -->
    <template v-slot:content>
      <p>内容1</p>
      <p>内容2</p>
      <p>内容3</p>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h1>实例2</h1>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import { h, ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/showDialog'
export default {
  setup() {
    const bool = ref(false)
    const toggle = () => {
      bool.value = !bool.value
    }
    const f1 = () => {
      console.log('1')
      return true
    }
    const f2 = () => {
      console.log('2')
    }
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
    return { bool, toggle, f1, f2, showDialog }
  },
  components: { Dialog, Button },
}
</script>
