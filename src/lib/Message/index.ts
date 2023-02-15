import types from './type'
interface Options {
  type?: string
  message: string
}
const Message = (options: Options) => {
  console.log(options.message)
}
Object.values(types).forEach(type => {
  Message[type] = (options: Options) => {
    options.type = type
    return Message(options)
  }
})
export default Message
