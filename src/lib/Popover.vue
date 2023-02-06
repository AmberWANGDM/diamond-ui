<template>
  <div class="dm-popover">
    <Teleport to="body">
      <div class="dm-popover-content-container" :class="classes" ref="contentWrapper" v-if="visible">
        <slot name="content"></slot>
      </div>
    </Teleport>
    <span class="dm-popover-trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onUnmounted } from 'vue'
import { computed, onMounted, ref } from 'vue'
const visible = ref<boolean>(false)
const triggerWrapper = ref<HTMLElement>(null)
const contentWrapper = ref<HTMLElement>(null)

const props = defineProps({
  /**
   * 气泡提示框的显示位置
   * @defaultValue 'top'
   * @type 'top' | 'bottom' | 'left' | 'right'
   */
  position: {
    type: String,
    default: 'top',
    validator(value: string) {
      return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
    },
  },
  /**
   * 触发方式
   * @defaultValue 'click'
   * @type 'click' | 'hover'
   */
  trigger: {
    type: String,
    default: 'click',
    validator(value: string) {
      return ['click', 'hover'].indexOf(value) !== -1
    },
  },
})

const classes = computed(() => {
  return {
    [`dm-popover-position-${props.position}`]: props.position,
  }
})
const show = () => {
  visible.value = true
  nextTick(() => {
    const { top, left, width: btnWidth, height: btnHeight } = triggerWrapper.value.getBoundingClientRect()
    const { width: contentWidth, height: contentHeight } = contentWrapper.value.getBoundingClientRect()
    const diffPos = {
      top: {
        top: top, left: left - (contentWidth - btnWidth) / 2
      },
      bottom: {
        top: top + btnHeight, left: left - (contentWidth - btnWidth) / 2
      },
      left: {
        top: top - (contentHeight - btnHeight) / 2, left: left - contentWidth
      },
      right: {
        top: top - (contentHeight - btnHeight) / 2, left: left + btnWidth
      }
    }
    contentWrapper.value.style.top = diffPos[props.position]['top'] + window.scrollY + 'px'
    contentWrapper.value.style.left = diffPos[props.position]['left'] + window.scrollX + 'px'
    document.addEventListener('click', clickOnDoc)
  })
}
const hide = () => {
  visible.value = false
  document.removeEventListener('click', clickOnDoc)

}
const clickOnDoc = (e) => {
  if (contentWrapper.value !== e.target && triggerWrapper.value !== e.target && !contentWrapper.value?.contains(e.target) && !triggerWrapper.value?.contains(e.target)) {
    visible.value = false
  }
}
const handleVisible = (e) => {
  if (visible.value) {
    hide()
  } else {
    show()
  }
}
onMounted(() => {
  if (props.trigger === 'click') {
    triggerWrapper.value.addEventListener('click', (e: MouseEvent) => handleVisible(e))
  } else {
    triggerWrapper.value.addEventListener('mouseenter', (e: MouseEvent) => show())
    triggerWrapper.value.addEventListener('mouseleave', (e: MouseEvent) => hide())
  }
})
onUnmounted(() => {
  if (props.trigger === 'click') {
    triggerWrapper.value?.removeEventListener('click', (e: MouseEvent) => handleVisible(e))
  } else {
    triggerWrapper.value?.removeEventListener('mouseenter', (e: MouseEvent) => show())
    triggerWrapper.value?.removeEventListener('mouseleave', (e: MouseEvent) => hide())
  }
})

</script>

<style lang="scss">
$--text-color: #4e5969;
$--color-neutral: #e5e5e5;
$--border-radius: 4px;

.dm-popover {
  display: inline-block;
  position: relative;

  &+& {
    margin-left: 8px;
  }

  &-content-container {
    z-index: 999;
    left: 0;
    top: 0;
    position: absolute;
    box-sizing: border-box;
    padding: 12px 16px;
    color: $--text-color;
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    border: 1px solid $--color-neutral;
    border-radius: $--border-radius;
    box-shadow: 0 4px 10px #0000001a;
    max-width: 20em;
    word-break: break-all;
    text-align: center;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: transparent;
    }

    &.dm-popover-position-top {
      transform: translateY(-100%);
      margin-top: -15px;

      &::after {
        top: 100%;
        left: 50%;
        background-color: #fff;
        transform: translate(-50%, -50%) rotate(45deg);
        border-right: 1px solid $--color-neutral;
        border-bottom: 1px solid $--color-neutral;
      }
    }

    &.dm-popover-position-bottom {
      margin-top: 15px;

      &::after {
        top: 0;
        left: 50%;
        background-color: #fff;
        transform: translate(-50%, -50%) rotate(45deg);
        border-top: 1px solid $--color-neutral;
        border-left: 1px solid $--color-neutral;
      }
    }

    &.dm-popover-position-left {
      margin-left: -10px;

      &::after {
        top: 50%;
        left: 100%;
        background-color: #fff;
        transform: translate(-50%, -50%) rotate(45deg);
        border-right: 1px solid $--color-neutral;
        border-top: 1px solid $--color-neutral;
      }
    }

    &.dm-popover-position-right {
      margin-left: 10px;

      &::after {
        top: 50%;
        left: 0;
        background-color: #fff;
        transform: translate(-50%, -50%) rotate(45deg);
        border-left: 1px solid $--color-neutral;
        border-bottom: 1px solid $--color-neutral;
      }
    }

  }



}
</style>
