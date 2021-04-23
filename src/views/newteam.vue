<template>
  <div
    class="homes"
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
      text: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
    }
  },
  components: {}
}
</script>

<style lang="less" scope>
@bg: #1f1f1f;
.homes {
  width: 100%;
  height: 100%;
  position: relative;
  background:url('../assets/img/class/bg1.png') no-repeat;
  background-size:cover
  img {
    width: 100%;
    height: 100%;
  }
  .center {
    position: absolute;
    bottom: 130px;
    padding: 40px;
    left:350px;
    width:800px;
    height:500px;
    overflow:hidden;
    .text-box {
      text-align: left;

      .box-text {
        letter-spacing: 5px;
        text-indent: 100px;
        width: 91%;
        font-size: 28px;
        color:#ffea00;
        margin: auto;
        line-height: 40px;
      }
    }
  }
}
</style>
