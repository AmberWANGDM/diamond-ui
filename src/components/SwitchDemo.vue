<template>
  <div>
    <h1>开关 Switch</h1>
    <p>互斥性的操作控件，用户可打开或关闭某个功能。</p>
    <Demo :component="Switchbasic" />
    <Demo :component="Switchsize" />
    <Demo :component="Switchdisabled" />
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Switchbasic from './Switchbasic.vue'
import Switchsize from './Switchsize.vue'
import Switchdisabled from './Switchdisabled.vue'
import Demo from './Demo.vue'

export default {
  components: { Button, Demo },
  setup() {
    return { Switchbasic, Switchsize, Switchdisabled }
  },
}
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
