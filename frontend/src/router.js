import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import AboutView from './pages/About.vue'

const routes = [
  { path: '/', component: HomeView, meta: {
  title: "Home"
  } },
  { path: '/about', component: AboutView, meta:{
    title: "About"
  }},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from)=>{
  document.title = to.meta?.title ?? 'Default Title'
})

export default router