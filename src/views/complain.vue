<template>
  <div class="complain">
    <p>用车过程中遇到什么问题？</p>
    <ul>
      <li :class="[bad? active: noactive]">
        <input type="checkbox" id="bad" v-model="bad">
        <label for="bad">司机态度恶劣</label>
      </li>
      <li :class="[detour? active: noactive]">
        <input type="checkbox" id="detour" v-model="detour">
        <label for="detour">司机绕路</label>
      </li>
      <li :class="[money? active: noactive]">
        <input type="checkbox" id="money" v-model="money">
        <label for="money">提前进行计费</label>
      </li>
      <li :class="[tip? active: noactive]">
        <input type="checkbox" id="tip" v-model="tip">
        <label for="tip">停车费，高速费和过桥费等附加费有异议</label>
      </li>
      <li>
        <textarea v-model="otherQuestion" placeholder="其他遇到的问题"></textarea>
      </li>
    </ul>
    <div class="footer">
      <div>
        <button @click="handleBackClick">返回</button>
        <button @click="handleSubmit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '../lib/common.js'
import { apiSubmitComplain } from '../apis/orderInfo.js'

export default {
  props: {},
  data () {
    return {
      bad: '',
      tip: '',
      money: '',
      detour: '',
      active: 'active',
      otherQuestion: '',
      noactive: 'noactive'
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    // 用户点击返回
    handleBackClick () {
      this.$router.push('/orderConfirm')
    },

    // 提交 投诉问题
    handleSubmit () {
      this.isEmpty() && this.apiSubmit()
    },

    // 验证 是否有已经选择提交的内容
    isEmpty () {
      if (this.bad || this.detour || this.money || this.tip || this.otherQuestion) {
        return true
      } else {
        this.$toast({msg:'请选择或填写您要投诉的内容'})
        return false
      }
    },

    // 提交投诉接口
    apiSubmit () {
      this.complainContent()
      const requestData = {
        bad: this.bad,
        detour: this.detour,
        money: this.money,
        tip: this.tip,
        otherQuestion: this.otherQuestion
      }
      console.log('投诉的内容：', request(requestData))

      const apiData = apiSubmitComplain(request(requestData))
      const success = apiData.status

      if (success && success ===1) {
        this.$toast({msg:'投诉成功'})
      }
      this.$toast({msg:'投诉成功'})
    },

    // 选中就加上相应的内容
    complainContent () {
      this.bad && (this.bad = '司机态度恶劣')
      this.detour && (this.detour = '司机绕路')
      this.money && (this.money = '提前进行计费')
      this.tip && (this.tip = '停车费，高速费和过桥费等附加费有异议')     
    }
  },
  components: {}
}
</script>

<style scoped lang="postcss">
.complain {
  width: 100%;
  height: 100%;
  background: #fff;
  font-family:'PingFangSC-Medium';

  >p {
    font-size:16px;
    font-weight:bolder;
    color:rgba(52,52,52,1);
    padding: 26px 0 26px 18px;
  }
  >ul {
    >li {
      width: 328px;
      height: 46px;
      margin: 0 auto;
      border-radius:4px;
      position: relative;
      color:rgba(69,69,69,1);

      input {
        width: 0;
        visibility: hidden;
      }
      label {
        top: 0;
        left: 16px;
        height: 46px;
        width: 312px;
        font-size: 14px;
        font-weight:400;
        line-height: 46px;
        position: absolute;
        display: inline-block;
        color:rgba(69,69,69,1);
      }
    }
    >li:not(:first-child) {
      margin-top: 16px;
    }
    >li:last-child {
      height: 109px;
      overflow: hidden;
      border: 1.3px solid #DCDCDC;
      
      textarea {
        outline: 0;
        margin:10px;
        border: none;
        resize: none;
        overflow: auto;
        color: #DCDCDC;
        min-width: 100%;
        min-height: 100%;
      }
      textarea:-moz-placeholder{
        color:#DCDCDC;
      }
      textarea::-webkit-input-placeholder {
        color:#DCDCDC;
      }
      textarea:-ms-input-placeholder {
        color:#DCDCDC;
      }
    }
  }
  .footer {
    width: 100%;
    margin-top: 60px;
    >div {
      display: flex;
      justify-content: space-around;
      button {
        outline: 0;
        width:148px;
        height:48px;
        font-size: 16px;
        border-radius:24px;
        letter-spacing: 2px;
      }
      >button:first-child {
        color:#00BCDA;
        background: #fff;
        border:1px solid rgba(0,188,218,1);
      }
      >button:last-child {
        color:#fff;
        background:rgba(0,188,218,1);
      }
    }
  }
}
.active {
  border: 1.3px solid #00BCDA;
}
.noactive {
  border: 1.3px solid #DCDCDC;
}
</style>
