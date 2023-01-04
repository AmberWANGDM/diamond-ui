<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>Diamond-UI</h1>
      <h3>一个基于Vue的 UI 组件库</h3>
      <p class="actions">
        <a href="https://github.com/AmberWANGDM/diamond-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 40px;
  }
  > h3 {
    margin-top: 20px;
    color: #6b7785;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 8px 12px;
      font-size: 14px;
      background-color: rgba(123, 105, 186, 0.1);
      backdrop-filter: blur(10px);
      display: inline-block;
      border-radius: 18px;
      padding: 8px 16px;
      transition: background-color 0.5s ease-in-out;

      &:hover {
        background-color: rgba(123, 105, 186, 0.3);
      }
    }
  }
}
</style>
