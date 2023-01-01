import { createApp } from 'vue' // 创建app实例
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Diamond from './components/Diamond.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/',component:Diamond}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') // 挂载到div#app上面