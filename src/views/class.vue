<template>
  <div
    class="home"
    id="1"
  >
    <img
      alt="Vue logo"
      src="../assets/img/class/bg.png"
    >
    <div class="center">
      <div class="video-box">
        <video
          class="video"
          controls="controls"
          preload="true"
          src="../assets/ds.mp4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Class',
  data () {
    return {

    }
  },
  components: {}
}
</script>

<style lang="less" scope>
@bg: #1f1f1f;
.home {
  width: 100%;
  height:100%;
  position: relative;
  // background:url('../assets/img/class/group.png') 100% 100% / 100% 100% no-repeat;
  img {
    width: 100%;
    height: 100%;
  }
  .center {
    position: absolute;
    bottom: 300px;
    padding: 40px;
    left:200px;
    .video-box {
      background: url(../assets/img/class/jx.png) 100% 100% / 100% 100%
        no-repeat;
      padding: 30px;
      width: 700px;
      height: 400px;
      margin: auto;
      .video {
        width: 100%;
        height: 100%;
      }
    }
    .text-box {
      text-align: left;
      .box-title {
        font-size: 45px;
        font-weight: 700;
        color: #fff;
        text-align: center;
        padding: 20px;
        margin: 30px;
      }
      .box-text {
        letter-spacing: 5px;
        text-indent: 100px;
        width: 91%;
        font-size: 28px;
        color: #49f4fe;
        margin: auto;
        line-height: 40px;
      }
    }
  }
}
</style>
