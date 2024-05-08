<script>
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from './components/UserLogin.vue'
import ContendorTareas from './components/ContendorTareas.vue'
import './assets/index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: UserLogin },
    { path: '/tareas', component: ContendorTareas }
  ]
})

const app = createApp({
})

app.use(router)
app.mount('#app')
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style>
</style>