<template>
  <div
    class="home"
    id="1"
  >
    <img
      alt="Vue logo"
      src="../assets/img/class/bg2.png"
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
      <div class="right">
        <div class="box-text">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Class',
  data () {
    return {
      text:
        '课程面向电视会议系统值勤维护工作相关人员,聚焦当前典型电视会议系统设备训练需求,围绕原理知识、操作训练、任务实施设置课程内容.包含原理示教、装备操作、作战运用3个组训单元,22 个训练科目，融合军事游戏化思想.提供训练、考核2种模式，提供远程式、虚拟化、交互式训练与考核，旨在提升全军各级视频保障人员岗位技能水平。'
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
  // background:url('../assets/img/class/group.png') 100% 100% / 100% 100% no-repeat;
  img {
    width: 100%;
    height: 100%;
  }
  .center {
    display: flex;
    position: absolute;
    bottom: 225px;
    width: 100%;
    margin: auto;
    padding: 10px 161px;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    .video-box {
      background: url(../assets/img/class/jx.png) 100% 100% / 100% 100%
        no-repeat;
      padding: 30px;
      width: 780px;
      height: 469px;
      .video {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      padding: 30px;
      width: 884px;
      height: 410px;
      padding-top: 200px;
      background: url(../assets/img/class/class.png) 100% 100% / 100% 100%
        no-repeat;
      .box-text {
        text-justify: inter-ideograph;
        letter-spacing: 5px;
        text-indent: 100px;
        width: 91%;
        font-size: 32px;
        line-height: 41px;
        text-indent: 40px;
        color: #fff;
        margin: auto;
        line-height: 40px;
        text-align: left;
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
        font-size: 38px;
        color: #49f4fe;
        margin: auto;
        line-height: 40px;
      }
    }
  }
}
</style>
