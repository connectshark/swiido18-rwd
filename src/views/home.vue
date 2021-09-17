<template>
  <Banner/>
  <Section
    :title="'走糖，不走甜'"
    :text="'「走糖」取自廣東話中的不加糖，想給你們不加糖但仍然有點甜的生活，以零負擔的甜點綴你的人生百味。'"
    :holder="'OUR STORY'"
    :imgUrl="s1"
  />
  <Section
    :title="'這個甜，我可以'"
    :text="'「走糖」用心嚴選食材，替你把關健康與美味！使用天然黃金零卡糖，帶給所有人零卡無負擔的體驗。享受美味不再有設限，和我們一起重新定義生命中的甜！'"
    :holder="'OUR SPIRIT'"
    :imgUrl="s2"
    :reverse="true"
  />
  <CardGroup/>
</template>

<script>
import Section from '../components/section.vue'
import Banner from '../components/banner.vue'
import CardGroup from '../components/cardGroup.vue'
import s1 from '../assets/img/section-1-img.png'
import s2 from '../assets/img/section-2-img.png'
export default {
  components: {
    Banner,
    Section,
    CardGroup
  },
  setup () {
    return {
      s1,
      s2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>