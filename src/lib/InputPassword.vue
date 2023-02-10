<template>
  <div class="dm-input-wrapper" ref="wrapper">
    <input class="dm-input" :type="inputType" :value="props.value" :placeholder="props.placeholder"
      @input="inputDebounce" :disabled="props.disabled" @focus="focusInput" @blur="blurInput">
    <span class="icon-wrapper" @click="toggleType">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="svgType"></use>
      </svg>
    </span>
  </div>

</template>

<script setup lang="ts">import { ref } from 'vue';

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
const wrapper = ref<HTMLDivElement>(null)
const inputType = ref('password');
const svgType = ref('#icon-hide');
const emit = defineEmits<{ (e: 'update:value', value: string): void }>()

const inputDebounce = (e) => { emit('update:value', e.currentTarget.value) }
const focusInput = () => {
  wrapper.value.classList.add('dm-input-focus')
}
const blurInput = () => {
  wrapper.value.classList.remove('dm-input-focus')
}
const toggleType = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text'
    svgType.value = '#icon-show'
  } else {
    inputType.value = 'password'
    svgType.value = '#icon-hide'
  }
}
</script>

<style lang="scss" scoped>
$colorPrimary: #722ed1;
$gray: #ecebeb;
$placeholderColor: #c0c0c0;

.dm-input-wrapper {
  margin: 3px;
  padding: 4px 12px 4px 4px;
  border-radius: 3px;
  background-color: $gray;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $gray;
  transition: background-color 0.3s;

  >input {
    width: 100%;
    cursor: text;
    background: none;
    border: none;
    border-radius: 0;
    outline: 1px solid transparent;
    padding-left: 8px;
    font-size: 14px;
    line-height: 1.5715;

    &::placeholder {
      color: $placeholderColor
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
}

.dm-input-focus {
  background-color: #fff;
  outline: 1px solid $colorPrimary;
}

.icon-wrapper {
  cursor: pointer;
  font-size: 20px;
}
</style>