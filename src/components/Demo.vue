<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-code"></use>
        </svg>
      </Button>
    </div>
    <Transition name="code">
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism-one-dark.css'
import { ref } from 'vue'

export default {
  props: { component: Object },
  components: { Button },
  setup(props) {
    const Prism = (window as any).Prism
    const codeVisible = ref(false)
    const html = Prism.highlight(
      props.component.__sourceCode,
      Prism.languages.html,
      'html'
    )
    return { Prism, html, codeVisible }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  margin: 16px 0 32px;
  > h2 {
    margin: 24px 0 12px;
    font-size: 20px;
    font-weight: 500;
  }
  &-component {
    padding: 48px;
    border: 1px solid $border-color;
  }
  &-actions {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
  }
  &-code {
    padding: 8px 6px;
    height: fit-content;
    font-family: 'Courier New', Courier, monospace;
    > pre {
      line-height: 1.1;
      font-family: Monaco;
      font-size: 0.9em;
      line-height: 1.5;
      margin: 0;
    }
  }
  .code-enter-active,
  .code-leave-active {
    transition: all 0.2s ease;
  }
  .code-enter-from,
  .code-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>
