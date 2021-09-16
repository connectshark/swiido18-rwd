<template>
<header class="header">
  <router-link to="/" class="logo">
    <img src="https://fakeimg.pl/100x45/" alt="logo">
  </router-link>
  <ul class="nav-group" :class="{ mobile: menu }">
    <li class="nav-item" v-for="item in nav" :key="item">
      <a href="javascript:;" class="link">{{item}}</a>
    </li>
  </ul>
  <div class="social-group">
    <a href="javascript:;" class="social-item" v-for="item in socials" :key="item">
      <i class='bx' :class="item" ></i>
    </a>
    <a href="https://github.com/connectshark/swiido18-rwd-nav-bar" target="_blank" class="social-item">
      <i class="bxl-github bx"></i>
    </a>
    <div class="menu" :class="{ 'menu-close': menu }" @click="menu = !menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const menu = ref(false)
    return {
      nav: ['品質講究', '飲品菜單', '最新消息' , '品牌精神'],
      socials: ['bxl-facebook-square', 'bxl-instagram-alt'],
      menu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
.header{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffffaa;
  padding: 15px 10px;
  box-sizing: border-box;
  position: relative;
  transition: padding .3s;
  @include mobile{
    padding: 10px 5px;
  }
  .nav-group{
    display: none;
    background-color: transparent;
    transition: background .3s;
    @include mobile{
      display: block;
    }
    .nav-item{
      display: inline-block;
      margin: 0 20px;
      .link{
        font-weight: bolder;
      }
      &:hover{
        .link{
          color: #0074BC77;
        }
      }
      .link{
        transition: color .3s, font .3s;
        font-size: 18px;
        text-decoration: none;
        color: #0074BC;
      }
    }
  }
  .mobile{
    @media(max-width: 768px){
      position: absolute;
      display: block;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      .nav-item{
        display: block;
        text-align: center;
        .link{
          display: block;
          font-size: 24px;
          line-height: 1.9;
        }
      }
    }
  }
  .social-group{
    .social-item{
      vertical-align: middle;
      margin: 0 5px;
      display: inline-block;
      color: #0074BC;
      font-size: 40px;
      transition: color .3s;
      &:hover{
        color: #0074BC77;
      }
    }
    .menu{
      flex-shrink: 0;
      width: 30px;
      height: 44px;
      position: relative;
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      @include mobile{
        display: none;
      }
      span{
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background-color: #0074BC;
        transition: transform .3s, top .3s, opacity .3s;
        left: 0;
        &:nth-child(1){
          top: 9px;
          transform: rotate(0deg);
        }
        &:nth-child(2){
          top: 20px;
          opacity: 1;
          transform: rotate(0deg);
        }
        &:nth-child(3){
          top: 31px;
          transform: rotate(0deg);
        }
      }
    }
    .menu-close{
      span{
        &:nth-child(1){
          top: 20px;
          transform: rotate(45deg);
        }
        &:nth-child(2){
          opacity: 0;
        }
        &:nth-child(3){
          top: 20px;
          transform: rotate(135deg);
        }
      }
    }
  }
}
</style>