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
          <div
            v-if="index == y"
            class="title"
          >
            {{ x.name }}
            <!-- <img
              v-if="index == y"
              :src="x.url"
            >
            <img
              v-else
              :src="x.url1"
            > -->
          </div>
          <div
            class="title2"
            v-else
          >
            {{ x.name }}
          </div>
        </div>
      </div>
      <div
        v-for="(a,b) in list"
        :key="b"
        class="bottom"
        @mouseenter="enter(index)"
        @mouseleave="leave()"
        :ref="'wrapper'+b"
        :class="{'hide':index !=b}"
      >
        <div class="line" />
        <div class="content">
          <div
            v-for="(x,y) in a.data"
            :key="y"

            :class="{'weight':x.children }"
          >
            <div class="data">
              <div class="left">
                <div>{{ x.num }}.</div>
                <div class="nbsp" />
                <div>{{ x.name }}</div>
              </div>
              <div
                v-if="x.children"
                class="open"
                :class="{tran:opens == y}"
                @click="open(y)"
              />
              <div
                v-if="!x.children"
                class="go"
                @click="gounit(x.url)"
              />
            </div>
            <!--  -->
            <ul v-if="x.children && opens == y">
              <div
                v-for="(i,d) in x.children"
                class="data padd"
                :key="d"
              >
                <div class="left x400">
                  {{ i.name }}
                </div>
                <div
                  class="go"
                  @click="gounit(i.url)"
                />
              </div>
            </ul>
            <div class="line6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// 下面是导入两张图片的相对地址
