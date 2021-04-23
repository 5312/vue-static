<template>
  <div
    class="homes1"
    id="1"
  >
    <img
      alt="Vue logo"
      src="../assets/img/class/g9.png"
    >
    <div class="center">
      <div class="top">
        <div
          v-for="(x,y) in list"
          :key="y"
          @click="index = y"
        >
          <div class="title">
            {{ x.name }}
          </div>
        </div>
      </div>
      <div class="line" />
      <div
        v-for="(a,b) in list"
        :key="b"
        class="bottom"
        :class="{'hide':index !=b}"
      >
        <div
          v-for="(x,y) in a.data"
          :key="y"
          class="data"
        >
          <div class="left">
            <div>{{ x.num }}.</div>
            <div class="nbsp" />
            <div>{{ x.name }}</div>
          </div>
          <div
            class="go"
            @click="gounit(x.url)"
          >
            <!-- {{ x.url }} -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      index: 0,
      list: [
        {
          name: '原理示教',
          data: [
            {
              num: 1,
              name: '电视会议系统功能及工作流程',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            },
            {
              num: 2,
              name: '电视会议系统典型设备模型',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 3,
              name: '常用音视频接口线缆制作',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 4,
              name: '常用传输控制接口线缆制作使用',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 5,
              name: '会议终端开设',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 6,
              name: '会议终端设置方式一',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 7,
              name: '会议终端设置方式二',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 8,
              name: '会议终端设置方式三',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }, {
              num: 9,
              name: '会议终端设置方式四',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            }
          ]
        },
        {
          name: '装备操作',
          data: [
            {
              num: 1,
              name: '电视会议系统功能及工作流程',
              url: ''
            }
          ]
        }
      ]

    }
  },
  methods: {
    gounit (url) {
      const PATH = window.location.host
      window.open('http://' + PATH + url)
      console.log('http://' + PATH + url)
    }
  },
  components: {}
}
</script>

<style lang="less" scope>
@bg: #1f1f1f;
.homes1 {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .center {
    position: absolute;
    width:1200px;
    height:800px;
    top:350px;
    left:0;
    right:0;
    margin:auto;
    padding:0 40px;
    overflow:hidden;
    .top{
      display:flex;
      align-items:center;
      justify-content:start;
      .title{
        background:linear-gradient(to bottom, #fff949, #ffd71d);
        -webkit-background-clip: text;
        color: transparent;
        font-size:30px;
        font-weight:700;
        cursor:pointer;
        margin:20px;
      }
    }
    .line{
      width:100%;
      height:2px;
      background:url('../assets/img/class/line.png') 100% 100% / 100% 100% no-repeat;
    }
    .hide{
      display:none;
    }
    .bottom{
      height:740px;
    overflow-y:auto;

     .data{
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:20px;
      font-size:24px;
      .left{
        display:flex;
        align-items:center;
        justify-content:space-between;
        .nbsp{
          width:20px;
        }
      }
      .go{
        width:136px;
        background:url('../assets/img/class/go.png') 100% 100% / 100% 100% no-repeat;
        height:54px;
      }
     }
    }
  }
}
/* 滚动槽 */
.bottom::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.bottom::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0,0,0,0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
.bottom::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0,0,0,0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}

</style>
