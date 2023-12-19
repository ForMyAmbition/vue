import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // }
    {
      path: '/workbench',
      name: 'workbench',
      // route level code-splitting
      component: () => import('../views/workbench/WorkbenchTable.vue')
    }
  ]
})

export default router
