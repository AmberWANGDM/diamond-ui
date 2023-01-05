<demo>按钮状态</demo>
<template>
  <div>
    <Button theme="primary" level="normal">Normal</Button>
    <Button level="normal">Normal</Button>
    <Button theme="link" level="normal">Normal</Button>
    <Button theme="text" level="normal">Normal</Button>
  </div>
  <br />
  <div>
    <Button theme="primary" level="success">Success</Button>
    <Button level="success">Success</Button>
    <Button theme="link" level="success">Success</Button>
    <Button theme="text" level="success">Success</Button>
  </div>
  <br />
  <div>
    <Button theme="primary" level="warning">Warning</Button>
    <Button level="warning">Warning</Button>
    <Button theme="link" level="warning">Warning</Button>
    <Button theme="text" level="warning">Warning</Button>
  </div>
  <br />
  <div>
    <Button theme="primary" level="danger">Danger</Button>
    <Button level="danger">Danger</Button>
    <Button theme="link" level="danger">Danger</Button>
    <Button theme="text" level="danger">Danger</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>
