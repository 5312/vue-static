import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// px2rem 自适应
import 'lib-flexible'
createApp(App).use(router).mount('#app')
