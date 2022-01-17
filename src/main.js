import { createApp } from 'vue'
import App from './App.vue'
import routes from "./routes"

import './assets/js/script.js'
import './assets/css/style.css'
createApp(App)
.use(routes)
.mount('#app')
