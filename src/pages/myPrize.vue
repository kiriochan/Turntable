<template>
  <div class="my-prize">
    <div class="prize-list">
      <div class="list-item">
        <div class="item-img"></div>
        <div class="item-info">
          <div class="prize-name">
            奖品名称奖品名称奖品名称奖品名称奖品名称奖品名称
          </div>
          <p class="prize-time">
            中奖时间: 2021-03-14 23:59
          </p>
        </div>
        <div class="go">去查看</div>
      </div>
      <div class="list-item">
        <div class="item-img"></div>
        <div class="item-info">
          <div class="prize-name">
            卡券名称卡券名称卡券名称卡券名称卡券名称卡券名称
          </div>
          <p class="prize-time">
            中奖时间: 2021-03-14 23:59
          </p>
        </div>
        <div class="go">去查看</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.my-prize {
  width: 100%;
  height: 739px;
  background: url('../assets/images/bg-myprize.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.prize-list {
  position: absolute;
  top: 110px;
  left: 15px;
  right: 15px;
}
.list-item {
  height: 119px;
  background: url('../assets/images/bg-listitem.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
}
.item-img {
  flex: 2;
  border-radius: 5px;
  margin: 13px 14px 16px 14px;
  background-color: #cfcfcf;
}
.item-info {
  flex: 3;
}
.prize-name {
  font-size: 14px;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 6px;
}
.prize-time {
  white-space: nowrap;
  color: #969696ff;
  font-size: 12px;
  transform: scale(0.83);
  margin-left: -11px;
}
.go {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
}
</style>
