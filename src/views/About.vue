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
        '课程面向电视会议系统值勤维护工作相关人员，聚焦当前典型电视会议系统设备训练需求，围绕原理知识、操作训练、任务实施设置课程内容.包含原理示教、装备操作、作战运用3个组训单元，22 个训练科目，融合军事游戏化思想.提供训练、考核2种模式，提供远程式、虚拟化、交互式训练与考核，旨在提升全军各级视频保障人员岗位技能水平',
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
