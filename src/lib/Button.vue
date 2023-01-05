<template>
  <button
    class="dm-btn"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="loading" class="dm-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, PropType, toRefs } from 'vue'

export default {
  props: {
    /**
     * 按钮的类型，分为4种：默认按钮、主要按钮、链接按钮、文字按钮
     * @defaultValue 'button'
     */
    theme: {
      type: String as PropType<'button' | 'primary' | 'link' | 'text'>,
      default: 'button',
    },
    /**
     * 按钮的尺寸：大，中，小
     * @defaultValue 'medium'
     */
    size: {
      type: String as PropType<'small' | 'large' | 'medium'>,
      default: 'normal',
    },
    /**
     * 按钮状态：成功，警告，危险
     * @defaultValue 'normal'
     */
    level: {
      type: String as PropType<'normal' | 'warning' | 'success' | 'danger'>,
      default: 'normal',
    },
    /**
     * 按钮是否禁用
     */
    disabled: { type: Boolean, default: false },
    /**
     * 按钮是否为加载中状态
     * 加载中按钮无法点击
     */
    loading: { type: Boolean, default: false },
  },
  // 点击Button组件时触发
  emits: ['click'],
  setup(props, { emit }) {
    const { loading } = toRefs(props)
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`dm-theme-${theme}`]: theme,
        [`dm-size-${size}`]: size,
        [`dm-level-${level}`]: level,
        'dm-loading': loading.value,
      }
    })

    const handleClick = (e) => {
      if (props.disabled || props.loading) {
        e.preventDefault()
        return
      }
      emit('click', e)
    }
    return { classes, handleClick }
  },
}
</script>

<style lang="scss" scoped>
$h: 28px;
$border-color: #d9d9d9;
$color: #333;
$colorPrimary: #722ed1;
$radius: 4px;
$grey: #f5f5f5;
$dark-grey: #b8b8b8;
$colorSuccess: #52c41a;
$colorWarning: #faad14;
$colorDanger: #ff4d4f;
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
  &:hover {
    color: $colorPrimary;
    border-color: $colorPrimary;
  }
  &:focus {
    outline: none;
  }
  // 兼容firefox
  &::-moz-focus-inner {
    border: 0;
  }

  // theme
  &.dm-theme-primary {
    border-color: transparent;
    background-color: $colorPrimary;
    color: #fff;
    &:hover {
      background-color: lighten($colorPrimary, 10%);
    }
  }
  &.dm-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $colorPrimary;
    &:hover {
      text-decoration: underline;
    }
  }
  &.dm-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover {
      background: darken(white, 5%);
    }
  }

  // size
  &.dm-size-large {
    font-style: 24px;
    height: 36px;
    padding: 0 16px;
  }
  &.dm-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }

  // level
  &.dm-theme-primary {
    &.dm-level-success {
      background-color: $colorSuccess;
      &:hover {
        background: lighten($colorSuccess, 5%);
        border-color: lighten($colorSuccess, 5%);
      }
    }
    &.dm-level-warning {
      background-color: $colorWarning;
      &:hover {
        background: lighten($colorWarning, 5%);
        border-color: lighten($colorWarning, 5%);
      }
    }
    &.dm-level-danger {
      background-color: $colorDanger;
      &:hover {
        background: lighten($colorDanger, 5%);
        border-color: lighten($colorDanger, 5%);
      }
    }
  }
  &.dm-theme-button {
    &.dm-level-success {
      color: $colorSuccess;
      border-color: $colorSuccess;
      &:hover {
        color: lighten($colorSuccess, 5%);
        border-color: lighten($colorSuccess, 5%);
      }
    }
    &.dm-level-warning {
      color: $colorWarning;
      border-color: $colorWarning;
      &:hover {
        color: lighten($colorWarning, 5%);
        border-color: lighten($colorWarning, 5%);
      }
    }
    &.dm-level-danger {
      color: $colorDanger;
      border-color: $colorDanger;
      &:hover {
        color: lighten($colorDanger, 5%);
        border-color: lighten($colorDanger, 5%);
      }
    }
  }
  &.dm-theme-link {
    &.dm-level-success {
      color: $colorSuccess;
      &:hover {
        text-decoration: underline;
      }
    }
    &.dm-level-warning {
      color: $colorWarning;
      &:hover {
        text-decoration: underline;
      }
    }
    &.dm-level-danger {
      color: $colorDanger;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &.dm-theme-text {
    &.dm-level-success {
      color: $colorSuccess;
    }
    &.dm-level-warning {
      color: $colorWarning;
    }
    &.dm-level-danger {
      color: $colorDanger;
    }
  }

  &.dm-theme-primary {
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.7;
      &:hover {
        background-color: $colorPrimary;
      }
    }
  }
  &.dm-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $dark-grey;
      &:hover {
        border-color: $border-color;
      }
    }
  }
  &.dm-theme-link,
  &.dm-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $dark-grey;
      &:hover {
        text-decoration: none;
        background: white;
      }
    }
  }
  // loading
  > .dm-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 6px;
    border-radius: 8px;
    border-color: $colorPrimary $colorPrimary $colorPrimary transparent;
    border-style: solid;
    border-width: 2px;
    animation: dm-spin 1s infinite linear;
  }
  &.dm-theme-primary {
    > .dm-loadingIndicator {
      border-color: #fff #fff #fff transparent;
    }
    &.dm-loading {
      opacity: 0.8;
      &:hover {
        cursor: default;
        background-color: $colorPrimary;
      }
    }
  }
  &.dm-theme-button {
    &.dm-loading {
      opacity: 0.8;
      &:hover {
        cursor: default;
        color: $color;
        border-color: $border-color;
      }
    }
  }
}
@keyframes dm-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
