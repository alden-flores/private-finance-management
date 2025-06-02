import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/About.vue'

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