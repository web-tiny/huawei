<template>
    <div class="home" :style="{ width: `${this.$root.screenWidth - 32}px` }">
      <div class="tabBar">
        <div class="tabFrame">
          <div class="tabCell"
            v-for="(item, index) in tabs"
            :key="index"
            :class="getCellState(index)"
            @click="tabClick(index)"
          >
            {{item}}
          </div>
        </div>

        <div class="tabLineFrame">
          <div class="lineCell">
            <div class="row" :class="{ rowOn: type === 0 }"></div>
          </div>
          <div class="lineCell">
            <div class="row" :class="{ rowOn: type > 0 }"></div>
          </div>
        </div>

      </div>
      <div class="main"></div>
      <div class="button" :class="getButtonState">呼叫商务型+豪华型</div>
    </div>
</template>

<script>
// {{currLocation}}
// <Geolocation v-if="getPosition"></Geolocation>
import { mapGetters } from 'vuex'
import Geolocation from '../components/geolocation'

export default {
  beforeCreate () {
    console.log()
  },
  data () {
    return {
      tabs: ['专车', '包车'],
      getPosition: false,
      buttonState: false
    }
  },
  mounted () {
    this.getPosition = true
  },
  components: { Geolocation },
  computed: {
    ...mapGetters(['type', 'currLocation']),
    getButtonState: function () {
      return this.buttonState ? 'buttonOn' : 'buttonOff'
    }
  },
  methods: {
    getCellState: function (index) {
      if (index === 0) {
        return this.type === 0 ? 'cellOn' : 'cellOff'
      } else {
        return this.type > 0 ? 'cellOn' : 'cellOff'
      }
    },
    tabClick: function (index) {
      this.$store.dispatch('setType', index)
    }
  }
}
</script>

<style lang="postcss" scoped>
.home {
  margin: 0 16px;
  margin-top: 22px;
  min-height: 357px;

  .tabBar {
    width: 100%;
    height: 38px;

    .tabFrame {
      width: 152px;
      height: 36px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .tabCell {
        width: 50%;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        -webkit-tap-highlight-color: transparent;
      }
      .cellOn {
        color: #343434;
      }
      .cellOff {
        color: #9B9B9B;
      }
    }
    .tabLineFrame {
      width: 152px;
      height: 2px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .lineCell {
        width: 76px;
        height: 2px;
        display: flex;
        align-items: center;
        justify-content: center;

        .row {
          width: 16px;
          height: 2px;
        }
        .rowOn {
          background: #646464;
        }
      }
    }
  }
  .main {
    width: 100%;
    height: 269px;
    background: white;
  }
  .button {
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
  .buttonOn {
    color: white;
    background: #454756;
  }
  .buttonOff {
    color: #C2C3C8;
    background: #898B94;
  }
}
</style>
