<template>
  <ul class="orderDetail">
    <li>
      <div>
        <img src="../../assets/images/icon_time.svg" v-if="type === 0"><slot name="startTime"></slot>
      </div>
      <div v-show="showPrice">
        <span>{{isPreValue}}</span>
        <slot name="price"></slot>
      </div>
    </li>
    <li>
      <span class="flag"></span>
      <slot name="startPlace"></slot>
    </li>
    <li>
      <img src="../../assets/images/icon_time.svg" v-if="type === 1">
      <span v-else  class="flag"></span><slot name="endPlace"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['showPrice', 'isPreValue'],
  data () {
    return {
      data: 'components'
    }
  },
  computed: {
    type () {
      return this.$store.getters.type;
    }
  },
  created () {
    this.show()
  },
  mounted () {},
  watch: {},
  methods: {
    show () {
      console.log(this.showPrice)
    }
  },
  components: {}
}
</script>

<style scoped lang="postcss">
.orderDetail {
    font-size: 16px;
    color:rgba(52,52,52,1);
    margin-left: 24px;
    margin-right: 24px;
    
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
          font-family:'PingFangSC-Medium';
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
</style>
