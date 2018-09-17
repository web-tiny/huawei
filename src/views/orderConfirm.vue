<template>
  <div class="orderConfirm">
   <h4>订单确认</h4>
   <p>订单完成后您的车费由企业统一支付</p>
   <div class="driverInfo">
     <div class="left">
      <img src="../assets/images/titphoto.png" alt="司机头像">
      <ul>
        <li>
          <span>沪A2345</span>
          <span>5.0</span>
        </li>
        <li>
          <span>出租车</span>
          <span></span>
          <span>王师傅</span>
        </li>
      </ul>
     </div>
     <div class="right" @click="callDriver"><img src="../assets/images/phone.png" alt="司机电话"></div>
   </div>
   <ul>
     <li>
       <div>
         <img src="../assets/images/icon_time.svg" v-if="type === 0">
         <span>{{ startTime }}</span>
       </div>
       <div>
         <span>车费</span>
         <span>￥121</span>
       </div>
     </li>
     <li>
       <span></span>
       <span>西区汽车站</span>
     </li>
     <li>
       <img src="../assets/images/icon_time.svg" v-if="type === 1">
       <span v-else class="date"></span>
       <span>8月9日 今天 15：00</span>
     </li>
   </ul>
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

export default {
  props: {},
  data () {
    return {
      orderId: 1234, // 订单ID
      carNum: '', // 车牌号
      driverName: '', // 司机姓名
      phone: '', // 司机电话
      price:'', // 车费
      startPlace: '', // 起始地点
      endPlace: '', // 终点/用车时间
      startTime: '', // 起始时间/整租时段
      carType: '', // 车类型
    }
  },
  computed: {
    type () {
      return this.$store.getters.type;
    }
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
  },
  components: {
    customerService
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
  .driverInfo {
    height: 93px;
    width: 355px;
    display: flex;
    font-size: 16px;
    border-radius:4px;
    align-items: center;
    margin: 18px auto 18px;
    justify-content: space-between;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(0,0,0,0.09);

    .left {
      display: flex;
      margin-left: 17px;
      align-items: center;

      >img {
        width: 52px;
        height: 52px;
        margin-right: 9px;
      }

      >ul {
        >li {
          span {
            vertical-align: middle;
          }
        }
        >li:first-child {
          >span:first-child {
            font-size:18px;
            font-weight:bolder;
            color:rgba(52,52,52,1);
          }
          >span:last-child {
            width: 14px;
            height: 14px;
            color:#fff;
            font-size: 9px;
            border-radius: 50%;
            background: orange;
            border:3px solid orange;
          }
        }
        >li:last-child {
          >span {
            font-size:14px;
            font-weight:400;
            vertical-align: middle;
            color:rgba(52,52,52,0.7);
          }
          >span:nth-of-type(2) {
            width:2px;
            height:13px;
            margin: 0 6px;
            display: inline-block;
            border-radius: 2px;
            background:  rgba(151,151,151,0.46);
          }
        }
      }
    }
    .right{
      margin-right: 25px;
      img{
        height: 35px;
        width: 35px;
      }    
    }
  }
  >ul {
    font-size: 16px;
    padding-left: 24px;
    padding-right: 24px;
    color:rgba(52,52,52,1);

    >li:not(:first-child) {
      margin-top: 16px;
    }
    >li {
      span {
        vertical-align: middle;
      }
      img{
        height: 11px;
        width: 11px;
        margin-right: 15px;
      }
    }
    >li:first-child {
      display: flex;
      justify-content: space-between;
      >div:first-child {
        >span:first-child {
          margin-right: 13px;
        }
      }
      >div:last-child {
        >span:first-child {
          font-size: 14px;
          color:rgba(119,119,119,1);
        }
        >span:last-child {
          font-size:15px;
          font-weight:bolder;
          letter-spacing: -1px;
          color:rgba(69,69,69,1);
        }
      }
    }
    li:nth-of-type(2),li:nth-of-type(3) {
      >span:first-child {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 15px;
        display: inline-block;
      }
    }
    li:nth-of-type(2) {
      >span:first-child {        
        background: rgba(0,184,227,1);
      }
    }
    li:nth-of-type(3) {
      >span:first-child {
        background:rgba(255,167,0,1);
      }
      .date{
        height: 8px;
        width: 8px;
        margin-right: 15px;
        display: inline-block;
      }
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
  }
  .footer{
    margin-top: 37px;
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


