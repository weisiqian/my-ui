import { App } from 'vue'
import Button from './button.vue'

export const UButton = Button

export const UButtonPlugin = {
  install(app: App) {
    app.component(Button.name, Button)
  }
}

export * from './types'

export default UButton
