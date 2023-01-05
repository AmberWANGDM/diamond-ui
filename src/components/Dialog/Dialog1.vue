<demo>基本用法</demo>
<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
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

    return { bool, toggle, f1, f2 }
  },
  components: { Dialog, Button },
}
</script>
