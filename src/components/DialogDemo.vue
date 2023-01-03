<template>
  <h1>实例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :close-on-click-overlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <p>内容1</p>
      <p>内容2</p>
      <p>内容3</p>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      console.log('1')
      return true
    }
    const f2 = () => {
      console.log('2')
    }
    return { x, toggle, f1, f2 }
  },
  components: { Dialog, Button },
}
</script>
