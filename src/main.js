import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import Favorites from './pages/Favorites.vue'
import Home from './pages/Home.vue'
import Profile from './pages/Profile.vue'
import Details from './pages/Details.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/details', name: 'Details', component: Details }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
