import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import 'boxicons'
import router from './routes.js'
createApp(App)
    .use(router)
    .mount('#app');