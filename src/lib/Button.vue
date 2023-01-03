<template>
  <button class="dm-btn" :class="`dm-theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: { theme: { type: String, default: 'button' } },
}
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
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
}
</style>
