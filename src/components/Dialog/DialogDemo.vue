<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
  <h2>API</h2>
  <AttrTable :attrs="attrs1" title="属性" />
  <AttrTable :attrs="attrs2" title="插槽" />
  <AttrTable :attrs="attrs3" title="事件" />
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import Dialog1 from './Dialog1.demo.vue'
import Dialog2 from './Dialog2.demo.vue'
import AttrTable from '../AttrTable.vue'
const attrs1 = [
  { name: 'v-model:visible', info: '是否显示Dialog', type: "boolean", default: 'false' },
  { name: 'closeOnClickOverlay', info: '是否可以通过点击Overlay关闭Dialog', type: "boolean", default: 'false' },
]
const attrs2 = [
  { name: 'title', info: '对话框标题', type: "string", default: '-' },
  { name: 'content', info: '对话框内容', type: "string", default: '-' },
]
const attrs3 = [
  { name: 'ok', info: 'Dialog确定的回调', type: "function", default: '-' },
  { name: 'cancel', info: 'Dialog取消的回调', type: "function", default: '-' },
]
</script>
