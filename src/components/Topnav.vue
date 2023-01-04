<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-diamond"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleMenu"
    >
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
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
  // background: #f5eed0;
  display: flex;
  padding: 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg {
      width: 42px;
      height: 42px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-60%);
    display: none;
    > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
