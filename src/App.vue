<template>
  <Head/>
  <router-view></router-view>
</template>

<script>
import Head from './components/head.vue'
export default {
  components: {
    Head
  },
  setup () {
    return {
      title: 'Hello'
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
  text-align: center;
  background-color: #FFFBEB;
  min-height: 100vh;
  padding: 0 0 20px;
}
</style>
