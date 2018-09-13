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
      <div class="msg" v-html="content"></div>
      <div class="alertButton" @click="closeAlert">知道了</div>
    </div>
  </div>
</template>

<style lang="postcss">
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  >.alertFrame {
    position: relative;
    width: 289px;
    height: 142px;
    background: white;
    border-radius: 4px;

    >.msg {
      width: 229px;
      height: 96px;
      font-size: 16px;
      color:rgba(72, 72, 72, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height:24px;
      padding: 0 30px;
    }
    >.alertButton {
      width: 273px;
      height: 38px;
      background:rgba(49, 181, 230, 1);
      border-radius: 4px;
      margin: 0 8px;
      font-size: 15px;
      line-height: 21px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>


