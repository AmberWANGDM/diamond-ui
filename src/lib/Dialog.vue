<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>ok</Button>
      <Button>cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: { Button },
}
</script>
