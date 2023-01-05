<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible">code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
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
    margin: 48px 0 12px;
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

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
