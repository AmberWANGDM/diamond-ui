import { App, createApp } from 'vue'
import types from './types'
import MessageComponent from './Message.vue'
interface Options {
  type?: string
  duration?: number
  message: string
}
// 第一种 api，直接调用 Message 函数，通过传入 type 属性区分消息类型
const Message = (options: Options) => {
  const messageApp: App<Element> = createApp(MessageComponent, options)
  showMessage(messageApp, options.duration)
}
// 第二种 api，通过调用 Message.type，例如 Message.success(options)
Object.values(types).forEach(type => {
  Message[type] = (options: Options) => {
    options.type = type
    return Message(options)
  }
})

// 显示消息
function showMessage(app: App<Element>, duration: number) {
  // 不用外面包裹 div
  const oFrag = document.createDocumentFragment()
  const vm = app.mount(oFrag)
  document.body.appendChild(oFrag)
  vm.setVisible(true)
  hideMessage(app, duration, vm)
}
// 隐藏消息
function hideMessage(app: App<Element>, duration: number, vm) {
  setTimeout(async () => {
    await vm.setVisible(false)
    app.unmount()
  }, duration || 3000)
}
export default Message
