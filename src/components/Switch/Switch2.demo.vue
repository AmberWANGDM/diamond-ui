<demo>开关尺寸</demo>
<template>
  <Switch v-model:value="bool" size="small" />
  <Switch v-model:value="bool2" size="medium" />
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
    const bool2 = ref(false)
    return {
      bool,
      bool2,
    }
  },
}
</script>
