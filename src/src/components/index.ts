import { Plugin, Component } from 'vue'
import ButtonIcon from './button/button-icon.vue'

export function useComponent(app, config, name: string, component: Component) {
  const prefix = config?.prefix || 'Base'

  app.component(`${prefix}${name}`, component)
}

const plugin: Plugin = function(app, config = {}) {
  useComponent(app, config, 'ButtonIcon', ButtonIcon)
}

export default plugin
