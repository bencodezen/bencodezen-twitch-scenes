import { createRouter, createWebHistory } from 'vue-router'
import Starting from './pages/Starting.vue'
import SoloDisplayBWB from './pages/SoloDisplayBWB.vue'
import SoloDisplayOOH from './pages/SoloDisplayOOH.vue'

const routes = [
  { path: '/starting', component: Starting },
  { path: '/solo-display-bwb', component: SoloDisplayBWB },
  { path: '/solo-display-ooh', component: SoloDisplayOOH }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
