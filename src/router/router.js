import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      icon:'mdi-home',
      component: HomeView,
      // meta: { requiresAuth: true}
    },
    {
      path: '/about',
      name: 'about',
      icon:'mdi-information-box',
      component: AboutView,
      // meta: { requiresAuth: true}

    },
    {
      path: '/',
      name: 'login',
      icon: 'mdi-account',
      component: Login,
      // meta: { requiresAuth: false}
    },
    {
      path: '/register',
      name: 'register',
      icon: 'mdi-account-plus',
      component: Register,
      // meta: { requiresAuth: false}
    }
  ],
})
// router.beforeEach((to, from) => {
//   if( !isAuthenticated && to.name !== 'Login'){ 
//     return { name: 'Login'}
//   }
//   return false
// })
export default router;