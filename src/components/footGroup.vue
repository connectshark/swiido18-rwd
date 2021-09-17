<template>
<footer class="foot-group">
  <div class="logo-group">
    <div class="logo">
      <figure class="logo-place">
        <img src="https://fakeimg.pl/193x81/" alt="logo">
      </figure>
      <p class="contact">
        <a href="mailto:bobhus394@gmail.com">Email:bobhus394@gmail.com</a>
      </p>
      <p class="contact">
        <a href="https://nosegates.com">Copyright © 2021 nosegates All rights reserved.</a>
      </p>
    </div>
  </div>
  <div class="detail">
    <div class="store" v-for="item in stores" :key="item.name">
      <h5 class="title">{{item.name}}</h5>
      <div class="row">
        <span class="name">電話</span>
        <a class="content" href="javascript:;">{{item.tel}}</a>
      </div>
      <div class="row">
        <span class="name">店址</span>
        <a class="content" href="javascript:;">{{item.adr}}</a>
      </div>
    </div>
  </div>
  <div class="social-group">
    <a href="javascript:;" class="social-item" v-for="item in socials" :key="item">
      <i class='bx' :class="item" ></i>
    </a>
    <a href="https://github.com/connectshark/swiido18-rwd" target="_blank" class="social-item">
      <i class="bxl-github bx"></i>
    </a>
  </div>
</footer>
</template>

<script>
export default {
  setup () {
    return {
      socials: ['bxl-facebook-square', 'bxl-instagram-alt'],
      stores: [
        {
          name: '長安店',
          tel: '02-7729-7595',
          adr: '台北市中山區長安東路二段258號'
        },
        {
          name: '萬隆示範店',
          tel: '02-7729-7595',
          adr: '台北市文山區羅斯福路五段211巷18號'
        }
      ]
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
  width: 95%;
  margin: auto;
  @include mobile{
    width: 100%;
    grid-template-columns: 300px auto 100px;
    grid-template-rows: 1fr;
  }
  .logo-group{
    &::before{
      content: '';
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .logo{
      display: inline-block;
      vertical-align: middle;
      .logo-place{
        width: 193px;
        margin: auto;
        img{
          width: 100%;
          vertical-align: middle;
        }
      }
      .contact{
        a{
          font-size: 14px;
          line-height: 2;
          color: #0074BC;
          text-decoration: none;
        }
      }
    }
  }
  
  .detail{
    order: 2;
    @include mobile{
      order: initial;
    }
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    .store{
      text-align: left;
      display: inline-block;
      width: 90%;
      margin: 20px auto;
      @include mobile{
        width: 45%;
        margin: 2.5%;
      }
      .title{
        color: #E4925F;
        font-size: 20px;
        line-height: 2.2;
        font-weight: 600;
      }
      .row{
        line-height: 30px;
        &:not(:last-child){
          margin-bottom: 20px;
        }
        .name{
          display: inline-block;
          color: #0074BC;
          margin: 0 30px 0 0;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: #333;
            top: 0;
            left: 150%;
          }
        }
        .content{
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  .social-group{
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    @include mobile{
      flex-flow: column nowrap;
    }
    .social-item{
      font-size: 40px;
      color: #0074BC;
      margin: 0 10px;
      @include mobile{
        font-size: 30px;
        margin: 10px 0;
      }
    }
  }
}
</style>