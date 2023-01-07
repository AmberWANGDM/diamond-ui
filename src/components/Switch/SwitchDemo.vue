<template>
  <div>
    <h1>Switch 开关</h1>
    <p>互斥性的操作控件，用户可打开或关闭某个功能。</p>
    <Demo :component="Switch1" />
    <Demo :component="Switch2" />
    <Demo :component="Switch3" />
  </div>
</template>

<script setup lang="ts">
import Switch1 from './Switch1.demo.vue'
import Switch2 from './Switch2.demo.vue'
import Switch3 from './Switch3.demo.vue'
import Demo from '../Demo.vue'
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  margin: 16px 0 32px;
  > h2 {
    margin: 48px 0 12px;
    font-size: 20px;
    font-weight: 500;
  }
  &-component {
    padding: 48px;
    border: 1px solid $border-color;
  }
  &-actions {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
  }
  &-code {
    padding: 8px 6px;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
