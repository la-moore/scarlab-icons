import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import './index.css'

const app = createApp(App)

app.use(Notifications)
app.use(router)

app.mount('#app')
