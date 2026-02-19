import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createHead } from '@vueuse/head'
import { useSeo } from './composables/useSeo'

document.documentElement.classList.add('dark')

const head = createHead()
createApp(App)
  .use(router)
  .use(head)
  .mount('#app')


