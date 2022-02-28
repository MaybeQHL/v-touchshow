
<template>
  <div class="page">
    <h1>v-touchshow</h1>
    <m-panel title="上下滑动">
      <div class="block block1" v-touchshow:swipeup="onSwipeup" v-touchshow:swipedown="onSwipedown">
        <div class="block-top">
          <img width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="block-btm">
          <img width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
    </m-panel>
    <m-panel title="双指缩放和放大">
      <div class="block block2" v-touchshow:pinchin="onPinchin" v-touchshow:pinchout="onPinchout">
        <div class="block-top">
          <img width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="block-btm">
          <img width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
    </m-panel>
  </div>
</template>

<script lang="ts" setup>
import MPanel from './components/MPanel.vue'
import { Callback } from '../';


const onSwipeup: Callback = (e, el) => {
  el.style.transform = "translateY(-30vw)"
}
const onSwipedown: Callback = (e, el) => {

  el.style.transform = "translateY(0vw)"
}
const onPinchin: Callback = (e, el) => {
  el.style.transform = "scale(1)"
}
const onPinchout: Callback = (e, el) => {
  el.style.transform = "scale(0.5)"
}



</script>
<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.block {
  // position: fixed;
  // left: 0;
  // bottom: -30vw;
  width: 80vw;
  height: 60vw;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  transition: transform 0.3s ease-in-out; // 设置过渡动画
}
.block1 {
  background-color: orange;
}
.block2 {
  background-color: green;
}
</style>