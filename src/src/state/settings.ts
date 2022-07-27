import { reactive, toRef } from 'vue'

const state = reactive({
  size: 32,
  strokeWidth: 2,
  color: 'currentColor',
})

export function useSettings() {
  return {
    size: toRef(state, 'size'),
    strokeWidth: toRef(state, 'strokeWidth'),
    color: toRef(state, 'color'),
  }
}
