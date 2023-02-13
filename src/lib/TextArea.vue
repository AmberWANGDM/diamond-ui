<template>
  <textarea class="dm-textarea" ref="textAreaRef" :rows="minRow" :placeholder="placeholder"
    v-model="content"></textarea>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface AutoSize {
  minRow: number
  maxRow: number
}
const props = defineProps<{
  autoSize?: AutoSize,
  placeholder: string
}>()
const content = ref('')
const textAreaRef = ref<HTMLTextAreaElement>(null);
let { minRow, maxRow } = props?.autoSize || { minRow: 1, maxRow: 20 }
watch(() => content.value, () => adjustTextAreaHeight())
/**
 * 自适应高度
 * ! 1. 传递minRow和maxRow，如果scrollHeight高于maxHeight，overflowY设置为hidden
 * ! 2. 未传递，自适应高度
 */
const adjustTextAreaHeight = () => {
  let textarea = textAreaRef.value
  textarea.style.height = 'auto'
  const scrollHeight = textarea.scrollHeight
  textarea.style.height = scrollHeight + 'px'
  if (maxRow) {
    textarea.style.maxHeight = maxRow * 24 + 'px'
  }
  textarea.style.overflowY = 'hidden'
}
</script>

<style lang="scss" scoped>
$colorPrimary: #722ed1;

.dm-textarea {
  width: 100%;
  display: block;
  resize: vertical;
  padding: 5px 11px;
  line-height: 1.5;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #ebebeb inset;
  border-radius: 4px;
  font-size: 16px;
  transition: box-shadow 0.3s;
  border: none;

  &::placeholder {
    color: #cfcdcd;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px $colorPrimary inset;
  }
}
</style>