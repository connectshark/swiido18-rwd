<template>
<footer class="foot-group">
  <div class="logo">
    <figure>
      <img src="https://fakeimg.pl/193x81/" alt="logo">
    </figure>
    <p>
      <a href="mailto:bobhus394@gmail.com">Email:bobhus394@gmail.com</a>
    </p>
    <p>
      <a href="https://nosegates.com">Copyright © 2021 nosegates All rights reserved.</a>
    </p>
  </div>
  <div class="detail">
    <div class="store">
      <h5 class="title">長安店</h5>
      <div class="phone">
        <h6>電話</h6>
        <p>
          <a href="javascript:;">02-8772-0380</a>
        </p>
      </div>
    </div>
  </div>
  <div class="social-group">
    <a href="javascript:;" class="social-item" v-for="item in socials" :key="item">
      <i class='bx' :class="item" ></i>
    </a>
    <a href="https://github.com/connectshark/swiido18-rwd-nav-bar" target="_blank" class="social-item">
      <i class="bxl-github bx"></i>
    </a>
  </div>
</footer>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
.foot-group{
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr;
  @include mobile{
    grid-template-columns: 300px auto 100px;
    grid-template-rows: 1fr;
  }
}
</style>