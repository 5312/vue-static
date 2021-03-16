<template>
  <div class="homes">
    <div class="center">
      <div class="title">
        立刻体验完整版
      </div>
      <div class="slider" />
      <a
        href=""
        target="_blank"
        class="down"
      >
        <!-- 下载软件 -->
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Download',
  data () {
    return {}
  }
}
</script>

<style lang="less" scope>
.homes {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url('../assets/img/page6/bg.png') 100% 100% /100% 100% no-repeat;
  .center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    text-align: center;
    .title {
      color: #fff;
      font-weight: bold;
      font-size: 45px;
      padding: 20px 0;
    }
    .slider {
      width: 80px;
      height: 5px;
      margin: auto;
      background: url('../assets/img/page6/slider.png') 100% 100% /100% 100% no-repeat;
    }
    @height: 70px;
    .down {
      display: block;
      text-decoration: none;
      margin: 60px auto 0;
      width: 250px;
      height: @height;
      font-size: 25px;
      font-weight: bold;
      line-height: @height;
      text-align: center;
      color: #fff;
      background: url('../assets/img/page6/btnd.png') 100% 100% /100% 100% no-repeat;
    }
  }
}
</style>
