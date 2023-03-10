<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="dm-dialog-overlay" @click="onClickOverlay"></div>
      <div class="dm-dialog-wrapper">
        <div class="dm-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="dm-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button theme="primary" @click="ok">确定</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import Button from './Button.vue'

const props = withDefaults(
  defineProps<{
    /**
     * 是否显示对话框
     */
    visible: boolean
    /**
     * 点击遮罩层是否关闭对话框
     * @defaultValue true
     */
    closeOnClickOverlay?: boolean
    /**
     * 点击确定按钮时触发
     * @defaultValue () => true
     */
    ok?: () => boolean | void
    /**
     * 点击取消按钮时触发
     * @defaultValue () => true
     */
    cancel?: () => boolean | void
  }>(),
  {
    visible: false,
    closeOnClickOverlay: true,
    ok: () => true,
    cancel: () => true,
  }
)
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

const close = () => {
  emit('update:visible', false)
}

const onClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    close()
  }
}

const ok = () => {
  if (props.ok?.() !== false) {
    close()
  }
}

const cancel = () => {
  if (props.cancel?.() !== false) {
    close()
  }
}
</script>
<style lang="scss">
$radius: 4px;
$black: #1e2128;
$border-color: #e5e6eb;
$hover-color: #f2f3f5;
.dm-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 12px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: $black;
      width: 50%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:hover {
      background-color: $hover-color;
    }
  }
}
</style>
