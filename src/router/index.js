import { createRouter, createWebHashHistory } from 'vue-router'
import Class from '../views/class.vue'
// import About from '../views/About.vue'
// import Team from '../views/Team.vue'
// import Video from '../views/Video.vue'
// import Experience from '../views/Experience.vue'
// import Download from '../views/Download.vue'
const routes = [
  {
    path: '/',
    name: 'Class',
    component: Class
  },
  {
    path: '/Newteam',
    name: 'Newteam',
    component: () => import(/* webpackChunkName: "about" */ '../views/newteam.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  // scrollBehavior
})

export default router
