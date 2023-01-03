import { createApp,h } from 'vue'
import Dialog from './Dialog.vue'
export const openDialog = (options)=>{
  const {title,content,ok,cancel,closeOnClickOverlay} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render(){
      // https://vuejs.org/api/render-function.html#h
      return h(
        Dialog,
        // props
        {
        visible:true,
        'onUpdate:visible':(newValue)=>{
          if(newValue===false){
            app.unmount()
            div.remove()
          }
        },
        ok,
        cancel,
        closeOnClickOverlay
      },
      // slots
      {
        title,
        content
      })
    }
  })
  app.mount(div)
}