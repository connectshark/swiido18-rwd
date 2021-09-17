<template>
<figure class="ad">
  <img @dragstart.prevent :src="url" alt="menu">
</figure>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
.ad{
  margin-bottom: 20px;
  img{
    width: 100%;
    vertical-align: middle;
  }
  @include mobile{
    width: 95%;
    margin: 0 auto 20px;
  }
}
</style>