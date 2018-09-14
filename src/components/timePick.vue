<template>
  <div class="mask">
    <div class="timePickFrame">
      <div class="pickTopBar">
        <div class="topBarBoxFlex">
          <span style="color: #9B9B9B;" @click="closeTimePick">取消</span>
          <span style="color: #343434;">用车时间</span>
          <span style="color: #00B8E3;">确定</span>
        </div>
      </div>
      <div class="timeSpace">
        <div class="dayFrame" id="day" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
          <div class="daySelect">
            <div v-for="index in 2" :key="index" class="dayCell">
              <div style="margin-right: 10px">{{ index === 1 ? date.today.month : date.tomorrow.month }}月{{ index === 1 ? date.today.day : date.tomorrow.day }}日</div>
              <div>{{ index === 1 ? '今天' : '明天' }}</div>
            </div>
          </div>
        </div>
        <div class="hourFrame" id="hour" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"></div>
        <div class="minuteFrame" id="minute" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  beforeMount () {
    this.date.today = this.getDay()
    this.date.tomorrow = this.getDay(1)
  },
  data () {
    return {
      touchTarget: null,
      date: {
        today: '',
        tomorrow: ''
      }
    }
  },
  methods: {
    closeTimePick: function () {
      this.$store.dispatch('setTimePickIsShow', false)
    },
    touchstart: event => {
      console.log('start', event)
      const domId = event.target.id
    },
    touchmove: event => {
      console.log('move', event)
    },
    touchend: event => {
      console.log('end', event)
    },
    getDay(number) {
      number = number || 0
      const today = new Date()
      let nowTime = today.getTime()
      const ms = 24 * 3600 * 1000 * number
      today.setTime(parseInt(nowTime + ms))

      const month = (today.getMonth() + 1).toString()
      const day = today.getDate().toString()

      return { month, day }
    }
  }
}
</script>

<style lang="postcss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.timePickFrame {
  height: 243px;;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
}
.pickTopBar {
  width: 100%;
  height: 44px;
  border-bottom: 0.8px solid #CDCED3;
  position: relative;
}
.topBarBoxFlex {
  position: absolute;
  top: 0;
  left: 25px;
  right: 25px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.topBarBoxFlex span {
  font-size: 15px;
}
.timeSpace {
  width: 100%;
  height: 198px;
  display: flex;
  justify-content:flex-start;
}
.dayFrame {
  width: 157px;
  height: 198px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.daySelect {
  width: 157px;
  height: 30px;
  overflow: auto;
}
.dayCell {
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.hourFrame {
  width: 69px;
  height: 198px;
}
.minuteFrame {
  width: 61px;
  height: 198px;
}
.timePlus {
  display: flex;
  justify-content: flex-end;
}
</style>
