<template>
  <div class="dm-tabs">
    <div class="dm-tabs-nav">
      <div class="dm-tabs-nav-item" v-for="(t, index) in titles" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="dm-tabs-content">
      <component
        class="dm-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    // 获取子组件
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须为Tab')
      }
    })
    // 获取标签名
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return { defaults, titles }
  },
}
</script>

<style lang="scss">
$blue: #2d5cf6;
$color: #333;
$border-color: #d9d9d9;
.dm-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
