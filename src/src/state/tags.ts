import { reactive, toRef } from 'vue'
import tags from '@scarlab-icons/icons/dist/tags.json'

const state = reactive({
  tags: {},
})

Object.keys(tags).forEach((iconName) => {
  const iconTags = tags[iconName]

  iconTags.forEach((tagName) => {
    if (state.tags[tagName]) {
      state.tags[tagName].push(iconName)
    } else {
      state.tags[tagName] = [iconName]
    }
  })
})

export function useTags() {
  return {
    tags: toRef(state, 'tags')
  }
}
