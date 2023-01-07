<template>
  <div class="dm-tabs">
    <div class="dm-tabs-nav" ref="container">
      <div
        class="dm-tabs-nav-item"
        :class="{ selected: t === selected }"
        @click="select(t)"
        :ref="
          (el) => {
            //@ts-ignore
            if (t === selected) selectedItem = el
          }
        "
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="dm-tabs-nav-indicator" ref="indicator"></div>
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

<script setup lang="ts">
import { computed, onMounted, ref, useSlots, watchEffect } from 'vue'
import Tab from './Tab.vue'

const props = defineProps<{
  /**
   * 默认选中的标签
   */
  selected: string
}>()

/**
 * 更新选中的标签
 */
const emit = defineEmits<{
  (e: 'update:selected', selected: string): void
}>()

const slots = useSlots() // 获取插槽
const defaults = slots.default() // 获取子组件
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
  emit('update:selected', title)
}

const selectedItem = ref<HTMLDivElement>(null)
const indicator = ref<HTMLDivElement>(null)
const container = ref<HTMLDivElement>(null)
onMounted(() => {
  // 监听selectedItem变化，更新indicator的位置和宽度
  watchEffect(() => {
    if (selectedItem.value && indicator.value) {
      const { width } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const { left: containerLeft } = container.value.getBoundingClientRect()
      const { left: navItemLeft } = selectedItem.value?.getBoundingClientRect()
      const left = navItemLeft - containerLeft
      indicator.value.style.left = left + 'px'
    }
  })
})
</script>

<style lang="scss">
$colorPrimary: #722ed1;
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
        color: $colorPrimary;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $colorPrimary;
      left: 0;
      bottom: -1px;
      transition: all 0.25s ease-in-out;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
