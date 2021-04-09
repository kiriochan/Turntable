<template>
  <div class="lucky-wheel">
    <div class="lucky-wheel-wrap">
      <div class="lucky-wheel-getted">我的奖品</div>
      <div class="lucky-wheel-main">
        <LuckyWheel
          class="luck-draw"
          ref="LuckyWheel"
          width="340px"
          height="340px"
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
    <div class="lucky-wheel-rules">
      <p style="font-size:14px;">活动细则</p>
      <br/><p>
      <p>1. 活动期间，2021年1月1日至2021年12月31日</p>
      <br/><p>
      2. 活动期间：每人每月有3词抽奖机会，每月抽奖机会不累积叠加；</p>
      <br/><p>
      3. 实物奖品请在「我的奖品」中查看并领取，满减优惠券请前往中信手机银行「生活」—— 中信商城 —— 个人——卡券包中查看，并在有效期内兑换或使用；手机话费将在T+5个工作日1内为客户充值至中奖后所填的手机号中；</p>
      <br/><p>
      4.中奖客户须填写完整的中奖信息，由于信息填写错误导致奖品无法发放或发放不成功的视为中奖客户主动放弃获奖资格;</p>
      <br/><p>
      5.获得实物奖品的客户，每月活动结束后将通过中信银行官方微信公布;</p>
      <br/><p>
      6.客户参与活动所填写的个人信息资料只在本次活动相关范围内使用;</p>
      <br/><p>
      7.通过不当途径参加本活动的客户，我行有权终止该客户参加活动的权利并取消其获奖资格;</p>
      <br/><p>
      8.本活动由中信易家电子商务有限公司提供相关服务,客户中奖或领取权益时填写的信息仅用于奖品或权益发放使用;</p>
      <br/><p>
      9.活动中如遇问题，请拨打客服电话4000020616-1咨询;话费充值问题请拨打4001117500咨询;</p>
      <br/><p>
      10.凡参与活动的客户，即视为接受活动所有规则，在法律范围内的最终解释权归中信银行所有。</p>
    </div>
    <popup-fail @try-again="startCallBack"></popup-fail>
  </div>
</template>

<script>
import popupFail from '../components/popupFail'
export default {
  components:{
    popupFail
  },
  data () {
    return {
      prizes: [
        { name: '0' },
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        { name: '7' }
      ],
      buttons: [{
        radius: '50px',
        imgs: [{ src: require('@/assets/images/button_begin.png'), width: '105%', top: '-120%' }]
      }],
      blocks: [
        { padding: '0px' },
        { 
            padding: '0px',
            imgs: [{
                src: require('@/assets/images/table.png'),
                width: '100%',
                rotate: true
            }]
        }
      ],
      defaultStyle: {
        fontColor: '#303133',
        fontSize: '10px',
      },
      defaultConfig: {
        gutter: '1px',
        offsetDegree: 22.5
      },
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      const prizes = [];
      let data = [
        { name: '谢谢参与', img: require('@/assets/images/my_gift.png') },
        { name: '礼物', img: require('@/assets/images/my_gift.png') },
        { name: '抽奖券', img: require('@/assets/images/my_gift.png') },
        { name: '元宝', img: require('@/assets/images/my_gift.png') },
        { name: '元宝', img: require('@/assets/images/my_gift.png') },
        { name: '抽奖券', img: require('@/assets/images/my_gift.png') },
        { name: '元宝', img: require('@/assets/images/my_gift.png') },
        { name: '抽奖券', img: require('@/assets/images/my_gift.png') }
      ]
      data.forEach((item, index) => {
        prizes.push({
          name: item.name,
          fonts: [{ 
            text: item.name, 
            top: '15%',
            fontColor: '#fff',
            fontSize: '14px'
          }],
          imgs:[{ 
            src: item.img, 
            width: '30%', 
            top: '55%' 
          }],
        })
      })
      this.prizes = prizes
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(1);
      }, 2000)
    },
    endCallBack (prize) {
      console.log(prize)
    },
  }
}
</script>

<style scoped>
.lucky-wheel{
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.lucky-wheel-img{
  width: 100%;
}

.lucky-wheel-wrap{
  background: url('../assets/images/header.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 559px;
  padding: 0 18px;
  box-sizing: border-box;
  position: absolute;
}

.lucky-wheel-getted{
  width: 70px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  box-sizing: border-box;
  padding-left: 6px;
  color: #fff;
  background:  url('../assets/images/my_gift.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 150px;
  right: 0;
  letter-spacing: 1px;
}

.lucky-wheel-main{
  width: 100%;
  margin-top: 160px;
  position: relative;
  z-index: 10;
}

.lucky-wheel-rules{
  color: #FEEFCF;
  background: url('../assets/images/footer.png') no-repeat;
  padding: 0 27px;
  background-size: 100% 100%;
  position: absolute;
  top: 308px;
  z-index: 2;
}

.lucky-wheel-rules p{
  letter-spacing: 1px;
}

.lucky-wheel-rules p:first-child {
  margin-top: 280px;
  font-size: 14px;
}

.lucky-wheel-rules p:last-child {
  padding-bottom: 38px;
}
</style>