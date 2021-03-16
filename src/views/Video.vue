<template>
  <div class="home2">
    <div class="main">
      <video
        class="video"
        controls="controls"
        preload="true"
        src="../assets/mp.mp4"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Video',
  data () {
    return {}
  }
}
</script>

<style lang="less" scope>
.home2 {
  width: 100%;
  height: 100%;
  padding-top: 130px;
  box-sizing: border-box;
  background: url('../assets/img/page5/bg.png') 100% 100%/ 100% 100% no-repeat;
  .main {
    width: 70%;
    min-width: 1280px;
    height: 80%;
    min-height: 720px;
    margin: auto;
    padding: 30px;
    background: url('../assets/img/page5/videoBg.png') 100% 100%/ 100% 100% no-repeat;
    .video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
}
</style>
