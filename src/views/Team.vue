<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/img/page3/bg.png"
    >
    <div class="mark">
      <div class="title">
        <div class="zh">
          我们的团队
        </div>
        <div class="xxs">
          ABOUT US
        </div>
      </div>
      <div class="headers">
        <div
          class="head"
          v-for="(x, y) in list"
          :key="y"
        >
          <img
            class="radiusbox"
            :src="x.active"
          >
          <div class="name">
            {{ x.title }}
          </div>
          <div class="point" />
          <div class="text">
            {{ x.text }}
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Team',
  components: {},
  data () {
    return {
      list: [
        {
          title: '高桂清',
          number: '01',
          active: require('@/assets/img/page3/head1.png'),
          text: '火箭军工程大学初级指挥系'
        },

        {
          title: '李勇翔',
          number: '03',
          active: require('@/assets/img/page3/head4.png'),
          text: '火箭军工程大学初级指挥系作战指挥教研室'
        },
        {
          title: '张训立',
          number: '02',
          active: require('@/assets/img/page3/head2.png'),
          text: '火箭军工程大学初级指挥系作战指挥教研室'
        },
        {
          title: '赵后随',
          number: '03',
          active: require('@/assets/img/page3/head3.png'),
          text: '火箭军工程大学初级指挥系作战指挥教研室'
        }
      ]
    }
  }
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
  .mark {
    width: 70%;
    position: absolute;
    bottom: 0px;
    height: 70%;
    margin: auto;
    left: 0;
    right: 0;

    .title {
      font-weight: 500;
      font-size: 36px;
      color: #fff;
      letter-spacing: 40px;
      margin-bottom: 140px;
      .zh {
        font-size: 50px;
        letter-spacing: 42;
      }
      .xxs {
        font-size: 28px;
        letter-spacing: 660;
      }
    }
    .headers {
      // font-size: 18px;
      width: 100%;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .head {
        position: relative;
        padding: 20px 0;
        text-align: center;

        .radiusbox {
          width: 100px;
          height: 100px;
          margin: auto;
          border-radius: 50%;
          border: 1px solid #fff;
        }
        .point {
          width: 20px;
          height: 5px;
          background: url('../assets/img/page3/point.png') 100% 100% / 100% 100%
            no-repeat;
          margin: 0px auto 20px;
        }
        @name: 60px;
        .name {
          color: #fff;
          line-height: @name;
          width: 200px;
          height: @name;
        }
        .text {
          color: #fff;
          width: 200px;
          height: @name;
        }
      }
    }
  }
}
</style>
