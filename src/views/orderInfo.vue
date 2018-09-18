<template>
  <div class="orderInfo">
   <orderTitle :showCancelOrder="showCancelOrder">
     <h4 slot="title">订单信息</h4>
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
   <div class='btn' @click="handleGotOn">我已上车</div>
   <customerService/>
  </div>
</template>

<script>
import { fixTime, call } from '../lib/common.js'
import { apiOrderInfo } from '../apis/orderInfo.js'
import customerService from '../components/customerService'
import orderDetail from '../components/order/orderDetail'
import driverInfo from '../components/order/driverInfo'
import orderTitle from '../components/order/orderTitle'

export default {
  props: {},
  components: { customerService , orderDetail, driverInfo, orderTitle },
  data () {
    return {
      isPreValue: '预估价',
      showPrice: true, // 是否显示价格
      orderId: 1234, // 订单ID
      carNum: '', // 车牌号
      driverName: '', // 司机姓名
      phone: '', // 司机电话
      preValue:'', // 预估价
      startPlace: '', // 起始地点
      endPlace: '', // 终点/用车时间
      startTime: '', // 起始时间/整租时段
      carType: '', // 车类型
      showCancelOrder: true // 是否显示取消订单按钮
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
    // 用户点击我已上车
    handleGotOn () {
      this.$router.push('/orderConfirm')
    },

    // 请求订单信息api
    apiGetData () {
      const apiData = apiOrderInfo (this.orderId)
      // timestamp 后端拿到的时间戳
      let timestamp = new Date().valueOf()
      this.startTime = fixTime(timestamp)

      // this.carNum = apiData.carNum
      // this.driverName = apiData.driverName
      // this.phone = apiData.phone
      // this.preValue = apiData.preValue
      // this.startPlace = apiData.startPlace
      // this.endPlace = apiData.endPlace
      // this.startTime = apiData.startTime
      // this.carType = apiData.carType

      // 30分钟后的时间戳
      let timeout = parseInt(timestamp + 1000 * 60 * 30)/1000;
      console.log(timeout)

      // 30分钟后默认去到订单确认页面
      setTimeout(() => {
        this.$router.push('/orderConfirm')
      }, timeout)


      console.log('当前时间', fixTime(timestamp))
      console.log('半小时后', fixTime(timeout))
    },
    callDriver () {
      call(18748589067)
    }
  }
}
</script>

<style scoped lang="postcss">
.orderInfo {
  width: 100%;
  height: 100%;
  background: #fff;

  .title {
    display: flex;
    padding-top:15px;
    padding-left:24px;
    padding-right:24px;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size:26px;
      font-weight:bold;
      color:rgba(52,52,52,1);
      font-family:'PingFangSC-Medium';
    }

    p {
      font-size:14px;
      font-weight:400;
      color:rgba(135,135,135,1);
      font-family:'PingFangSC-Regular';
    }
  }
  .btn {
    width: 327px;
    height: 50px;
    font-size:17px;
    font-weight:500;
    text-align: center;
    line-height: 50px;
    border-radius:2px;
    margin: 49px auto 0;
    letter-spacing: 1.5px;
    color:rgba(255,255,255,1);
    background:rgba(69,71,86,1);
    font-family:'PingFangSC-Medium';
  }
}
</style>


