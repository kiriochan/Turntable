<template>
  <div class="lucky-wheel">
    <div class="lucky-wheel-wrap">
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
    <img class="img-bottom" src="@/assets/images/footer.png" alt="">
  </div>
</template>

<script>
export default {
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
        radius: '40px',
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
            top: '10%',
            fontColor: '#fff',
            fontSize: '14px'
          }],
          imgs:[{ src: item.img, width: '30%', top: '35%' }],
        })
      })
      this.prizes = prizes
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
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
  width: 100%;
  height: 559px;
  padding: 0 18px;
  box-sizing: border-box;
  position: absolute;
}
.lucky-wheel-main{
  margin-top: 160px;
}
.img-bottom{
  /* position: relative; */
}
</style>