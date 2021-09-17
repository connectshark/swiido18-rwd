<template>
  <Banner/>
  <Section/>
  <h2 class="title">第一頁由此開始</h2>
</template>

<script>
import Section from '../components/section.vue'
import Banner from '../components/banner.vue'
export default {
  components: {
    Banner,
    Section
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>