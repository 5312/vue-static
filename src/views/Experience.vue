<template>
  <div class="homes1">
    <div class="rightBox">
      <div class="title">
        环境要求
      </div>
      <div class="slider" />
      <div class="text">
        请使用火狐浏览器，谷歌浏览器，Edge浏览器查看，加载过程中请耐心等待，首次加载会比较慢
      </div>
      <div class="title">
        控制按键
      </div>
      <div class="keys">
        <span class="text">+鼠标</span>
      </div>
      <div
        class="btn btn1"
        @click="gounit"
      >
        <!-- href="./Huo4.0/index1.html" -->
        <a class="a">
          开始体验1
        </a>
      </div>
      <div
        class="btn btn2"
        @click="gounit"
      >
        <a class="a">
          开始体验2
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Experience',
  data () {
    return {}
  },
  methods: {
    gounit () {
      const PATH = window.location.host
      console.log(PATH)
      window.open('http://' + PATH + '/Huo4.0/index.html')
    }
  }
}
</script>

<style lang="less" scope>
.homes1 {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url('../assets/img/page4/bg.png') 100% 100% /100% 100% no-repeat;
  .rightBox {
    position: absolute;
    right: 250px;
    top: 300px;
    width: 300px;
    text-align: left;
    .slider {
      width: 200px;
      height: 10px;
      margin: 10px 0;
      margin-bottom: 10px;
      background: url('../assets/img/page4/slider.png') 100% 100% /100% 100% no-repeat;
    }
    .text {
      color: rgba(255, 255, 255, 0.685);
    }
    .title {
      color: #fff;
      font-weight: bold;
      font-size: 30px;
      padding: 30px 0;
    }
    .keys {
      position: relative;
      width: 200px;
      height: 150px;
      background: url('../assets/img/page4/wasd.png') 100% 100% /100% 100% no-repeat;
      .text {
        position: absolute;
        right: -100px;
        color: #fff;
        font-weight: bold;
        font-size: 40px;
        line-height: 150px;
      }
    }
    @height: 70px;
    // .btn1 {
    //   background: url('../assets/img/page4/btn1.png') 100% 100% /100% 100% no-repeat;
    // }
    // .btn2 {
    //   background: url('../assets/img/page4/btn2.png') 100% 100% /100% 100% no-repeat;
    // }
    .btn {
      cursor: pointer;
      background: url('../assets/img/page4/btn.png') 100% 100% /100% 100% no-repeat;
      margin-top: 30px;
      width: 250px;
      height: @height;
      font-size: 35px;
      font-weight: bold;
      line-height: @height;
      text-align: center;
      color: #fff;
      .a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
