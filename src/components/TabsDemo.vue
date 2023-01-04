<template>
  <div>Tabs Demo</div>
  <h1>实例1</h1>
  <Tabs v-model:selected="selectedTitle">
    <Tab title="Tab1">内容1</Tab>
    <Tab title="Tab2">内容2</Tab>
    <Tab title="Tab3">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selectedTitle = ref('Tab1')
    return { selectedTitle }
  },
}
</script>
