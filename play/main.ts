import { createApp } from "vue"
import App from './app.vue'

import { MButton } from '@baojun-ui/components/button'

console.log(MButton);

const app = createApp(App);
app.use(MButton).mount('#app')

// # './app.vue' ts报错
// 已声明“App”，但从未读取其值。ts(6133)
// 找不到模块“./app.vue”或其相应的类型声明。ts(2307)
