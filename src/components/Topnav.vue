<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  setup() {
    // 注入值需要显式声明,否则是asideVisible是unknown
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleMenu }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  background: #f5eed0;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
