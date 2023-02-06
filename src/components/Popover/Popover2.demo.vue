<demo>触发方式</demo>
<template>
  <Popover position="top" trigger="hover">
    <template #content>
      这里是内容<br />
      这里是内容<br />
    </template>
    <Button>Hover</Button>
  </Popover>
  <Popover position="top" trigger="click">
    <template #content>
      这里是内容<br />
      这里是内容<br />
    </template>
    <Button>Click</Button>
  </Popover>
</template>

<script setup lang="ts">
import Popover from '../../lib/Popover.vue'
import Button from '../../lib/Button.vue'
</script>
