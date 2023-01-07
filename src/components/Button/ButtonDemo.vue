<template>
  <h1>Button 按钮</h1>
  <p>按钮是一种命令组件，可发起一个即时操作。</p>
  <Demo :component="Button1" />
  <Demo :component="Button2" />
  <Demo :component="Button3" />
  <Demo :component="Button4" />
  <Demo :component="Button5" />
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import Button1 from './Button1.demo.vue'
import Button2 from './Button2.demo.vue'
import Button3 from './Button3.demo.vue'
import Button4 from './Button4.demo.vue'
import Button5 from './Button5.demo.vue'
</script>
