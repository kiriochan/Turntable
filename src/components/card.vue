<template>
<div class="list-item">
    <div class="item-img">
        <img :src="params.img" alt="">
    </div>
    <div class="item-info">
        <div class="prize-name">
            {{params.name}}
        </div>
        <p class="prize-time">
        中奖时间: {{params.time}}
        </p>
    </div>
    <div class="toUse" @click="toUse(params.id)">去查看</div>
</div>
</template>

<script>
export default {
    props: {
        params: {
            type: Object,
            required: true
        }
    },
    methods: {
        toUse(id){
            this.$emit('to-use',id);
        }
    }
}
</script>

<style scoped>
.list-item {
    width: 100%;
    height: 3.17rem;
    margin-bottom: 0.21rem;
    background: url('../assets/images/bg-listitem.png') no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 0.37rem;
    display: flex;
}
.item-img {
    width: 2.4rem;
    height: 2.4rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CFCFCF;
    border-radius: 0.13rem;
}
.item-img img{
    max-width: 100%;
    max-height: 100%;
}
.item-info {
    width: 3.52rem;
    padding: 0.13rem 0 0.13rem 0.27rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}
.prize-name{
    font-size: 0.37rem;
    color: #000;
}
.prize-time{
    font-size: 0.32rem;
    color: #969696;
    transform: scale(0.83);
    white-space: nowrap;
    position: relative;
    left: -0.27rem;
}
.toUse{
    font-size: 0.48rem;
    color: #fff;
    margin-left: 0.61rem;
    display: flex;
    align-items: center;
    position: relative;
    bottom: 0.08rem;
}
</style>
