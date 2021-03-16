<template>
  <div
    class="main"
    @wheel.prevent="wheel"
  >
    <div id="nav">
      <div class="logo">
        <img
          src="./assets/img/page1/logo.png"
          alt
        >
      </div>
      <router-link to="/">
        首页
      </router-link>
      <router-link
        to="/about"
        v-slot="{}"
      >
        课程介绍
      </router-link>
      <router-link to="/team">
        课程团队
      </router-link>

      <router-link to="/experience">
        抢先体验
      </router-link>
      <router-link to="/video">
        宣传视频
      </router-link>
      <router-link to="/download">
        软件下载
      </router-link>
    </div>

    <router-view v-slot="{ Component }">
      <!-- leave-active-class="animate__animated animate__fadeInUp" -->
      <transition
        enter-active-class="animate__animated animate__fadeInUp"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
const debounce = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()
export default {
  setup () {
    const router = useRouter()
    const route = useRoute()
    return {
      router,
      route
    }
  },
  data () {
    return {
      scrollNum: 0
    }
  },
  methods: {
    wheel (e) {
      debounce(() => {
        if (e.deltaY > 0) {
          this.rou('down')
        } else {
          this.rou('up')
        }
      }, 200)
    },
    rou (type) {
      const arr = this.router.options.routes
      // 全部路由
      const array = []
      arr.forEach(element => {
        array.push(element.path)
      })
      // 提取下标
      let num = 0
      if (type === 'down') {
        num =
          array.indexOf(this.route.path) >= 5
            ? -1
            : array.indexOf(this.route.path)
        // 向下
        this.router.push({
          path: array[num + 1]
        })
      } else {
        num =
          array.indexOf(this.route.path) <= 0
            ? 6
            : array.indexOf(this.route.path)
        // 向上
        this.router.push({
          path: array[num - 1]
        })
      }
    }
  }
}
</script>
<style lang="less">
@import './assets/css/scss.less';
@import '~animate.css';
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: '微软雅黑', 'Microsoft YaHei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @color;
  height: 100%;
  background: #0c0c0b;
}
.main {
  width: 100%;
  // min-width: 1920px;
  height: 100%;
  position: relative;
  overflow: hidden;
}
#nav {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 70%;
  min-width: 1400px;
  z-index: 9;
  height: 140px;
  margin: auto;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  .logo {
    // margin-left: 20px;
  }
  a {
    text-decoration: none;
    padding: 3px 5px;
    border-radius: 4px;
    color: @color;
    &.router-link-exact-active {
      color: #000;
      background: #fff;
    }
  }
}
</style>
