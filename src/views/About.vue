<template>
  <div
    class="home"
    id="1"
  >
    <img
      alt="Vue logo"
      src="../assets/img/page2/bg1-2.png"
    >
    <div class="center">
      <div class="video-box">
        <video
          class="video"
          controls="controls"
          preload="true"
          src="../assets/kcxcp.mp4"
        />
      </div>
      <div class="text-box">
        <div class="box-title">
          {{ title }}
        </div>
        <div class="box-text">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      text:
        '课程依据火箭军某型导弹武器装备训练大纲，构建虚拟操作演示，作战流程管理与特情交互处置和课程上线学习管理于一体的在线虚拟训练系统，具备多媒体与授课视频录制，储存，回放功能。通过设计与真实训练过程一致的“认知，练习，考核”三种模式，构建与真实训练环境相吻合的场景和交互手段，实现与实兵实装训练效果一致的沉浸感，为部队练兵和院校教学提供了技术支持和便捷服务。',
      title: '“导弹武器系统工程”在线虚拟训练课程'
    }
  },
  components: {}
}
</script>

<style lang="less" scope>
@bg: #1f1f1f;
.home {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .center {
    position: absolute;
    top: 120px;
    padding: 40px;
    .video-box {
      background: url(../assets/img/page2/video.png) 100% 100% / 100% 100%
        no-repeat;
      padding: 10px;
      width: 1075px;
      height: 603px;
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
