<template>
<div class="my-prize">
  <div class="my-prize-list">
    <card-item :params="item" 
      v-for="(item,index) in cardList" :key="index"
      @to-use="toUse"
      ></card-item>
  </div>
</div>
</template>

<script>
import cardItem from '../components/card'
export default {
  components:{
    cardItem
  },
  data () {
    return {
      cardList:[
        {id:0, time:'2021-03-14 23:59', name: '礼物', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:1, time:'2021-03-14 23:59', name: '抽奖券', img: require('@/assets/images/button-begin.png')},
        {id:2, time:'2021-03-14 23:59', name: '抽奖券抽奖券抽奖券抽奖券抽奖券抽奖券抽奖券', img: require('@/assets/images/button-begin.png')}
      ]
    }
  },
  methods:{
    toUse(id){
      console.log(id)
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
