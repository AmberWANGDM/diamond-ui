<template>
  <button class="dm-switch" @click="toggle" :class="{ ' dm-checked': value }">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  },
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.dm-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h / 2;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: $h2 / 2;
    transition: all 0.2s ease-in;
  }
  &:hover {
    background: #8c8c8c;
  }
  &.dm-checked {
    background-color: #3875f7;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
    &:hover {
      background-color: #4096ff;
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
}
</style>
