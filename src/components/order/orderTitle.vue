<template>
  <div class="orderTitle">
   <div>
     <slot name="title"></slot>
     <slot name="secTitle"></slot>
   </div>
   <cancelOrder v-show="showCancelOrder"/>
  </div>
</template>

<script>
import cancelOrder from './cancelOrder'

export default {
  props: ['showCancelOrder'],
  data () {
    return {
      data: 'components'
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {},
  components: { cancelOrder }
}
</script>

<style scoped lang="postcss">
.orderTitle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:rgba(52,52,52,1);
  padding: 24px 24px 0 24px;

  h4{
    font-size: 26px;
    font-weight: bolder;
  }
  p{
    font-size: 14px;
    margin-top: 2px;
  }
}
</style>
