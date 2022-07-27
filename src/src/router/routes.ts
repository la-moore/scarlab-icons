import { RouteRecordRaw } from 'vue-router'
import { h, resolveComponent } from 'vue'

const emptyRouteComponent = {
  render: () => h(resolveComponent('router-view')),
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('/~/layouts/main-new/main.vue'),
    redirect: { name: 'home' },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('/~/views/home-new/home.vue'),
      },
    ]
  },
]

export default routes
