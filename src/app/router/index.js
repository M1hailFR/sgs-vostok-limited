import { createRouter, createWebHistory } from 'vue-router'
import { FormPage, ResultPage } from '@/pages'

const routes = [
  {
    path: '/',
    name: 'form',
    component: FormPage,
  },
  {
    path: '/result',
    name: 'result',
    component: ResultPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
