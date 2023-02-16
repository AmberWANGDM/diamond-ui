import { App, createApp, ref, watch } from 'vue'
import types from './types'
import MessageComponent from './Message.vue'
import { findIndex } from '../../shared/utils'
interface Options {
  type?: string
  duration?: number
  message: string
}
// 第一种 api，直接调用 Message 函数，通过传入 type 属性区分消息类型
const Message = (options: Options) => {
  const messageApp = createApp(MessageComponent, options)
  showMessage(messageApp, options.duration)
}
// 第二种 api，通过调用 Message.type，例如 Message.success(options)
Object.values(types).forEach(type => {
  Message[type] = (options: Options) => {
    options.type = type
    return Message(options)
  }
})

// 消息队列
const messageArr = ref([])
// 显示消息
function showMessage(app: App<Element>, duration: number) {
  // 不用外面包裹 div
  const oFrag = document.createDocumentFragment()
  const vm = app.mount(oFrag) // 获取组件实例
  document.body.appendChild(oFrag)

  messageArr.value.push(vm)
  // 计算 top
  setTop(vm)
  vm.setVisible(true) // 通过 v-show 控制消息显示
  watch(
    () => messageArr.value,
    () => setTop(vm)
  )
  hideMessage(app, duration, vm)
}
// 隐藏消息
function hideMessage(app: App<Element>, duration: number, vm) {
  vm.timer = setTimeout(async () => {
    messageArr.value = messageArr.value.filter(item => item !== vm)
    await vm.setVisible(false)
    app.unmount()
    clearTimeout(vm.timer)
    vm.timer = null
  }, duration || 3000)
}
// 计算 top
const setTop = vm => {
  const { setTop, height, margin } = vm
  const currentIndex = findIndex(messageArr.value, vm)
  setTop(margin * (currentIndex + 1) + height * currentIndex)
}
export default Message
