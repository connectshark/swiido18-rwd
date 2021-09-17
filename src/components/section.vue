<template>
<section class="section" :class="{ reverse: reverse }">
  <div class="content-group">
    <div class="content">
      <h3>{{title}}</h3>
      <p class="text">{{text}}</p>
    </div>
    <p class="holder">{{holder}}</p>
  </div>
  <figure class="place">
    <img @dragstart.prevent :src="imgUrl" alt="img">
  </figure>
</section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    holder: {
      type: String
    },
    imgUrl: {
      type: String
    },
    reverse: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
img{
  width: 100%;
  vertical-align: middle;
}
.section{
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 0 auto 20px;
  @include mobile {
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    grid-template-columns: 2fr 3fr;
    width: 100%;
  }
  &:hover{
    .place{
      img{
        transform: scale(1.2);
      }
    }
  }
  .content-group{
    box-sizing: border-box;
    position: relative;
    color: #fff;
    background-color: #5595BD;
    padding: 30px 20px;
    &::before{
      content: '';
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .content{
      display: inline-block;
      vertical-align: middle;
    }
    @include mobile{
      padding: 10px;
    }
    h3{
      font-size: 30px;
      line-height: 3;
      font-weight: 500;
    }
    .text{
      font-weight: 200;
      font-size: 16px;
      line-height: 1.4;
      width: 80%;
      margin: 0 auto 20px;
    }
    .holder{
      position: absolute;
      font-size: 40px;
      line-height: 30px;
      font-weight: bold;
      opacity: .7;
      left: 0;
      bottom: 0;
      width: 100%;
      letter-spacing: 1vw;
    }
  }
  .place{
    order: -1;
    overflow: hidden;
    img{
      transform: scale(1);
      transition: transform .3s;
    }
    @include mobile {
      order: 1;
    }
  }
}
.reverse{
  @include mobile {
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    grid-template-columns: 3fr 2fr;
  }
  .content-group{
    background-color: #E6A079;
  }
  .place{
    order: -1;
  }
}
</style>