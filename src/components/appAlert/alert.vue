/*
 * @Author: KevinRen
 * @Date: 2018-05-24 16:58:14
 * @LastEditors: KevinRen
 * @LastEditTime: 2018-05-29 16:31:32
 * @Description: mail:tosaicore@gmail.com
 */

<template>
  <div class="mask" v-if="show">
    <div class="alertFrame">
      <div class="msg" v-html="msg"></div>
      <div class="buttomFrame" v-if="singleButton">
          <div class="singleButton actived" @click.stop="confirm">{{confirmTxt}}</div>
      </div>
      <div class="buttomFrame" v-else>
        <div class="button unactived" @click.stop="confirm">{{confirmTxt}}</div>
        <div class="button actived" @click.stop="closeAlert">{{cancelTxt}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  >.alertFrame {
    width: 289px;
    height: 168px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    >.msg {
      width: 100%;
      height: 114px;
      font-size: 18px;
      color: #484848;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    >.buttomFrame {
      width: 100%;
      height: 54px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      >.singleButton {
        width: 266px;
        height: 39px;
        background-color: #31B5E6;
        color: #ffffff;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
      }
      >.button {
        width: 132px;
        height: 37px;
        background: rgba(255, 255, 255, 1);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        border-radius: 20px;
      }
      >.unactived {
        border: 1px solid #00BCDA;
        color: #00BCDA;
      }
      >.actived {
        background-color: #00BCDA;
        border: 1px solid #00BCDA;
        color: #ffffff;
      }
    }
  }
}
</style>
