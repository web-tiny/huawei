<template>
  <div class="orderConfirm">
   <orderTitle :showCancelOrder="showCancelOrder">
     <h4 slot="title">订单确认</h4>
     <p slot="secTitle">订单完成后您的车费由企业统一支付</p>
   </orderTitle>

    <driverInfo>
     <span slot="carNum">沪A2345</span>
     <span slot="carType">出租车</span>
     <span slot="driverName">王师傅</span>
     <img slot="phone" src="../assets/images/phone.png" alt="司机电话" @click="callDriver"/>
   </driverInfo>

   <orderDetail :showPrice="showPrice" :isPreValue="isPreValue">
     <span slot="startTime">03-24 12:34</span>
     <span slot="startPlace">西区车站内</span>
     <span slot="endPlace">浦东国际机场</span>
     <span slot="price">￥123</span>
   </orderDetail>

   <div class='btn' @click="handleComplete">行程结束</div>
   <div class="footer">
     <p>如果您对费用有疑问，请在3天内联系客服</p>
     <p>如果您未对费用进行确认，系统将于7天后自动确认。</p>
     <div>
       <span>行程由异议,</span>
       <span @click="handleComplain">我要投诉</span>
     </div>
   </div>
   <customerService/>
  </div>
</template>

<script>
import { apiOrderInfo } from '../apis/orderInfo.js'
import { fixTime, call } from '../lib/common.js'
import customerService from '../components/customerService'
import orderDetail from '../components/order/orderDetail'
import driverInfo from '../components/order/driverInfo'
import orderTitle from '../components/order/orderTitle'

export default {
  props: {},
  components: { customerService,  orderDetail, driverInfo,  orderTitle },
  data () {
    return {
      isPreValue: '车费',
      showPrice: true, // 是否显示价格
      orderId: 1234, // 订单ID
      carNum: '', // 车牌号
      driverName: '', // 司机姓名
      phone: '', // 司机电话
      price:'', // 车费
      startPlace: '', // 起始地点
      endPlace: '', // 终点/用车时间
      startTime: '', // 起始时间/整租时段
      carType: '', // 车类型
      showCancelOrder: false // 是否显示取消订单按钮
    }
  },
  computed: {
  },
  created () {
    this.apiGetData()
  },
  mounted () {},
  watch: {},
  methods: {
    // 用户点击我要投诉
    handleComplain () {
      this.$router.push('/complain')
    },

    // 用户点击行程结束
    handleComplete () {
      this.$router.push('/home')
    },

    // 获取订单信息
    apiGetData () {
      const apiData = apiOrderInfo (this.orderId)
      // timestamp 后端拿到的时间戳
      let timestamp = new Date().valueOf()
      this.startTime = fixTime(timestamp)

      // this.carNum = apiData.carNum
      // this.driverName = apiData.driverName
      // this.phone = apiData.phone
      // this.price = apiData.price
      // this.startPlace = apiData.startPlace
      // this.endPlace = apiData.endPlace
      // this.startTime = apiData.startTime
      // this.carType = apiData.carType


      console.log('当前时间', fixTime(timestamp))
    },

    callDriver () {
      call(18748589067)
    }
  }
}
</script>

<style scoped lang="postcss">
.orderConfirm {
  width: 100%;
  height: 100%;
  background: #fff;
  font-family:'PingFangSC-Medium';
  
  >h4 {
    font-size:26px;
    font-weight:bold;
    margin-left: 24px;
    padding-top: 15px;
    color:rgba(52,52,52,1);
  }
  >p {
    font-size:14px;
    font-weight:400;
    margin-left: 24px;
    color:rgba(52,52,52,1);
  }
  .btn {
    width: 327px;
    height: 50px;
    font-size:17px;
    font-weight:500;
    text-align: center;
    line-height: 50px;
    border-radius:2px;
    margin: 30px auto 0;
    letter-spacing: 1.5px;
    color:rgba(255,255,255,1);
    background:rgba(69,71,86,1);
  }
  .footer{
    margin-top: 30px;
    p,span {
      font-size:13px;
      font-weight:400;
      text-align: center;
      color:rgba(144,144,144,1);
    }
    >div {
      text-align: center;
      >span:last-child {
        color:#4A90E2
      }
    }
  }
}
</style>


