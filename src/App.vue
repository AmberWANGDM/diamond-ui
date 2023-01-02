<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'

export default {
  setup() {
    // ref()会根据初始化的值推导其类型
    // 如果希望指定更复杂的类型,可以写成
    // const asideVisible:Ref<boolean> = ref(false)
    // 或者在调用ref时传入泛型参数,覆盖默认推导 ref<boolean>(false)
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width < 500 ? false : true)
    provide('asideVisible', asideVisible)
  },
}
</script>
