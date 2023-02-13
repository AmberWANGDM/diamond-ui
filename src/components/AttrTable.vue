<template>
  <h3>{{ title }}</h3>
  <table class="dm-attrs-table">
    <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="attr in attrs" :key="attr.name">
        <td>
          <pre><code>{{ attr.name }}</code></pre>
        </td>
        <td>{{ attr.info }}</td>
        <td>
          <pre><code>{{ attr.type }}</code></pre>
        </td>
        <td>
          {{ attr.default }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { } from 'vue'
interface Attrs {
  name: string, info: string, type: string, default: string
}
defineProps<{
  attrs: Attrs[],
  title: string,
}>()
</script>

<style lang="scss" scoped>
.dm-attrs-table {
  margin: 14px 0 30px;
  border-collapse: collapse;

  width: 100%;

  tr {
    text-align: left;

    th,
    td {
      border-bottom: 1px solid #bdbbbb;
      padding: 0.6em 1em;
      max-width: 250px;
      white-space: pre-wrap;

      &:first-child {
        width: 300px;
      }

      &:nth-child(2) {
        width: 500px;
      }
    }

    th {
      background-color: #f3ecf9;
      border-bottom: none;
    }

    td {
      code {
        font-family: JetBrains Mono;
        border-radius: 4px;
        background-color: #f6f7fa;
        font-size: 14px;
      }
    }
  }
}

h2 {
  margin-bottom: 10px;
}
</style>