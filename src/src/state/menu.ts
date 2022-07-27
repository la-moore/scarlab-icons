import { reactive, toRef, Ref } from 'vue'

const state = reactive({
  isVisible: false,
  menu: [
    {
      label: 'All',
      search: '',
    },
    // {
    //   label: 'New',
    //   search: 'new',
    // },
    // {
    //   label: 'Popular',
    //   search: 'popular',
    // },
    {
      label: 'Solid',
      search: 'solid',
    },
    {
      label: 'Outline',
      search: 'outline',
    },
    {
      label: 'Circle',
      search: 'circle',
    },
    {
      label: 'Square',
      search: 'square',
    }
  ],
})

function openMenu(): void {
  state.isVisible = true
}

function closeMenu(): void {
  state.isVisible = false
}

export function useMenu() {
  return {
    menu: toRef(state, 'menu'),
    isVisible: toRef(state, 'isVisible'),
    openMenu,
    closeMenu
  }
}
