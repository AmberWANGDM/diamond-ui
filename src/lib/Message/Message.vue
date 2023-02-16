<template>
  <transition name="dm-message-fade">
    <div :class="styleClass" v-show="refVisible" :style="{ top: refTop + 'px' }">{{ message }}</div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref, defineExpose } from 'vue';
import types from './types'
const props = defineProps({
  type: {
    type: String,
    default: types.MESSAGE,
    validator(value: string) {
      return Object.values(types).includes(value)
    }
  },
  message: {
    type: String,
    default: types.MESSAGE
  }
})

const styleClass = computed(() => ['dm-message', `dm-message-${props.type}`])

const refVisible = ref(false)
let t = null
const setVisible = (visible: boolean) => {
  return new Promise(resolve => {
    refVisible.value = visible
    t = setTimeout(() => {
      resolve('')
      clearTimeout(t)
      t = null
    }, 300);
  })
}

const height = 40
const margin = 20
const refTop = ref(20)
const setTop = (top: number) => {
  refTop.value = top
}
defineExpose({
  refVisible,
  setVisible,
  height,
  margin,
  setTop
})
</script>

<style lang="scss">
.dm-message {
  position: fixed;
  z-index: 20;
  left: 50%;
  padding: 0 20px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  transform: translate(-50%, 0);
  transition: top 0.3s ease-out;

  &-success {
    background-color: #d1edc4;
    border: 1px solid #95d475;
    color: #529b2e;
  }

  &-warning {
    background-color: #f8e3c5;
    border: 1px solid #f2c98c;
    color: #b88230;
  }

  &-message {
    background-color: #c6e2ff;
    border: 1px solid #a0cfff;
    color: #337ecc;
  }

  &-error {
    background-color: #fab6b6;
    border: 1px solid #f89898;
    color: #c45656;
  }
}

.dm-message-fade-enter-from,
.dm-message-fade-leave-to {
  transform: translate(-50%, -20px);
  opacity: 0;
}

.dm-message-fade-enter-active {
  transition: all 0.3s ease-in;
}

.dm-message-fade-leave-active {
  transition: all 0.3s ease-out;
}
</style>