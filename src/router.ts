import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import DialogDemo from './components/Dialog/DialogDemo.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'

const md = (filename)=>{
  return h(Markdown,{path:`../markdown/${filename}.md`,key:filename})
}

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
      {path:"",redirect:"doc/intro"},
      {path:'intro',component:md('intro')},
      {path:'get-started',component:md('get-started')},
      {path:'switch',component:SwitchDemo},
      {path:'button',component:ButtonDemo},
      {path:'dialog',component:DialogDemo},
      {path:'tabs',component:TabsDemo},
    ]}
  ]
})