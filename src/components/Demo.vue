<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <!-- 描述 
    <div>
      <component :is="descComponent"></component>
    </div> -->
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <!-- 复制粘贴代码片段 -->
      <Button class="copyBtn" :data-clipboard-text="component.__sourceCode" @click="copyCode">拷贝代码</Button>

      <!-- 展示或隐藏代码 -->
      <Popover trigger="hover">
        <template #content>
          示例
        </template>
        <Button @click="codeVisible = true" v-if="!codeVisible">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-code"></use>
          </svg>
        </Button>
        <Button theme="primary" @click="codeVisible = false" v-else>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-code"></use>
          </svg>
        </Button>
      </Popover>
    </div>
    <Transition name="code">
      <div id="code" class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Button from '../lib/Button.vue'
import Popover from '../lib/Popover.vue'
import Message from '../lib/Message'
import 'prismjs'
import 'prismjs/themes/prism.css'
import { onMounted, ref } from 'vue'
import Clipboard from 'clipboard'
const props = defineProps<{
  component: any
  // descComponent: any
}>()

const Prism = (window as any).Prism
const codeVisible = ref(false)
const html = Prism.highlight(
  props.component.__sourceCode,
  Prism.languages.html,
  'html'
)

let clipboard
onMounted(() => {
  clipboard = new Clipboard('.copyBtn')
})
const copyCode = () => {
  clipboard.on('success', () => {
    Message({
      type: 'success',
      message: '复制成功'
    })
    clipboard.destroy();
  })
  clipboard.on('error', () => {
    Message({
      type: 'error',
      message: '复制失败'
    })
    clipboard.destroy();
  })
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  margin: 16px 0 32px;

  >h2 {
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

    >pre {
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
