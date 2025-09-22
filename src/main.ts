import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { debug } from '@/utils/debug'
import { debugConfig, getDebugLevel } from '@/config/debug'

debug.updateConfig({
  ...debugConfig,
  level: getDebugLevel()
})

debug.info('Application starting', {
  environment: import.meta.env.MODE,
  debugLevel: getDebugLevel(),
  debugEnabled: debugConfig.enabled
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

debug.info('Application mounted successfully')
