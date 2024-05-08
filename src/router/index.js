
import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../components/UserLogin.vue'
import ContendorTareas from '../components/ContendorTareas.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: UserLogin
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: ContendorTareas
  }

]


const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router
