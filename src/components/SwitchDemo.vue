<template>
  <div>
    <h1>开关 Switch</h1>
    <p>互斥性的操作控件，用户可打开或关闭某个功能。</p>
    <div class="demo">
      <h2>基本用法</h2>
      <div class="demo-component">
        <component :is="Switchbasic"></component>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switchbasic.__sourceCode }}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>开关尺寸</h2>
      <div class="demo-component">
        <component :is="Switchsize"></component>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switchsize.__sourceCode }}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>禁用状态</h2>
      <div class="demo-component">
        <component :is="Switchdisabled"></component>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switchdisabled.__sourceCode }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switchbasic from './Switchbasic.vue'
import Switchsize from './Switchsize.vue'
import Switchdisabled from './Switchdisabled.vue'
export default {
  setup() {
    const bool = ref(false)
    return { bool, Switchbasic, Switchsize, Switchdisabled }
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
