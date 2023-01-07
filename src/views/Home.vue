<template>
  <div class="topnavAndBanner">
    <Topnav class="homeTopnav" />
    <div class="banner">
      <h1>Diamond-UI</h1>
      <h3>一个基于Vue的 UI 组件库</h3>
      <p class="actions">
        <router-link to="/doc/get-started">快速上手</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用新版 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<style lang="scss" scoped>
.homeTopnav {
  background: transparent;
  border-bottom: none;
}
.topnavAndBanner {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
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
      font-size: 18px;
      background-color: rgba(123, 105, 186, 0.1);
      backdrop-filter: blur(10px);
      display: inline-block;
      border-radius: 8px;
      padding: 8px 16px;
      transition: background-color 0.5s ease-in-out;

      &:hover {
        background-color: rgba(123, 105, 186, 0.3);
      }
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 24px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
