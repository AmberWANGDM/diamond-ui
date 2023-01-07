<demo>按钮尺寸</demo>
<template>
  <div>
    <Button theme="primary" size="small">Small</Button>
    <Button theme="primary">Medium</Button>
    <Button theme="primary" size="large">Large</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button },
}
</script>
