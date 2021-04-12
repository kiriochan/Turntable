<template>
<div class="popup-success" @touchmove.prevent v-if="isShow">
    <div class="popup-success-tip">
        <div class="popup-close-btn" @click="closePopup"></div>
        <p class="popup-success-title">恭喜您 !</p>       
        <p class="popup-success-name">抽中了{{param.name}}</p>
        <div class="popup-success-img">
            <img :src="param.img" alt="">
        </div>
        <div class="popup-success-btn">
            <p v-if="param.prizeType" @click="receivingAddress">填写收货地址</p>
            <p v-else @click="useNow">立即使用</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        param: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isShow: false,
        }
    },
    methods: {
        closePopup(){
            this.isShow = false;
        },
        receivingAddress(){},
        useNow(){}
    }
}
</script>

<style scoped>
.popup-success{
    position: fixed;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background: rgba(0,0,0,0.8);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
}
.popup-success-tip{
    width: 100%;
    height: 420px;
    box-sizing: border-box;
    background: url('../assets/images/tip-s.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.popup-close-btn{
    width: 22px;
    height: 22px;
    background: url('../assets/images/close-fff.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 41px;
    top: -12px;
}
.popup-success-tip p {
    font-size: 20px;
    color: #FB5732;
}
.popup-success-title{
    margin-top: 43px;
}
.popup-success-img{
    width: 200px;
    height: 110px;
    margin-top: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.popup-success-img img{
    max-width: 200px;
    max-height: 110px;
}
.popup-success-btn {
    width: 195px;
    height: 57px;
    margin-top: 27px;
    line-height: 44px;
    background: url('../assets/images/btn-s.png') no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 2px;
}
.popup-success-btn p{
    font-size: 16px;
    color: #fff;
}
</style>
