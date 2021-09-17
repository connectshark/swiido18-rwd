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
  <Section
    :title="'生活，注入一口甜'"
    :text="'我們懂沒有甜味的日子是什麼模樣，因為種種原因我們戒糖，但沒有甜味的日子將會少了無數精彩，而恰到好處的甜，正是生活中最美好的點綴！'"
    :holder="'OUR QUALITY'"
    :imgUrl="s3"
  />
  <Ad :url="ad1"/>
  <Ad :url="menu"/>
  <FootGroup />
</template>

<script>
import Section from '../components/section.vue'
import Banner from '../components/banner.vue'
import CardGroup from '../components/cardGroup.vue'
import FootGroup from '../components/footGroup.vue'
import Ad from '../components/ad.vue'
import s1 from '../assets/img/section-1-img.png'
import s2 from '../assets/img/section-2-img.png'
import s3 from '../assets/img/section-3-img.png'
import ad1 from '../assets/img/db.jpg'
import menu from '../assets/img/menu.jpg'
export default {
  components: {
    Banner,
    Section,
    CardGroup,
    Ad,
    FootGroup
  },
  setup () {
    return {
      s1,
      s2,
      s3,
      ad1,
      menu
    }
  }
}
</script>

<style lang="scss" scoped>

</style>