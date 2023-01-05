<template>
  <h1>Button 按钮</h1>
  <p>按钮是一种命令组件，可发起一个即时操作。</p>
  <Demo :component="Button1" />
  <Demo :component="Button2" />
  <Demo :component="Button3" />
  <Demo :component="Button4" />
  <Demo :component="Button5" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import Button1 from './Button1.vue'
import Button2 from './Button2.vue'
import Button3 from './Button3.vue'
import Button4 from './Button4.vue'
import Button5 from './Button5.vue'
export default {
  components: { Button, Demo },
  setup() {
    const loading1 = ref(false)
    const loading2 = ref(false)

    const handleClick1 = () => {
      loading1.value = !loading1.value
    }
    const handleClick2 = (e) => {
      console.log(e)
      loading2.value = !loading2.value
    }

    return {
      loading1,
      loading2,
      handleClick1,
      handleClick2,
      Button1,
      Button2,
      Button3,
      Button4,
      Button5,
    }
  },
}
</script>
