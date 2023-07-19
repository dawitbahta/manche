import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import 'boxicons'
import router from './routes.js'
import {createPinia} from "pinia";
import Vue3TouchEvents from "vue3-touch-events";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Vue3TouchEvents)
    .mount('#app');