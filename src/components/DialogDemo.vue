<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Dialog1 from './Dialog1.vue'
import Dialog2 from './Dialog2.vue'
import Button from '../lib/Button.vue'
export default {
  components: { Button, Demo },
  setup() {
    return { Dialog1, Dialog2 }
  },
}
</script>
