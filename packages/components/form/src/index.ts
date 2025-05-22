import { App } from 'vue'
import Form from './form.vue'
import FormItem from './form-item.vue'

export const UForm = Form
export const UFormItem = FormItem

export const UFormPlugin = {
  install(app: App) {
    app.component(Form.name, Form)
    app.component(FormItem.name, FormItem)
  }
}

export * from './types'

export default UForm
