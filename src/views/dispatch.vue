<template>
  <div class="dispatch">
   <h4>正在为您安排车辆...</h4>
   <p>预约时间前1小时可收到车辆信息</p>
   <ul>
     <li>
       <img src="../assets/images/icon_time.svg" v-if="type === 0">
       <span>03-24 12:34</span>
     </li>
     <li>
       <span class="flag"></span>
       <span>徐汇区吴中东路西区车站</span>
     </li>
     <li>
       <img src="../assets/images/icon_time.svg" v-if="type === 1">
       <span v-else  class="flag"></span>
       <span>浦东国际机场</span>
     </li>
   </ul>
   <customerService/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { apiOrderInfo, apiOrderStatus} from '../apis/orderInfo.js'
import customerService from '../components/customerService'
export default {
  props: {},
  data () {
    return {
      orderId: 1234,
      timer: null, // 定时器
      startTime: '', // 开始时间或者整租时长
      startPlace: '', // 开始地点
      endPlace: '' // 结束地点或者用车时间
    }
  },
  computed: {
    type () {
      return this.$store.getters.type;
    }
  },
  created () {
  },
  mounted () {
    this.checkOrderStatus()
  },
  beforeDestroy () {
    // 页面销毁的时候关闭定时器
    clearInterval(this.timer)
  },
  watch: {},
  methods: {
    checkOrderStatus () {
      this.timer = setInterval( () => {
        console.log(1)
        // 定时请求订单状态，如果已经派到车则跳转到订单信息页面
        this.getOrderStatus(this.orderId)
        let status = 1
        if (status === 1) {
          this.$router.push('/orderInfo')
          clearInterval(this.timer)
        }
      }, 5000)
    },
    // 请求订单状态的api
    getOrderStatus (orderId) {
      const apiData = apiOrderStatus(orderId)
      const status = apiData.status
      return status && status
    },
    // 请求安排车俩你个信息的api
    getOrderInfo () {
      const apiData = apiOrderInfo(this.orderId)
      this.startTime = apiData.startTime
      this.startPlace = apiData.startPlace
      this.endPlace = apiData.endPlace
    }
  },
  components: { customerService }
}
</script>

<style scoped lang="postcss">
.dispatch{
  height: 100%;
  width: 100%;
  padding-top: 18px;
  padding-left: 18px;
  background: #fff;
  color:rgba(52,52,52,1);

  h4{
    font-size: 26px;
    font-weight: bolder;
  }

  p{
    font-size: 14px;
    margin-top: 2px;
  }

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


