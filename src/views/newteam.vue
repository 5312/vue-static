<template>
  <div
    class="warp"
    id="1"
  >
    <!-- <img
      alt="Vue logo"
      src="../assets/img/class/bg1.png"
    > -->
    <div class="center">
      <div class="text-box">
        <div class="box-text">
          {{ text }}
        </div>>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newteam',
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
.warp {
  height:100%;
  width: 100%;
  position: relative;
  background:url('../assets/img/class/bg(1).png') no-repeat;
  background-size:cover
  img {
    width: 100%;
    height: 100%;
  }
  .center {
    position: absolute;
    bottom: 160px;
    padding: 40px;
    left:320px;
    width:1000px;
    height:500px;
    overflow:hidden;
    box-sizing:border-box;
    .text-box {
      text-align: left;

      .box-text {
        letter-spacing: 5px;
        text-indent: 100px;
        width: 91%;
        font-size: 32px;
        color:#ffea00;
        margin: auto;
        line-height: 42px;
      }
    }
  }
}
</style>
