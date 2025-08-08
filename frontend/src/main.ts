import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
// 注册所有 Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
    .use(router)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .mount('#app')

