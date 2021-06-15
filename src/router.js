import { createRouter, createWebHistory } from 'vue-router'
import Starting from './pages/Starting.vue'
import SoloDisplay from './pages/SoloDisplay.vue'

const routes = [
  { path: '/starting', component: Starting },
  { path: '/solo-display', component: SoloDisplay }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
