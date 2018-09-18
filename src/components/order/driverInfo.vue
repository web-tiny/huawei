<template>
  <div class="driverInfo">
    <div class="left">
    <img src="../../assets/images/titphoto.png" alt="司机头像">
    <ul>
      <li>
        <slot name="carNum"></slot>
        <span>5.0</span>
      </li>
      <li>
        <slot name="carType"></slot>
        <span></span>
        <slot name="driverName"></slot>
      </li>
    </ul>
    </div>
    <div class="right"><slot name="phone"></slot></div>
  </div>
</template>

<script>
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
  },
  components: {}
}
</script>

<style scoped lang="postcss">
  .driverInfo {
    height: 93px;
    width: 355px;
    display: flex;
    font-size: 16px;
    border-radius:4px;
    align-items: center;
    margin: 22px auto;
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
            font-family:'PingFangSC-Medium';
          }
        }
        >li {
          >span{
            vertical-align: middle
          }
        }
        >li:last-child {
          >span {
            font-size:14px;
            font-weight:400;
            color:rgba(52,52,52,0.7);
            font-family:'PingFangSC-Regular';
          }
          >span:nth-of-type(2) {
            width:2px;
            height:13px;
            margin: 0 6px;
            display: inline-block;
            border-radius: 3px;
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
</style>
