<template>
<div class="login">
    <div class="login-wrap">
        <img class="login-wheel" src="@/assets/images/login-wheel.png" alt="">
        <div class="login-progress"></div>
        <div class="login-progress-percent"></div>
    </div>
</div>
</template>

<script>
export default {

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
}
.login-wheel{
    width: 3.81rem;
    height: 3.81rem;
}
</style>
