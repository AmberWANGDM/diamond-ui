<template>
  <Demo :component="BasicInput" />
  <Demo :component="DisabledInput" />
  <Demo :component="PasswordInputDemo" />
  <Demo :component="TextAreaDemo" />
  <table class="dm-attrs-table">
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
    <tr>
      <td>
        <pre><code>v-model</code></pre>
      </td>
      <td>绑定值</td>
      <td>
        <pre><code>string</code></pre>
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        <pre><code>disabled</code></pre>
      </td>
      <td>是否禁用</td>
      <td>
        <pre><code>boolean</code></pre>
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        <pre><code>placeholder</code></pre>
      </td>
      <td>输入框占位文本 </td>
      <td>
        <pre><code>string</code></pre>
      </td>
      <td>
        请输入内容
      </td>
    </tr>
    <tr>
      <td>
        <pre><code>v-model</code></pre>
      </td>
      <td>textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }</td>
      <td>
        <pre><code>boolean/object</code></pre>
      </td>
      <td>
        false
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import BasicInput from './BasicInput.demo.vue';
import DisabledInput from './DisabledInput.demo.vue';
import PasswordInputDemo from './PasswordInput.demo.vue';
import TextAreaDemo from './TextArea.demo.vue';
</script>

<style lang="scss">
.dm-attrs-table {
  border-collapse: collapse;

  width: 100%;

  >tbody {
    >tr {
      text-align: left;

      >th,
      >td {
        border-bottom: 1px solid #bdbbbb;
        padding: 0.6em 1em;
        max-width: 250px;
        white-space: pre-wrap;
      }
    }
  }
}
</style>