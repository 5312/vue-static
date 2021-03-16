import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Team from '../views/Team.vue'
// import Video from '../views/Video.vue'
// import Experience from '../views/Experience.vue'
// import Download from '../views/Download.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue')
  }
]
// const scrollBehavior = function (to, from, savedPosition) {
//   // return 期望滚动到哪个的位置
//   // console.log(to)
//   // if (to.hash) {
//   //   return {
//   //     selector: to.hash
//   //   }
//   // }
// }
const router = createRouter({
  history: createWebHashHistory(),
  routes
  // scrollBehavior
})

export default router
