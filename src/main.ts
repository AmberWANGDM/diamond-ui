import { createApp } from 'vue' // 创建app实例
import './lib/dm.scss'
import App from './App.vue'
import './index.scss'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app') // 挂载到div#app上面