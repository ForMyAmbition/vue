import './assets/main.css'

import { createApp } from 'vue'
import pinia from './stores'
import http from './utils/request'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import type { requestType } from './types/requestType'

import App from './App.vue'
import router from './router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.provide('http', http as requestType)

app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')
