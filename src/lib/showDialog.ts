import { h, render } from 'vue'
import Dialog from './Dialog.vue'
// 通常使用 声明式渲染 <Dialog :visible="bool" @update:visible="bool=$event" />
// 以下是使用函数调用组件，命令式写法
export const openDialog = options => {
  const { title, content, ok, cancel, closeOnClickOverlay } = options
  // 1. 调用h把组件变成虚拟DOM
  const VNode = h(
    Dialog,
    // 传给组件的props
    {
      // v-model需要扩展为modelValue和onUpdate:modelValue
      visible: true,
      'onUpdate:visible': newValue => {
        if (!newValue) {
          render(null, div)
          div.remove()
        }
      },
      ok,
      cancel,
      closeOnClickOverlay,
    },
    // slot https://cn.vuejs.org/guide/extras/render-function.html#passing-slots
    {
      title: () => title,
      content: () => content,
    }
  )
  // 2. 准备好挂载节点
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 3. render渲染虚拟dom到真实dom
  render(VNode, div)
}
