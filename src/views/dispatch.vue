<template>
  <div class="dispatch">
   <orderTitle :showCancelOrder="showCancelOrder">
     <h4 slot="title">正在为您安排车辆...</h4>
     <p slot="secTitle">预约时间前1小时可收到车辆信息</p>
   </orderTitle>
   
   <orderDetail :showPrice="showPrice">
     <span slot="startTime">03-24 12:34</span>
     <span slot="startPlace">西区车站内</span>
     <span slot="endPlace">浦东国际机场</span>
   </orderDetail>
   <customerService/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { apiOrderInfo, apiOrderStatus} from '../apis/orderInfo.js'
import customerService from '../components/customerService'
import orderDetail from '../components/order/orderDetail'
import orderTitle from '../components/order/orderTitle'

export default {
  props: {},
  components: { customerService, orderDetail, orderTitle },
  data () {
    return {
      orderId: 1234,
      timer: null, // 定时器
      startTime: '', // 开始时间或者整租时长
      startPlace: '', // 开始地点
      endPlace: '', // 结束地点或者用车时间
      showPrice: false, // 是否显示价格
      showCancelOrder: true // 是否显示取消按钮
    }
  },
  computed: {
  },
  created () {
    this.getOrderInfo()
    this.checkOrderStatus()
  },
  mounted () {},
  beforeDestroy () {
    // 页面销毁的时候清除定时器
    clearInterval(this.timer)
  },
  watch: {},
  methods: {

    // 定时检查订单状态
    checkOrderStatus () {
      this.timer = setInterval( () => {
        console.log(1)
        // 定时请求订单状态，如果已经派到车则跳转到订单信息页面
        this.getOrderStatus(this.orderId)
        let status = 1
        if (status === 1) {
          clearInterval(this.timer)
          this.$router.push('/orderInfo')
        }
      }, 5000)
    },

    // 检查订单状态的api
    getOrderStatus (orderId) {
      const apiData = apiOrderStatus(orderId)
      const status = apiData.status
      return status && status
    },

    // 请求页面信息的api
    getOrderInfo () {
      const apiData = apiOrderInfo(this.orderId)

      this.startTime = apiData.startTime
      this.startPlace = apiData.startPlace
      this.endPlace = apiData.endPlace
    }
  }
}
</script>

<style scoped lang="postcss">
.dispatch{
  height: 100%;
  width: 100%;
  background: #fff;

  ul{
    font-size: 16px;
    margin-top: 32px;

    >li:not(:first-child){
      margin-top: 16px;
    }
    >li {
      .flag {
        display: inline-block;
        height: 8px;
        width:8px;
        border-radius: 50%;
      }
      span,img {
        vertical-align: middle
      }
      span:first-child{
        margin-right: 15px;
      }
      img{
        height: 11px;
        width: 11px;
        margin-right: 15px;
      }
    }
    >li:nth-of-type(2) {
      .flag{
        background-color: #00B8E3;
      }
    }
    >li:nth-of-type(3) {
      .flag{
        background-color: orange
      }
    }
  }
}
</style>


