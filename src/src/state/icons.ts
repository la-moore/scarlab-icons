import { reactive, toRef } from 'vue'
import { useClipboard } from '/~/plugins/clipboard'
import icons from '@scarlab-icons/icons'
import tags from '@scarlab-icons/icons/dist/tags.json'
import Icon from '/~/core/icon'

class IconClass extends Icon {
  component: any
  name: string
  type: string
  tags: string[]
  toSvg: (attr?: any, beauty?: boolean) => string

  constructor(name, type, paths, tags) {
    super(name, type, paths, tags)
  }

  copyToClipboard(attrs = {}) {
    const { copy } = useClipboard()

    copy(this.toSvg(attrs))
  }

  downloadSvg(attrs = {}) {
    const element = document.createElement('a')

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.toSvg(attrs)))
    element.setAttribute('download', `${this.name}.svg`)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }
}

const state = reactive({
  icons: [] as IconClass[],
})

icons.forEach((icon) => {
  const type = icon.path.split('/')[0]

  state.icons.push(
    new IconClass(icon.name, type, icon.paths, tags[icon.name] || [])
  )
})

export function useIcons() {
  return {
    icons: toRef(state, 'icons'),
  }
}