import hyuanli from '../assets/img/class/yuanli.png'
import hyuanli1 from '../assets/img/class/yuanli1.png'
import zhuan from '../assets/img/class/zhuangbei.png'
import zhuan1 from '../assets/img/class/zhuangbei1.png'
export default {
  name: 'List',
  data () {
    return {
      opens: 0,
      index: 0,
      list: [
        {
          name: '原理示教',
          url: hyuanli,
          url1: hyuanli1,
          data: [
            {
              num: 1,
              name: '电视会议系统典型设备模型',
              url: '/webgl/2-4常用线缆/2电视会议系统典型设备模型/DianshihuiyiShebeiMode/index.html'
            },
            {
              num: 2,
              name: '常用音视频接口线缆制作使用',
              url: '/webgl/2-4常用线缆/3常用音视频接口线缆制作使用/YinshipingXianlanzhizuo/index.html'
            }, {
              num: 3,
              name: '常用传输控制接口线缆制作使用',
              url: '/webgl/2-4常用线缆/4常用传输控制接口线缆制作使用/JiekouxianlanZhizuo/index.html'
            }
          ]
        },
        {
          name: '装备操作',
          url: zhuan,
          url1: zhuan1,
          data: [
            {
              num: 4,
              name: '会议终端开设',
              url: '/webgl/5会议终端开设/ZTE_T800/index.html'
            },
            {
              num: 5,
              name: '会议终端设置（网页端）',
              url: '/webgl/6-9会议终端设置（网页端）/HuiyiZhongduanshezhi_Web/index.html'
            }, {
              num: 6,
              name: '会议终端设置（遥控端）',
              url: '',
              children: [
                {
                  num: 1,
                  name: '科目一：调用摄像机镜头位置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频操作练习3/调用摄像机镜头位置/DiaoyongShezhishexiang/index.html'
                }, {
                  num: 2,
                  name: '科目二：设置摄像机镜头位置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频操作练习3/设置摄像机镜头位置/ShezhishexiangWeizhi/index.html'
                }, {
                  num: 3,
                  name: '科目三：视频源切换至DVI2',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频操作练习3/视频源切换至DVI2/ShipingQiehuanDVI2/index.html'
                }, {
                  num: 4,
                  name: '科目四：DVI2工作模式设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输出设置3/DVI2工作模式设置/DVI2Workshezhi/index.html'
                }, {
                  num: 5,
                  name: '科目五：DVI2制式设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输出设置3/DVI2制式设置/DVI2ZhishiShezhi/index.html'
                }, {
                  num: 6,
                  name: '科目六：VGA设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输出设置3/VGA设置/VGAshezhi/index.html'
                }, {
                  num: 7,
                  name: '科目七：视频输入源1对应串口设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输入设置练习4/视频输入源1对应串口设置/ShipingshuruChuankou/index.html'
                }, {
                  num: 8,
                  name: '科目八：视频输入源1工作模式设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输入设置练习4/视频输入源1工作模式设置/ShipingshuruWorkmode/index.html'
                }, {
                  num: 9,
                  name: '科目九：视频输入源1类型设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输入设置练习4/视频输入源1类型设置/ShipingshuruLeixing/index.html'
                }, {
                  num: 10,
                  name: '科目十：视频输入源1名称设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/6视频输入设置练习4/视频输入源1名称设置/ShipingshuruName/index.html'
                }
              ]
            },
            {
              num: 7,
              name: '音频设置',
              url: '',
              children: [
                {
                  num: 1,
                  name: '科目一：关闭线性输入回声抵消',
                  url: '/webgl/6-9会议终端设置（遥控端）/7音频设置3/关闭线性输入回声抵消/GuanbixianxingHuisheng/index.html'
                }, {
                  num: 2,
                  name: '科目二：线性输入关联视频源DVI2',
                  url: '/webgl/6-9会议终端设置（遥控端）/7音频设置3/线性输入关联视频源DVI2/GuanlianShipingyuanDVI2/index.html'
                }, {
                  num: 3,
                  name: '科目三：线性输入增益设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/7音频设置3/线性输入增益设置/XianxingshuruZengyi/index.html'
                }
              ]
            }, {
              num: 8,
              name: '网络设置',
              url: '',
              children: [
                {
                  num: 1,
                  name: '科目一：设置丢包告警度',
                  url: '/webgl/6-9会议终端设置（遥控端）/8网络设置4/设置丢包告警度/ShezhidiubaoGaojindu/index.html'
                }, {
                  num: 2,
                  name: '科目二：设置终端IP',
                  url: '/webgl/6-9会议终端设置（遥控端）/8网络设置4/设置终端IP/ShezhiZhongduanIP/index.html'
                }, {
                  num: 3,
                  name: '科目三：设置终端在GK中的号码',
                  url: '/webgl/6-9会议终端设置（遥控端）/8网络设置4/设置终端在GK中的号码/ShezhiZhongduanGKNum/index.html'
                }, {
                  num: 4,
                  name: '科目四：制定GK地址',
                  url: '/webgl/6-9会议终端设置（遥控端）/8网络设置4/制定GK地址/ZhidingGKdizhi/index.html'
                }
              ]
            }, {
              num: 9,
              name: '会议能力设置',
              url: '',
              children: [
                {
                  num: 1,
                  name: '科目一：会场名称设置',
                  url: '/webgl/6-9会议终端设置（遥控端）/9会议能力设置6/会场名称设置/HuiyiNameShezhi/index.html'
                }, {
                  num: 2,
                  name: '科目二：会场名称设置2',
                  url: '/webgl/6-9会议终端设置（遥控端）/9会议能力设置6/会场名称设置2/HuiyiNameShezhi2/index.html'
                }, {
                  num: 3,
                  name: '科目三：会议不支持G.722和G.711U',
                  url: '/webgl/6-9会议终端设置（遥控端）/9会议能力设置6/会议不支持G.722和G.711U/HuiyiBuzhichiG722AndG711U/index.html'
                }, {
                  num: 4,
                  name: '科目四：会议辅视频不支持H.264HP',
                  url: '/webgl/6-9会议终端设置（遥控端）/9会议能力设置6/会议辅视频不支持H.264HP/HuiyiFushipingH264HP/index.html'
                }, {
                  num: 5,
                  name: '科目五：会议主视频不支持H.264',
                  url: '/webgl/6-9会议终端设置（遥控端）/9会议能力设置6/会议主视频不支持H.264/HuiyiBuzhichiH264/index.html'
                }, {
                  num: 23,
                  name: '科目六：设置横滚字幕',
                  url: '/webgl/6-9会议终端设置（遥控端）/9会议能力设置6/设置横滚字幕/ShezhiHenggunzimu/index.html'
                }
              ]
            }
          ]
        }
      ]

    }
  },

  mounted () {
    const BS = BScroll
    this.$nextTick(() => {
      this.scroll = new BS(this.$refs.wrapper0, {})
      this.scroll = new BS(this.$refs.wrapper1, {})
    })
  },
  methods: {
    enter () {
      // console.log(this)
    },
    leave () {

    },
    open (index) {
      if (this.opens === index) {
        this.opens = 0
      } else {
        this.opens = index
      }
    },
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
    width:100%;
    height:800px;
    top:380px;
    left:0;
    right:0;
    margin:auto;
    padding:0 40px;
    overflow:hidden;
    box-sizing:border-box;
    padding-left:600px;
    padding-right:400px;
    font-size:32px;
    .line6{
      width:100%;
      height:1px;
      background:#fff;
      opacity:60%;
    }
    .top{
      display:flex;
      align-items:center;
      justify-content:start;
      .title2{
        width:150px;
        font-size:28px;
        font-weight:normal;
        cursor:pointer;
        padding:10px;
        text-shadow:1px 1px 1px #222;
      }
      .title{
        // background:linear-gradient(to bottom, #fff949, #ffd71d);
        // -webkit-background-clip: text;
        // color: transparent;
        color: #fff949;
        text-shadow:1px 1px 2px #222;

        width:150px;
        font-size:32px;
        font-weight:700;
        cursor:pointer;
        padding:10px;
      }
    }
    .line{
      height:2px;
      margin-bottom:20px;
      background:url('../assets/img/class/line.png') 100% 100% / 100% 100% no-repeat;
    }
    .hide{
      display:none;
    }
    .bottom{
      box-sizing:border-box;
      height:740px;
      overflow-y:auto;
      padding-right:300px;
    .weight{
        font-weight:700;
        ul{
          margin:0;
        }
      }

     .data{
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:20px;
      font-size:24px;
      .x400{
        font-weight:400;
      }
      .left{
        font-size:30px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        text-shadow:0px 1px 4px #222;
        .nbsp{
          width:20px;
        }
      }
      .tran{
        transform:rotate(0deg) !important;
      }
      .open{
        width:68px;
        heiht:60px;
        background:url('../assets/img/class/open.png') 100% 100% / 100% 100% no-repeat;
        height:54px;
        transform:rotate(90deg) ;

        cursor:pointer;
      }
      .go{
        width:136px;
        background:url('../assets/img/class/go.png') 100% 100% / 100% 100% no-repeat;
        height:54px;
        cursor:pointer;
      }
     }
     .padd{
        padding:10px;
        padding-right:20px;
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
