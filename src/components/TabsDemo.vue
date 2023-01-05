<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1" />
</template>

<script lang="ts">
import Tabs1 from './Tabs1.vue'
import Demo from './Demo.vue'
import { ref } from 'vue'
export default {
  components: {
    Demo,
  },
  setup() {
    const selectedTitle = ref('Tab1')
    return { selectedTitle, Tabs1 }
  },
}
</script>
