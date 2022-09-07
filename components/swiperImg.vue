<template>
  <div class="images">
    <div id="status" class="status" />
    <div id="informations" class="informations" />
    <div ref="swiper" class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div
          v-for="article in articles"
          :key="article"
          class="swiper-slide"
          :data-title=" article.title"
          :data-informations=" article.informations"
          data-caption="text caption one"
        >
          <img :src="require(`~/assets/${article.img}`)" alt="">
        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div ref="swiperpagination" class="swiper-pagination" />
    <!-- If navigation buttons are needed -->
    <div ref="swiperprev" class="custom-swiper-button-prev">
      &lt;
    </div>
    <div ref="swipernext" class="custom-swiper-button-next">
      &gt;
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  props: {
    articles: {
      type: Array,
      default: null
    }
  },
  mounted () {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(this.$refs.swiper, {

      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      loop: false,
      effect: 'fade',
      grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      // Pagination if needed
      pagination: {
        el: this.$refs.swiperpagination,
        type: 'fraction',
        clickable: true
      },
      // Autoplay if needed
      autoplay: {
        delay: 1500
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: this.$refs.swipernext,
        prevEl: this.$refs.swiperprev
      }
      // on: {
      //   init () {
      //     const textContentTitle = swiper.slides[swiper.activeIndex].dataset.title
      //     const textContentInfos = swiper.slides[swiper.activeIndex].dataset.informations
      //     const status = document.getElementById('status')
      //     const informations = document.getElementById('informations')
      //     status.textContent = textContentTitle
      //     informations.textContent = textContentInfos
      //   }
      // }
    })
    // you can use different options later
    swiper.on('activeIndexChange', (swiper) => {
      // console.log(swiper)
    })

    swiper.on('slideChange', function (slider) {
      const textContentTitle = slider.slides[slider.activeIndex].dataset.title
      const textContentInfos = slider.slides[slider.activeIndex].dataset.informations
      console.log(textContentInfos)
      const status = document.getElementById('status')
      const informations = document.getElementById('informations')
      status.textContent = textContentTitle
      informations.textContent = textContentInfos
    })
  }
}
</script>

<style lang="css" scoped>
.swiper {
  width: 100%;
  height: 100%;
  grid-column: 1/5;
  grid-row: 1;
}
.swiper-slide {
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.images{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.2em;
}

.status{
  grid-column: 2/5;
  grid-row: 1;
  pointer-events: none;
}

.informations {
  grid-column: 5/5;
  grid-row: 1;
  text-align: center;
  font-style: italic;
}

.custom-swiper-button-prev, .custom-swiper-button-next {
  background: red;
  position: relative;
  top: 0;

}

.swiper-pagination{
  position: relative;
}
.swiper-slide:nth-child(1n) {
}

#status{
  position: relative;
z-index: 100;
mix-blend-mode: difference;
color: white;
font-weight: bold;

}

#informations{
  font-weight: normal;
  color: brown;
  font-family: serif;
}
</style>
