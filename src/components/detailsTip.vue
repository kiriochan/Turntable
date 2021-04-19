<template>
  <div class="details-tip">
    <div class="details-main">
      <div class="popup-close-btn" @click="closePopup"></div>
      <img src="../assets/images/detail-title.png" alt="" />
      <div class="details-text">
        <div
          class="details-text-li"
          v-for="(item, index) in detailsList[prizeType]"
          :key="index"
        >
          <p class="details-text-title">{{ detailsListTitle[index] }}</p>
          <p class="details-text-main">{{ item }}</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prizeType: {
      type: Number,
      required: true
    },
<<<<<<< HEAD
    couponCode: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      detailsList: [
        [
          '100元优惠券',
          '--',
          '详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容',
          '1.使用流程使用流程使用流程\n2.使用流程使用流程使用流程使用流程\n3.asasas',
          '1.使用流使用说明使用说明使用说明\n2.使用说明使用说明\n3.使用说明'
        ],
        [
          '亚朵酒店258元券包 258元券包',
          '--',
          '亚朵酒店258元优惠券⼤礼包，其中包含：30元优惠券1张+20元优惠券1张+40元优惠券1张（满800可⽤）+80元优惠券1张（满1200可⽤）+延时券1张；',
          '1.⽤户参与活动后获得亚朵酒店⼤礼包券码；\n2.复制链接⾄浏览器 https://wechat.yaduo.com/H5/memberExchange/#/，输⼊⼿机号，验证码，券码即可领取；\n3.下载亚朵酒店APP查看并使⽤。',
          '1.兑换码有效期：领取兑换码后的2⼩时内完成兑换，否则过期作废；\n2.兑换后的有效期：优惠券、权益券有效期为兑换领取之后三个⽉；\n3.每间夜可使⽤⼀张酒店优惠券，可叠加会员折扣使⽤。每间夜最多使⽤两张延时退房券，每张延时退房券有效时间为两⼩时；\n4.优惠券适⽤于全国亚朵⻔店，使⽤时提前在“亚朵APP/亚朵⽣活微信公众号/亚朵⼩程序”中预订房间，提交订单时选择使⽤即可；'
        ]
      ],
      detailsListTitle: ['权益名', '券码', '详情', '使用流程', '使用说明']
    }
  },
  created () {
    this.detailsList[this.prizeType][1] = this.couponCode
  },
  methods: {
    closePopup () {
      this.$emit('close-popup')
=======
    data(){
        return{
            detailsList: [
                [
                    '100元优惠券',
                    '--',
                    '详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容',
                    '1.使用流程使用流程使用流程\n2.使用流程使用流程使用流程使用流程\n3.asasas',
                    '1.使用流使用说明使用说明使用说明\n2.使用说明使用说明\n3.使用说明'
                ],
                [
                    '亚朵酒店258元券包 258元券包',
                    '--',
                    '亚朵酒店258元优惠券⼤礼包，其中包含：30元优惠券1张+20元优惠券1张+40元优惠券1张（满800可⽤）+80元优惠券1张（满1200可⽤）+延时券1张；',
                    '1.⽤户参与活动后获得亚朵酒店⼤礼包券码；\n2.复制链接⾄浏览器 https://wechat.yaduo.com/H5/memberExchange/#/，输⼊⼿机号，验证码，券码即可领取；\n3.下载亚朵酒店APP查看并使⽤。',
                    '1.兑换码有效期：领取兑换码后的2⼩时内完成兑换，否则过期作废；\n2.兑换后的有效期：优惠券、权益券有效期为兑换领取之后三个⽉；\n3.每间夜可使⽤⼀张酒店优惠券，可叠加会员折扣使⽤。每间夜最多使⽤两张延时退房券，每张延时退房券有效时间为两⼩时；\n4.优惠券适⽤于全国亚朵⻔店，使⽤时提前在“亚朵APP/亚朵⽣活微信公众号/亚朵⼩程序”中预订房间，提交订单时选择使⽤即可；'
                ]
            ],
            detailsListTitle:['权益名','券码','详情','使用流程','使用说明']
        }
    },
    created(){
        this.detailsList[this.prizeType][1] = this.couponCode;
        // 下面是图片预加载
        function init () {
            let imgs = [require('../assets/images/detail-bg.png')];
            imgs.forEach(value => {
                let image = new Image();
                image.src = value;
            })
        }
        init();
    },
    methods:{
        closePopup(){
            this.$emit('close-popup');
        }
>>>>>>> 250c64be6dbf983211750aa29a07d79661366832
    }
  }
}
</script>

<style scoped>
.details-tip {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}
.details-main {
  width: 100%;
  height: 13.95rem;
  background: url('../assets/images/detail-bg.png') no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0.25rem 0.87rem 1.32rem 1.12rem;
  position: relative;
}
.popup-close-btn {
  width: 22px;
  height: 22px;
  background: url('../assets/images/close-fff.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: -1.09rem;
  right: 1.11rem;
}
.details-main img {
  width: 2.88rem;
  height: 0.83rem;
  margin-left: 50%;
  position: relative;
  left: -1.57rem;
  margin-bottom: 0.73rem;
}
.details-text {
  height: 10.79rem;
  padding-right: 0.61rem;
  overflow-y: auto;
}
.details-text::-webkit-scrollbar {
  width: 0.27rem;
  border-radius: 0.27rem;
  position: fixed;
  right: 0;
}
.details-text::-webkit-scrollbar-track {
  background-color: #e75918;
  border-radius: 0.27rem;
}
.details-text::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 0.27rem;
}
.details-text-title {
  font-family: 'SourceHanSansCN-Bold';
  font-size: 0.4rem;
  font-weight: 600;
  color: #e75918;
  letter-spacing: 0.05rem;
  line-height: 0.7rem;
}
.details-text-main {
  font-size: 0.35rem;
  color: #444;
  letter-spacing: 1px;
  word-wrap: break-word;
  white-space: pre-line;
}
</style>
