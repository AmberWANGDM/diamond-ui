<template>
  <button class="dm-btn" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    theme: { type: String, default: 'button' },
    size: { type: String, default: 'normal' },
    level: { type: String, default: 'normal' },
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`dm-theme-${theme}`]: theme,
        [`dm-size-${size}`]: size,
        [`dm-level-${level}`]: level,
      }
    })
    return { classes }
  },
}
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #3875f7;
$radius: 4px;
$red: #ec5b56;
$grey: #f5f5f5;
$dark-grey: #b8b8b8;
.dm-btn {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  transition: background 250ms;
  // + 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。 语法：A + B 例子：h2 + p 会匹配所有紧邻在 <h2> (en-US) 元素后的 <p> 元素。
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  // 兼容firefox
  &::-moz-focus-inner {
    border: 0;
  }
  // theme
  &.dm-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.dm-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  // size
  &.dm-size-large {
    font-style: 24px;
    height: 44px;
    padding: 0 16px;
  }
  &.dm-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.dm-theme-button {
    &.dm-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.dm-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.dm-theme-link {
    &.dm-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.dm-theme-text {
    &.dm-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.dm-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.dm-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $dark-grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.dm-theme-link,
  &.dm-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $dark-grey;
    }
  }
}
</style>
