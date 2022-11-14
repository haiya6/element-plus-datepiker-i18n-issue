// @ts-expect-error
import { createApp, ref } from 'vue/dist/vue.esm-bundler.js'
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

const app = createApp({
  template: `
  <ElConfigProvider :locale="zhCn">
    <ElDatePicker v-model="v" format="MM/DD ddd"></ElDatePicker>
  </ElConfigProvider>
  `,

  setup() {
    const v = ref(new Date())

    return {
      v,
      zhCn
    }
  }
})

app.use(ElementPlus)

app.mount('#app')
