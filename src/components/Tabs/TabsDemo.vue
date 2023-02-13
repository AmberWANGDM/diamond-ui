<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1" />
  <h2>API</h2>
  <AttrTable :attrs="attrs1" title="Tabs属性" />
  <AttrTable :attrs="attrs2" title="Tab属性" />
</template>

<script setup lang="ts">
import Tabs1 from './Tabs1.demo.vue'
import Demo from '../Demo.vue'
import AttrTable from '../AttrTable.vue'
const attrs1 = [
  { name: 'v-model:selected', info: '选中选项卡的标题', type: "string", default: '-' },
]
const attrs2 = [
  { name: 'title', info: '选项卡标题', type: "string", default: '-' },
]
</script>
