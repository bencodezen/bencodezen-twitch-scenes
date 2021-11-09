import { createRouter, createWebHistory } from 'vue-router'
import Starting from './pages/Starting.vue'
import LiveScreen from './pages/LiveScreen.vue'

const routes = [
  { path: '/starting', component: Starting },
  { path: '/live-screen', component: LiveScreen }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
