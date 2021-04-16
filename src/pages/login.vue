<template>
<div class="login">
    <div class="login-wrap">
        <div class="login-wheel">
            <img src="@/assets/images/login-wheel.png" alt="">
        </div>
        <div class="login-progress"></div>
        <div class="login-progress-percent">{{percent}}%</div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            percent: '40'
        }
    }
}
</script>

<style>
.login{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-image: linear-gradient(#FDC16B, #E75918);
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-wrap{
    width: 4.95rem;
    height: 5.87rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.login-wheel{
    width: 100%;
    height: 4.27rem;
    background: url('../assets/images/login-wheel-bottom.png') no-repeat;
    background-size: 3.27rem 0.89rem;
    background-position: 50% 100%;
    display: flex;
    justify-content: center;
}

.login-wheel img{
    width: 3.81rem;
    height: 3.81rem;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.login-wheel img {
    transform: rotate(360deg);
    animation: rotation 8s linear infinite;
    
}

.login-progress{
    width: 100%;
    height: 0.55rem;
    border-radius: 0.55rem;
    background-color: #F24900;
}

.login-progress-percent{
    color: #FFF9FA;
    font-size: 0.47rem;
    font-weight: 700;
}
</style>
