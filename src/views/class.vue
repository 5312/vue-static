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
      text: '课程主要面对从事电视会议系统执勤维护工作的相关人员，针对当前典型电视会议系统设备操作训练需求，包含原理示教、装备操作、作战运用3个组训单元，22个训练科目，重点针对电视会议系统功能、模型、接口、线缆等县相关基础知识、主流电视会议系统的结构组成及工作原理、典型设备操作和配置方法以及组网运用方法进行训练。培养执勤维护人员具备对应岗位职责所需的专业素养、满足信息通信保障任务要求。'

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
    display:flex;
    position: absolute;
    bottom: 225px;
    width:100%;
    margin:auto;
    padding:10px 161px;
    align-items:flex-end;
    justify-content:space-between;
    box-sizing: border-box;
    .video-box {
      background: url(../assets/img/class/jx.png) 100% 100% / 100% 100%
        no-repeat;
      padding: 30px;
      width:780px;
      height:469px;
      .video {
        width: 100%;
        height: 100%;
      }
    }
    .right{
      padding: 30px;
      width:884px;
      height:410px;
      padding-top:200px;
      background: url(../assets/img/class/class.png) 100% 100% / 100% 100% no-repeat;
      .box-text{
        letter-spacing: 5px;
        text-indent: 100px;
        width: 91%;
        font-size: 32px;
        line-height:41px;
        text-indent:40px;
        color:#fff;
        margin: auto;
        line-height: 40px;
        text-align:left;
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
        font-size: 36px;
        color: #49f4fe;
        margin: auto;
        line-height: 40px;
      }
    }
  }
}
</style>
