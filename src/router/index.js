import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import Products from './../views/Products.vue'
import Login from './../views/Login.vue'
import Register from './../views/Register.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router