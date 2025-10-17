import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)       // create the app instance
app.use(router)                   // add router
app.use(createMetaManager())      // add meta manager
app.mount('#app')                 // mount the app
