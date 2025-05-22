import { App } from 'vue'
import Input from './input.vue'

export const UInput = Input

export const UInputPlugin = {
  install(app: App) {
    app.component(Input.name, Input)
  }
}

export * from './types'

export default UInput
