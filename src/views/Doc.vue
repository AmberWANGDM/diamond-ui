<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <span>开始</span>
        <ol>
          <li>
            <router-link to="/doc/intro">简介</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">快速上手</router-link>
          </li>
        </ol>
        <span>组件列表</span>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <!-- 组件Demo -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import { RouterLink } from 'vue-router'
import Topnav from '../components/Topnav.vue'

export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return {
      asideVisible,
    }
  },
}
</script>

<style lang="scss" scoped>
$gray: #595959;
$colorPrimaryBgHover: #ebebeb;
$colorBorder: #f0f0f0;
$colorBg: #fafafa;
.router-link-active {
  color: #865cc1;
  background-color: #f4ebfa;
  border-radius: 8px;
  &:hover {
    background-color: #f4ebfa;
  }
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 187px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  border-right: 1px solid $colorBorder;
  background-color: $colorBg;
  width: 150px;
  padding: 6px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  height: 100%;
  z-index: 2;
  > span {
    color: $gray;
  }
  > ol {
    margin-top: 8px;
    margin-bottom: 24px;
    > li {
      margin-top: 2px;
      font-size: 14px;
      > a {
        display: inline-block;
        padding: 5px;
        padding-left: 12px;
        width: 100%;
        transition: background-color 0.25s;
        &:hover {
          background-color: $colorPrimaryBgHover;
          border-radius: 5px;
        }
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
