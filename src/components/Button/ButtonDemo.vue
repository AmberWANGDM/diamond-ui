<template>
  <h1>Button 按钮</h1>
  <p>按钮是一种命令组件，可发起一个即时操作。</p>
  <Demo :component="Button1" />
  <Demo :component="Button2" />
  <Demo :component="Button3" />
  <Demo :component="Button4" />
  <Demo :component="Button5" />
  <h2>API</h2>
  <AttrTable :attrs="attrs1" title="属性" />
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import Button1 from './Button1.demo.vue'
import Button2 from './Button2.demo.vue'
import Button3 from './Button3.demo.vue'
import Button4 from './Button4.demo.vue'
import Button5 from './Button5.demo.vue'
import AttrTable from '../AttrTable.vue'

const attrs1 = [
  { name: 'theme', info: '按钮的类型，分为4种：默认按钮、主要按钮、链接按钮、文字按钮', type: "'button' | 'primary' | 'link' | 'text'", default: 'button' },
  { name: 'size', info: '按钮的尺寸：大，中，小', type: "'small' | 'large' | 'medium'", default: 'medium' },
  { name: 'level', info: '按钮状态：成功，警告，危险', type: "'normal' | 'warning' | 'success' | 'danger'", default: 'normal' },
  { name: 'normal', info: '按钮是否禁用', type: "boolean", default: 'false' },
  { name: 'loading', info: '按钮是否为加载中状态；加载中按钮无法点击', type: "boolean", default: 'false' },
]
</script>
