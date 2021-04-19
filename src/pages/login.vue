<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-wheel">
        <img src="@/assets/images/login-wheel.png" alt="" />
      </div>
      <div class="login-progress">
        <div
          class="loadingShow"
          :style="{ width: this.loadingWidth + '%' }"
        ></div>
      </div>
      <div class="login-progress-percent">{{ loadingWidth }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loadingWidth: 10
    }
  },
  mounted () {
    const timer = setInterval(() => {
      if (this.loadingWidth <= 98) {
        this.loadingWidth += 1
      }
    }, 150)
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer)
    })
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image: linear-gradient(#fdc16b, #e75918);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap {
  width: 4.95rem;
  height: 5.87rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login-wheel {
  width: 100%;
  height: 4.27rem;
  background: url('../assets/images/login-wheel-bottom.png') no-repeat;
  background-size: 3.27rem 0.89rem;
  background-position: 50% 100%;
  display: flex;
  justify-content: center;
}

.login-wheel img {
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

.login-progress {
  width: 100%;
  height: 0.55rem;
  border-radius: 0.55rem;
  background-color: #f24900;
}
/* 进度条 */
.loadingShow {
  width: 10%;
  height: 100%;
  border-radius: 0.55rem;
  background-image: linear-gradient(to bottom, #fee78aff, #ffbe3aff);
}
.login-progress-percent {
  color: #fff9fa;
  font-size: 0.47rem;
  font-weight: 700;
}
</style>
