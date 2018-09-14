<template>
  <div class="formFrame">
    <div class="formCell">
      <div class="cellPoint">
        <div class="point" style="background: #00B8E3"></div>
      </div>
      <div class="cellInput textOverflow" :class="locationTxtStyle">
        {{currLocation}}
        <Geolocation v-if="getPosition"></Geolocation>
      </div>
    </div>
    <div class="formCell">
      <div class="cellPoint">
        <div class="point" style="background: #FFA700"></div>
      </div>
      <div class="cellInput"></div>
    </div>
    <div class="formCell">
      <div class="cellPoint">
        <img src="../../assets/images/time@3x.png" class="timePoint">
      </div>
      <div class="cellInput" :class="timePickTxtStyle" @click="showTimePick">
        {{timeResult}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Geolocation from '../../components/geolocation'

export default {
  computed: {
    ...mapGetters(['currLocation', 'timeResult']),
    locationTxtStyle: function () {
      switch (this.currLocation) {
        case '正在获取当前定位': return 'inputTextHandling'
        default: return 'inputTextOn'
      }
    },
    timePickTxtStyle: function () {
      switch (this.timeResult) {
        case '请选择用车时间': return 'inputTextDefault'
      }
    }
  },
  components: { Geolocation },
  data () {
    return {
      getPosition: true
    }
  },
  methods: {
    showTimePick () {
      this.$store.dispatch('setTimePickIsShow', true)
    }
  }
}
</script>

<style lang="postcss" scoped>
.formFrame {
  position: absolute;
  top: 0;
  left: 16px;
  bottom: 16px;
  right: 16px;
}
.formCell {
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
}
.cellPoint {
  width: 18px;
  height: 54px;
  display: flex;
  position: relative;
  align-items: center;
}
.point {
  width: 6px;
  height: 6px;
  border-radius: 6px;
}
.timePoint {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 21px;
  left: -2px;
}
.cellInput {
  width: 293px;
  height: 53px;
  font-size: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 0.8px solid #E5E5E5;
  -webkit-tap-highlight-color: transparent;
}
.inputTextOn {
  color: #454545;
}
.inputTextHandling {
  color: #F17700;
}
.inputTextDefault {
  color: #BDBDBF;
}
</style>
