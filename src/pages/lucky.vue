<template>
  <div class="lucky-wheel">
    <div class="lucky-wheel-wrap">
      <div class="lucky-wheel-hybrid">
        <img src="../assets/images/header.png" />
        <img src="../assets/images/footer-top.png" />
        <div class="lucky-wheel-main">
          <LuckyWheel
            class="luck-draw"
            ref="LuckyWheel"
            height="1000"
            :blocks="blocks"
            :prizes="prizes"
            :buttons="buttons"
            :default-style="defaultStyle"
            :default-config="defaultConfig"
            @start="startCallBack"
            @end="endCallBack"
          />
        </div>
      </div>
      <div class="lucky-wheel-getted" @click="toMyPrize">我的奖品</div>
    </div>
    <activity-rules></activity-rules>
    <popup-fail
      @try-again="startCallBack"
      :isShow="showFail"
      @close-popup="closePopup(0)"
    ></popup-fail>
    <popup-success
      :param="prizeData"
      :isShow="showSuccess"
      @close-popup="closePopup(1)"
    ></popup-success>
  </div>
</template>

<script>
import popupFail from '../components/popupFail'
import popupSuccess from '../components/popupSuccess'
import activityRules from '../components/activityRules'
export default {
  components: {
    popupSuccess,
    popupFail,
    activityRules
  },
  data () {
    return {
      showFail: false,
      showSuccess: false,
      prizes: [], // 转盘奖品列表
      buttons: [
        // 转盘中间按钮 初始化
        {
          radius: '50px',
          imgs: [
            {
              src: require('@/assets/images/button-begin.png'),
              width: '105%',
              top: '-120%'
            }
          ]
        }
      ],
      blocks: [
        // 转盘背景和边框 初始化
        { padding: '0px' },
        {
          padding: '0px',
          imgs: [
            {
              src: require('@/assets/images/table.png'),
              width: '100%',
              rotate: true
            }
          ]
        }
      ],
      defaultStyle: {
        fontColor: '#303133',
        fontSize: '10px'
      },
      defaultConfig: {
        // 转盘偏转角度
        gutter: '1px',
        offsetDegree: 22.5
      },
      prizeData: {} // 抽中
    }
  },
  created () {
    this.getPrizesList() // 请求奖品列表数据
  },
  methods: {
    getPrizesList () {
      const prizes = []
      let data = [
        { name: '谢谢参与', img: require('@/assets/images/button-begin.png') },
        { name: '礼物', img: require('@/assets/images/button-begin.png') },
        { name: '抽奖券', img: require('@/assets/images/button-begin.png') },
        { name: '元宝', img: require('@/assets/images/button-begin.png') },
        { name: '元宝', img: require('@/assets/images/button-begin.png') },
        { name: '抽奖券', img: require('@/assets/images/button-begin.png') },
        { name: '元宝', img: require('@/assets/images/button-begin.png') },
        { name: '抽奖券', img: require('@/assets/images/button-begin.png') }
      ]
      data.forEach((item, index) => {
        prizes.push({
          name: item.name,
          img: item.img,
          fonts: [
            {
              text: item.name,
              top: '15%',
              fontColor: '#fff',
              fontSize: '14px'
            }
          ],
          imgs: [
            {
              src: item.img,
              width: '30%',
              top: '48%'
            }
          ]
        })
      })
      this.prizes = prizes
    },
    startCallBack () {
      // 抽奖回调
      this.$refs.LuckyWheel.play()
      this.prizeData = {}
      let stopTimer = setTimeout(() => {
        this.$refs.LuckyWheel.stop(1) // 控制转盘指针停止位置
        clearTimeout(stopTimer)
      }, 2000)
    },
    endCallBack (prize) {
      // 抽奖结束回调
      console.log(prize)
      this.prizeData = prize
      this.openPopup()
    },
    openPopup () {
      if (Object.keys(this.prizeData).length) {
        this.showSuccess = true
      } else {
        this.showFail = true
      }
    },
    closePopup (index) {
      if (index) {
        this.showSuccess = false
      } else {
        this.showFail = false
      }
    },
    toMyPrize () {
      this.$router.push('myPrize')
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
img {
  vertical-align: middle;
}
.lucky-wheel {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.lucky-wheel-wrap {
  position: relative;
  width: 100%;
}
.lucky-wheel-bg {
  position: relative;
  z-index: -1;
  width: 100%;
}
.lucky-wheel-hybrid > img:nth-child(1) {
  z-index: 1;
  width: 100%;
  object-fit: cover;
}
.lucky-wheel-hybrid > img:nth-child(2) {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
}
.lucky-wheel-main {
  position: absolute;
  z-index: 10;
  width: 100%;
  bottom: 0px;
  overflow: hidden;
}
.lucky-wheel-hybrid > img:nth-child(2),
.lucky-wheel-main {
  margin-bottom: 10%;
}
.luck-draw {
  width: 90%;
  margin: 0 auto;
  margin-bottom: calc(-1000px + 97%);
}
.lucky-wheel-getted {
  position: absolute;
  z-index: 11;
  top: 0;
  right: 0;
  margin-top: 40%;
  width: 70px;
  height: 34px;
  padding-left: 6px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  line-height: 35px;
  letter-spacing: 1px;
  background: url('../assets/images/my-gift.png') no-repeat;
  background-size: 100% 100%;
}
</style>
