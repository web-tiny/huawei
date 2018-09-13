<template>
  <div class="toast" v-if="show">{{msg}}</div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 6px 16px;
  font-size: 14px;
  color: #ccc;
  background-color: rgba(37, 38, 45, 0.9);
  border-radius: 4px;
}
</style>

