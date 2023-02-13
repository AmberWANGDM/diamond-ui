<template>
  <h1>气泡弹出框</h1>
  <Demo :component="Popover1" />
  <Demo :component="Popover2" />
  <h2>API</h2>
  <AttrTable :attrs="attrs" title="属性" showTitle />

</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import Popover1 from './Popover1.demo.vue'
import Popover2 from './Popover2.demo.vue'
import AttrTable from '../AttrTable.vue'
const attrs = [
  { name: 'position', info: '控制气泡弹出框位置', type: "'top'|'bottom'|'left'|'right'", default: 'top' },
  { name: 'trigger', info: '触发方式', type: "'hover'|'click'", default: 'click' }
]
</script>

<style scoped lang="scss">

</style>
