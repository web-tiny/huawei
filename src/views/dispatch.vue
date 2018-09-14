<template>
  <div class="dispatch">
   <h4>正在为您安排车辆...</h4>
   <p>预约时间前1小时可收到车辆信息</p>
   <ul>
     <li>
       <span v-if="type === 0" class="flag"></span>
       <span>03-24 12:34</span>
     </li>
     <li>
       <span class="flag"></span>
       <span>徐汇区吴中东路西区车站</span>
     </li>
     <li>
       <span v-if="true" class="flag"></span>
       <span v-else  class="flag"></span>
       <span>浦东国际机场</span>
     </li>
   </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {},
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
  },
  mounted () {},
  watch: {},
  methods: {},
  components: {}
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
        height: 6px;
        width:6px;
        border-radius: 50%;
      }
      span {
        vertical-align: middle
      }
      span:last-child{
        margin-left: 15px;
      }
    }
    >li:nth-of-type(2) {
      .flag{
        background-color: #00B8E3;
      }
    }
    >li:nth-of-type(3) {
      span:nth-of-type(1){
        background-color: orange
      }
    }
  }
}
</style>


