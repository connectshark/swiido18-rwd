<template>
<section class="section reverse">
  <div class="content">
    <h3>走糖，不走甜</h3>
    <p class="text">「走糖」取自廣東話中的不加糖，想給你們不加糖但仍然有點甜的生活，以零負擔的甜點綴你的人生百味。</p>
    <p class="holder">OUR STORY</p>
  </div>
  <figure class="place">
    <img src="../assets/img/section-1-img.png" alt="img">
  </figure>
</section>
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
img{
  width: 100%;
  vertical-align: middle;
}
.section{
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  @include mobile {
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    grid-template-columns: 2fr 3fr;
  }
  .content{
    box-sizing: border-box;
    color: #fff;
    background-color: #5595BD;
    padding:0 20px;
    @include mobile{
      padding: 10px;
    }
    h3{
      font-size: 30px;
      line-height: 3;
      font-weight: 600;
    }
    .text{
      font-weight: 200;
      font-size: 20px;
      line-height: 1.4;
    }
    .holder{
      font-size: 30px;
      line-height: 2;
      font-weight: bold;
      opacity: .7;
    }
  }
}
.reverse{
}
</style>