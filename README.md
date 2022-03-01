
# v-touchshow

 基于[any-touch](https://github.com/any86/any-touch)手势库封装的Vue(2 & 3)的指令

<p align="left">
如果觉得还不错, star一下项目,
 也可以在网页底部捐赠给作者一杯咖啡钱,Thanks♪(･ω･)ﾉ。

</p>


 <p align="center" >
    <img src="https://img.shields.io/npm/v/@maybecode/v-touchshow?style=flat-square" alt="npm version"  style="margin-right:5px;" />
    <img src="https://img.shields.io/npm/dt/@maybecode/v-touchshow.svg?style=flat-square&color=#4fc08d" alt="downloads" style="margin-right:5px;"   />
    <img src="https://img.shields.io/jsdelivr/npm/hm/@maybecode/v-touchshow?style=flat-square" alt="Jsdelivr Hits" style="margin-right:5px;"  >

  <img src="https://img.shields.io/github/stars/maybeQHL/v-touchshow?style=flat-square&logo=GitHub" alt="star" style="margin-right:5px;"  >
   <img src="https://gitee.com/null_639_5368/v-touchshow/badge/star.svg?style=flat-square" alt="star">
</p>

## 安装
### Vue3
```
yarn add @maybecode/v-touchshow
```

### Vue2
```
yarn add @maybecode/v-touchshow @vue/composition-api
```

## 注册
### Vue3
```
import { createApp } from 'vue';
import VTouchshow from '@maybecode/v-touchshow'

const app = createApp();

app.use(VTouchshow);
```
### Vue2
```
import Vue from 'vue';
import VTouchshow from '@maybecode/v-touchshow'

Vue.use(VTouchshow);
```
### 在线演示

[Demo](http://null_639_5368.gitee.io/v-touchshow)


## 具体使用

## 手势识别器支持事件对照表

| 识别器     | 事件名                                                            | 说明                                                  |
| ---------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| **tap**    | tap                                                               | 单击                                                  |
| **press**  | press / pressup                                                   | 按压 / 松开                                           |
| **pan**    | pan / panstart / panmove / panend /panup/pandown/panright/panleft | 拖拽 / 拖拽开始 / 拖拽进行中 / 拖拽结束/ 上下左右滑动 |
| **swipe**  | swipe / swipeup / swipedown / swiperight / swipeleft              | 快划 / 不同方向快划                                   |
| **pinch**  | pinch / pinchstart / pinchmove / pinchend / pinchin /pinchout     | 缩放 / 缩放开始 / 缩放进行中 / 缩放结束 / 放大 / 缩小 |
| **rotate** | rotate / rotatestart / rotatemove / rotateend                     | 旋转 / 旋转开始 / 旋转进行中 / 旋转结束               |

### 1. 设置过渡动画
```
<style>

.block{
    transition: transform 0.3s ease-in-out; // 设置过渡动画
}
</style>
```
### 2. 编写模板代码
```
<template>
<div
    class="block"
    v-touchshow:swipeup="onSwipeup"
>
</div>
</template>
```


### 3. 处理事件回调
```
<script lang="ts" setup>
import { Callback } from '@maybecode/v-touchshow';

const onSwipeup: Callback = (e, el) => {
    el.style.transform = "translateY(-30vw)"
}
</script>

```
### 移动端尽量使用 tap 代理 click
在移动端 touchstart 比 click 先触发, 所以 touchstart 阶段的 preventDefault 会阻止 click 触发, 恰恰 any-touch 默认在 touchstart 中使用了preventDefault, 用来阻止了浏览器默认事件的触发,比如 click 和页面滚动.

如果移动端非要使用 click 做如下设置

```const at = new AnyTouch(el, { preventDefault: false });```
## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                        | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |


## 赞助
> 优先处理问题，以及定制化方案
> 
<img src="https://common-1251804846.cos.ap-guangzhou.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220224134022.jpg" width=200 height=300>
<img src="https://common-1251804846.cos.ap-guangzhou.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220224134028.jpg" width=200 height=300>

## License

[MIT](./LICENSE)