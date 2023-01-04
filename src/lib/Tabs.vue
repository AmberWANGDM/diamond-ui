<template>
  <div class="dm-tabs">
    <div class="dm-tabs-nav">
      <div
        class="dm-tabs-nav-item"
        :class="{ selected: t === selected }"
        @click="select(t)"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="dm-tabs-nav-indicator"></div>
    </div>
    <div class="dm-tabs-content">
      <!-- 更新<component :is="VNode">内部插槽必须传key -->
      <component
        class="dm-tabs-content-item"
        :is="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // 获取子组件
    const defaults = context.slots.default()
    // 检查子组件类型是否符合要求
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须为Tab')
      }
    })
    // 显示对应的内容
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })
    // 获取标签名以展示
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    // 切换
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return { defaults, titles, current, select }
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
    position: relative;

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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
