<template>
  <button
    class="dm-switch"
    @click="toggle"
    :class="classObject"
    :disabled="disabled"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    value: Boolean,
    size: {
      type: String,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    const classObject = computed(() => {
      return {
        'dm-checked': props.value,
        [`dm-size-${props.size}`]: props.size,
      }
    })
    return { toggle, classObject }
  },
}
</script>

<style lang="scss" scoped>
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
  & + & {
    margin-left: 24px;
  }
  > span {
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
    > span {
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
    > span {
      width: $h2 + 5px;
    }
  }
  &.dm-checked:active {
    > span {
      width: $h2 + 5px;
      margin-left: -5px;
    }
  }

  &.dm-size-small {
    height: $h - 4px;
    width: $h * 2 - 12px;
    > span {
      height: $h2 - 4px;
      width: 12px;
    }
    &:active {
      > span {
        width: $h2;
      }
    }
    &.dm-checked {
      > span {
        left: calc(100% - #{$h2} + 1px);
      }
    }
    &.dm-checked:active {
      > span {
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
