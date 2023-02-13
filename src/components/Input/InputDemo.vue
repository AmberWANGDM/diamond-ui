<template>
  <Demo :component="BasicInput" />
  <Demo :component="DisabledInput" />
  <Demo :component="PasswordInputDemo" />
  <Demo :component="TextAreaDemo" />
  <AttrTable :attrs="attrs" />
</template>

<script setup lang="ts">
import AttrTable from '../AttrTable.vue';
import Demo from '../Demo.vue'
import BasicInput from './BasicInput.demo.vue';
import DisabledInput from './DisabledInput.demo.vue';
import PasswordInputDemo from './PasswordInput.demo.vue';
import TextAreaDemo from './TextArea.demo.vue';
const attrs = [
  { name: 'v-model', info: '绑定值', type: 'string', default: '-' },
  { name: 'disabled', info: '是否禁用', type: 'boolean', default: '-' },
  { name: 'placeholder', info: '输入框占位文本	', type: 'string', default: '请输入内容' },
  { name: 'autosize', info: "textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }", type: 'boolean/object', default: '-' },

]
</script>

<style lang="scss">

</style>