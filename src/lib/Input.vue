<template>
  <div class="dm-input-wrapper">
    <input class="dm-input" type="text" :value="props.value" :placeholder="props.placeholder" @input="inputDebounce"
      :disabled="props.disabled">
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  disabled: {
    default: false
  }
})

const emit = defineEmits<{ (e: 'update:value', value: string): void }>()

const inputDebounce = (e) => { emit('update:value', e.currentTarget.value) }
</script>

<style lang="scss" scoped>
$colorPrimary: #722ed1;
$gray: #ecebeb;
$placeholderColor: #c0c0c0;

.dm-input-wrapper {
  margin: 3px;
  padding: 4px;


  >input {
    width: 100%;
    cursor: text;
    background: none;
    border: none;
    border-radius: 3px;
    outline: 1px solid transparent;
    background-color: $gray;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    font-size: 14px;
    line-height: 1.5715;
    transition: background-color 0.3s;

    &::placeholder {
      color: $placeholderColor
    }

    &:focus {
      outline: 1px solid $colorPrimary;
      background-color: $gray;
      background-color: #fff;
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.7;
      -webkit-text-fill-color: $placeholderColor;
    }
  }
}
</style>