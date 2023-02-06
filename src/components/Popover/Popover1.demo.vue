<demo>不同位置</demo>
<template>
  <div>
    <Popover position="top" trigger="click">
      <template #content>
        这里是内容<br />
        这里是内容<br />
      </template>
      <Button>Top</Button>
    </Popover>
    <Popover position="bottom" trigger="click">
      <template #content>
        这里是内容<br />
        这里是内容<br />
      </template>
      <Button>Bottom</Button>
    </Popover>
    <Popover position="left" trigger="click">
      <template #content>
        这里是内容<br />
        这里是内容<br />
      </template>
      <Button>Left</Button>
    </Popover>
    <Popover position="right" trigger="click">
      <template #content>
        这里是内容<br />
        这里是内容<br />
      </template>
      <Button>Right</Button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import Popover from '../../lib/Popover.vue'
import Button from '../../lib/Button.vue'
</script>
