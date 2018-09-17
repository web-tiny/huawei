<template>
  <div class="customerService" @click="callService">
    <img src="../assets/images/service.svg" alt="客服"><span>客服</span>
  </div>
</template>

<script>
import { call } from '../lib/common.js'
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
    callService () {
      call(96822)
    }
  },
  components: {}
}
</script>

<style scoped lang="postcss">
.customerService{
  position: absolute;
  bottom: 25px;
  left: 40%;
  font-family:'PingFangSC-Regular';

  img{
    height: 22px;
    width: 22px;
  }

  img,span {
    vertical-align: middle
  }
  span{
    font-size:15px;
    font-weight:400;
    color:rgba(155,155,155,1);
  }
}
</style>
