import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import DialogDemo from './components/Dialog/DialogDemo.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import PopoverDemo from './components/Popover/PopoverDemo.vue'
import InputDemo from './components/Input/InputDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import { h } from 'vue'

const md = string => {
  return h(Markdown, { content: string, key: string })
}

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: 'doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'popover', component: PopoverDemo },
        { path: 'input', component: InputDemo },
      ],
    },
  ],
})
