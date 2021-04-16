<template>
<div class="my-prize">
  <div class="my-prize-list">
    <card-item :params="item" 
      v-for="(item,index) in cardList" :key="index"
      @to-use="toUse"
      @read-detail="readDetail"
    ></card-item>
  </div>
  <details-tip v-if="ishowDetail" 
    :prizeType="prizeTyped" 
    :couponCode="couponCoded"
    @close-popup="closePopup"
  ></details-tip>
</div>
</template>

<script>
import cardItem from '../components/card'
import detailsTip from '../components/detailsTip'
export default {
  components:{
    cardItem,
    detailsTip
  },
  data () {
    return {
      ishowDetail: false,
      prizeTyped: 0,
      couponCoded: '-',
      cardList:[
        {id:'d05asd6', prizeType: 0, time:'2021-03-14 23:59', name: '礼物', img: require('@/assets/images/button-begin.png')},
        {id:'pu5ert', prizeType: 1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:'idfsd62', prizeType: 1, time:'2021-03-14 23:59', name: '抽奖券抽奖券抽奖券抽奖券抽奖券抽奖券抽奖券', img: require('@/assets/images/button-begin.png')}
      ]
    }
  },
  methods:{
    toUse(data){
      console.log(data)
    },
    readDetail(item){
      console.log(item)
      this.prizeTyped = item.prizeType;
      this.couponCoded = item.id;
      this.ishowDetail = true;
    },
    closePopup(){
      this.ishowDetail = false;
    }
  }
}
</script>

<style scoped>
.my-prize {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: url('../assets/images/bg-myprize.png') no-repeat;
  background-size: 100% 100%;
  padding: 15vh 0.43rem 0.8rem 0.43rem;
}
.my-prize-list {
  width: 100%;
  height: 81vh;
  overflow-y: scroll;
}
</style>
