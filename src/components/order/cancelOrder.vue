<template>
  <div class="cancelOrder" @click="handleCancelOrder">取消订单</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {},
  data () {
    return {
      data: 'components'
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    ...mapActions(['cancelOrder']),

    // 用户点击取消订单
    handleCancelOrder () {
      this.$alert({
        msg: '司机接单后乘客取消一天内最多5次，超过5次当日不可下单',
        cancelTxt: '取消',
        confirmTxt: '确定',
        // confirmTxt: '知道了',
        // type: 'single',
        onConfirm: this.onConfirm
      })
    },

    // 用户点击蒙层的确定按钮，发送一条action
    onConfirm () {
      this.cancelOrder(this.orderId)
    },
  },
  components: {}
}
</script>

<style scoped lang="postcss">
.cancelOrder{
  font-size:14px;
  font-weight:400;
  color:rgba(135,135,135,1);
  font-family:'PingFangSC-Regular';
}
</style>
