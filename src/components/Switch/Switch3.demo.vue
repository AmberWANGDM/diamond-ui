<demo>禁用状态</demo>

<template>
  <Switch v-model:value="bool" size="small" disabled />
  <Switch v-model:value="bool" size="medium" disabled />
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool,
    }
  },
}
</script>
