import { reactive, toRef } from 'vue'

const state = reactive({
  darkMode: document.body.className.includes('dark')
})

function inverseDarkMode() {
  if (state.darkMode) {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
}

function enableDarkMode() {
  state.darkMode = true

  document.body.classList.add('dark')
}

function disableDarkMode() {
  state.darkMode = false

  document.body.classList.remove('dark')
}

export function useDarkMode() {
  return {
    darkMode: toRef(state, 'darkMode'),
    inverseDarkMode,
    enableDarkMode,
    disableDarkMode
  }
}
