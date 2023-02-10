<template>
  <button class="dm-switch" @click="toggle" :class="classObject" :disabled="disabled">
    <span></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  value: Boolean,
  size: {
    type: String,
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
// 使用纯类型标注来声明触发的事件
// 调用签名，参数和返回值之间是:，而不是函数类型表达式中使用的 =>
// 参考 https://yayujs.com/handbook/MoreOnFunctions.html#%E5%87%BD%E6%95%B0-more-on-functions
const emit = defineEmits<{ (e: 'update:value', value: boolean): void }>()
const toggle = () => {
  emit('update:value', !props.value)
}
const classObject = computed(() => {
  return {
    'dm-checked': props.value,
    [`dm-size-${props.size}`]: props.size,
  }
})
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 6px;
$colorPrimary: #722ed1;
$colorPrimaryHover: #9254de;
$gray: #bfbfbf;
$grayHover: #8c8c8c;

.dm-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: $gray;
  border-radius: calc($h / 2);
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &+& {
    margin-left: 24px;
  }

  >span {
    position: absolute;
    top: 3px;
    left: 3px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: calc($h / 2);
    transition: all 0.2s ease-in;
  }

  &:hover {
    background: $grayHover;
  }

  &.dm-checked {
    background-color: $colorPrimary;

    >span {
      left: calc(100% - #{$h2} - 3px);
    }

    &:hover {
      background-color: $colorPrimaryHover;
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    >span {
      width: $h2 + 5px;
    }
  }

  &.dm-checked:active {
    >span {
      width: $h2 + 5px;
      margin-left: -5px;
    }
  }

  &.dm-size-small {
    height: $h - 4px;
    width: $h * 2 - 12px;

    >span {
      height: $h2 - 4px;
      width: 12px;
    }

    &:active {
      >span {
        width: $h2;
      }
    }

    &.dm-checked {
      >span {
        left: calc(100% - #{$h2} + 1px);
      }
    }

    &.dm-checked:active {
      >span {
        width: $h2;
        margin-left: -4px;
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
