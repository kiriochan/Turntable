<template>
<div class="popup-fail" @touchmove.prevent v-if="isShow">
    <div class="popup-fail-tip">
        <div class="popup-fail-main">
            <div class="popup-close-btn" @click="closePopup"></div>
            <p>好遗憾</p>       
            <p>您本次未中奖</p>       
            <p :style="remainingTimes == 0 ? 'visibility:hidden' : ''">下次再接再厉</p>   
            <img src="@/assets/images/gift-none.png" alt="">   
            <p class="f-c-f remain" :style="remainingTimes == 0 ? 'visibility:hidden' : ''">本月剩余抽奖次数：<span>{{ remainingTimes }}</span>次</p> 
            <p class="f-c-f" @click="tryAgain">{{ remainingTimes == 0 ? '好的' : '再来一次' }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            // 剩余抽奖次数
            remainingTimes: 2
        }
    },
    methods: {
        closePopup(){
            this.$emit('close-popup');
        },
        tryAgain(){
            if(this.remainingTimes != 0){
                this.$emit('try-again');
            }
            this.closePopup();
        }
    }
}
</script>

<style scoped>
.f-c-f{
    color: #fff;
}

.popup-fail{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-fail-tip{
    width: 342px;
    height: 372px;
    background: url('../assets/images/tip-f.png') no-repeat;
    background-size: 100% 100%;
}

.popup-fail-main{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    color: #F0621C;
}

.popup-close-btn{
    width: 22px;
    height: 22px;
    background: url('../assets/images/close-fff.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 25px;
    top: -22px;
}

.popup-fail-main p{
    font-size: 14px;
}

.popup-fail-main p:first-of-type{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 75px 0 3px 0;
}

.popup-fail-main p:last-of-type{
    width: 195px;
    height: 57px;
    font-size: 18px;
    letter-spacing: 2px;
    background: url('../assets/images/btn-f.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 6px;
    text-align: center;
    line-height: 44px;
}

.popup-fail-main img{
    width: 150px;
    height: 68px;
    margin-top: 14px;
}

.remain{
    margin-top: 15px;
    letter-spacing: 1px;
}

.remain span{
    font-size: 14px;
}
</style>
