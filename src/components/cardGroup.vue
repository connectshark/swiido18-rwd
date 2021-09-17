<template>
<div class="card-group">
  <div class="card" v-for="item in cards" :key="item">
    <div class="front">
      <div class="center">
        <h4>{{item.title}}</h4>
        <h5>{{item.en}}</h5>
        <div class="line"></div>
        <p v-for="line in item.lines" :key="line">{{line}}</p>
      </div>
    </div>
    <img :src="item.url" alt="card">
  </div>
</div>
</template>

<script>
import card1 from '../assets/img/c-1.png'
import card2 from '../assets/img/c-2.png'
import card3 from '../assets/img/c-3.png'
import card4 from '../assets/img/c-4.png'
import card5 from '../assets/img/c-5.png'
export default {
  setup () {
    return {
      cards: [
        {
          url: card1,
          title: '黃金零卡糖',
          en: 'Sugar',
          lines: ['純天然代糖', '萃取自羅漢果中', '零卡無熱量']
        },
        {
          url: card2,
          title: '桃膠',
          en: 'Peach resin',
          lines: ['桃樹上凝結出似琥珀的結晶', '能降脂嫩膚', '養顏養胃']
        },
        {
          url: card3,
          title: '紐西蘭牛奶',
          en: 'Milk',
          lines: ['我們的鮮奶來自於', '全世界最天然', '純淨的紐西蘭']
        },
        {
          url: card4,
          title: '茶葉',
          en: 'Tea leaf',
          lines: ['純淨的水源', '精準的溫度', '沖泡出每口好茶']
        },
        {
          url: card5,
          title: '豆花',
          en: 'Toufu pudding',
          lines: ['堅持純手工每日現煮', '使用天然鹽滷', '口感滑嫩', '豆香濃郁']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
@import '../assets/scss/card.scss';
img{
  width: 100%;
  vertical-align: middle;
}
.card-group{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 10px;
  column-gap: 0;
  width: 60%;
  margin: auto;
  @include mobile {
    width: 95%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    row-gap: 0;
    column-gap: 10px;
  }
  .card{
    position: relative;
    .front{
      position: absolute;
      width: 100%;
      height: 100%;
      transition: background .3s;
      &::before{
        content: '';
        width: 0;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .center{
        transition: transform .3s, opacity .3s;
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        h4, h5{
          font-size: 20px;
          line-height: 1.3;
        }
        .line{
          width: 100%;
          height: 1px;
          background-color: #fff;
          margin: 15px 0;
          border-radius: 1px;
        }
        p{
          font-size: 16px;
          line-height: 1.4;
          font-weight: 200;
        }
      }
    }
    .front{
      background-color: #00000055;
      .center{
        transform: translateY(0);
        opacity: 1;
      }
    }
    @include mobile{
    .front{
      background-color: transparent;
      .center{
        transform: translateY(20px);
        opacity: 0;
      }
    }
      &:hover{
        .front{
          background-color: #00000055;
          .center{
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>