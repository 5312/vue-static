<template>
  <div
    class="warp"
    id="ww"
  >
    <!-- <img
      alt="Vue logo"
      src="../assets/img/class/bg1.png"
    > -->
    <div class="center">
      <div class="text-box">
        <div class="box-text">
          {{ text }}
        </div>
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newteam',
  data () {
    return {
      text:
        '教学团队长期从事电视会议系统一线教学及科研工作，具有丰富的教学经验与雄厚的科研能力，团队成员不仅擅长电视会议系统设备教学、操作、组网运用，而且先后参加了全军电视会议系统整冶升级论证与建设工作，并参与完成了全军电视会议室标准拟制工作，在全军电视会议系统构建和相关领域具有显著的优势，在军内具备较强的影响力，多名教员多次应邀担任电视会议系统相关竞赛评委。'
    }
  },
  components: {}
}
</script>

<style lang="less" scope>
@bg: #1f1f1f;

#ww {
  height: 100%;
}
.warp {
  height: 100%;

  width: 100%;
  position: relative;
  background: url('../assets/img/class/bg(1).png') no-repeat;
  background-size:cover img {
    width: 100%;
    height: 100%;
  }
  .center {
    position: absolute;
    bottom: 160px;
    padding: 40px;
    left: 320px;
    width: 1000px;
    height: 500px;
    overflow: hidden;
    box-sizing: border-box;
    .text-box {
      text-align: left;

      .box-text {
        letter-spacing: 5px;
        text-indent: 100px;
        width: 91%;
        font-size: 32px;
        color: #ffea00;
        margin: auto;
        line-height: 42px;
      }
    }
  }
}
</style>
