<template>
  <div class="images">
    <div class="project-title">
      {{ content[current].title }}
    </div>
    <div class="informations">
      {{ content[current].informations }}
    </div>
    <div ref="swiper" class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div
          v-for="article in content"
          :key="article.slug"
          class="swiper-slide"
          :data-title=" article.title"
          :data-informations=" article.informations"
          data-caption="text caption one"
        >
          <img class="swiper-lazy" :data-src="require(`~/assets/${article.img}`)" alt="">
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
import { Swiper, Navigation, Pagination, EffectCards, Autoplay, Keyboard, Mousewheel, Lazy } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  props: {
    content: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      current: 0
    }
  },
  mounted () {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(this.$refs.swiper, {
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: true,
      // loopedSlides: 3,
      initialSlide: 0,
      loadPrevNext: true,
      // loadOnTransitionStart: true
      loop: false,
      slidesPerView: 1,
      // watchSlidesProgress: true,
      spaceBetween: 0,
      speed: 400,
      autoHeight: true,
      grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay, Keyboard, Mousewheel, Lazy],
      // Pagination if needed
      pagination: {
        el: this.$refs.swiperpagination,
        type: 'fraction',
        clickable: false
      },
      // Autoplay if needed
      // Navigation arrows if needed
      navigation: {
        nextEl: this.$refs.swipernext,
        prevEl: this.$refs.swiperprev
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },

      mousewheel: {
        invert: false,
        forceToAxis: true,
        sensitivity: 500,
        thresholdDelta: 10

      },
      on: {
        init (slider) {
          // const textContentTitle = slider.slides[slider.activeIndex].dataset.informations
          // alert(textContentTitle)
        }
      }
    })

    swiper.on('slideChange', this.onSlideChange)
  },
  methods: {
    onSlideChange (slider) {
      const current = slider.activeIndex
      const slidesLength = this.$props.content.length
      // const total = slider.params.loop
      //   ? Math.ceil((slidesLength - slider.loopedSlides * 2) / slider.params.slidesPerGroup)
      //   : slider.snapGrid.length

      // if (slider.params.loop) {
      //   current = Math.ceil(
      //     (slider.activeIndex - slider.loopedSlides) / slider.params.slidesPerGroup
      //   )
      //   console.log(current)
      //   if (current > slidesLength - 1 - slider.loopedSlides * 2) {
      //     current -= slidesLength - slider.loopedSlides * 2
      //   }
      //   console.log(current)
      //   if (current > total - 1) { current -= total }
      //   console.log(current)
      //   if (current < 0 && slider.params.paginationType !== 'bullets') { current = total + current }
      //   console.log(current)
      // } else if (typeof slider.snapIndex !== 'undefined') {
      //   current = slider.snapIndex
      // } else {
      //   current = slider.activeIndex || 0
      // }
      if (current < slidesLength) {
        this.$data.current = current
      }
      console.log(current, slider.activeIndex)

      // const textContentTitle = slider.slides[slider.activeIndex].dataset.title
      // const textContentInfos = slider.slides[slider.activeIndex].dataset.informations
      // console.log(textContentInfos + textContentTitle)
      // const project-title = $refs.project-title
      // const informations = $refs.informations
      // project-title.textContent = textContentTitle
      // informations.textContent = textContentInfos
    }
  }
}
</script>

<style lang="css" scoped>
.swiper {
  width: 100%;
  grid-column: 1/7;
  grid-row: 1;
  height: 100%;

}
.swiper-wrapper {
  width: 50%;
}
.swiper-slide {
  width: auto;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  top: 1em;
}

.swiper-content{
  height: 100% !important;
}

.swiper-slide img {
  height: 42vw;
  width: auto;
      }

.swiper-slide-visible,
.swiper-slide-next,
.swiper-slide-duplicate-prev,
.swiper-slide-duplicate,
.swiper-slide-duplicate-next{
   opacity: 0.5;
   transition: all 200ms ease;
}

.swiper-slide-active{
  opacity: 1;

}

.images{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.2em;
}

.project-title{
  grid-column: 3/7;
  grid-row: 1;
  pointer-events: none;
}

.informations {
  grid-column: 7/7;
  text-align: center;
  font-style: italic;
}

.custom-swiper-button-prev, .custom-swiper-button-next {
  position: relative;
opacity: 0;

}

.swiper-pagination{
  grid-row: 1;
  grid-column: 1/3;
  bottom:0px;
color: var(--randomcolor);
mix-blend-mode: difference;
z-index: 0;
}

.custom-swiper-button-prev {
  grid-row: 1;
  grid-column: 1/2;
  z-index: 100;
}

.custom-swiper-button-next {
  grid-row: 1;
  grid-column: 6/7
;
  z-index: 100;
}

.swiper-pagination{
  position: relative;
}
.swiper-slide:nth-child(1n) {
}

.project-title{
  position: relative;
z-index: 100;
color: var(--randomcolor);
z-index: 0;

}

.informations{
  font-weight: normal;
  color: var(--randomcolor);
  font-family: serif;
  mix-blend-mode: difference;
}

@media (max-width: 1024px) {
  .images{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  .swiper{
    grid-column: 1/7;
  }

.custom-swiper-button-prev {
  grid-row: 1;
  grid-column: 1/2;
  z-index: 100;
  background: orange;
}

.custom-swiper-button-next {
  grid-row: 1;
  grid-column: 5/6;
  z-index: 100;
  background: orange;
}

.project-title{
  grid-column: 1/7;
  grid-row: 2;
  text-align: center;
  pointer-events: none;
}

.informations {
    grid-column: 1/7;
  grid-row: 3;
  text-align: center;
  font-style: italic;
}

.swiper-slide {
  width: auto;
  top: 2em;
}

.swiper-slide img{
  height: auto;
  width: 100%;
}

.swiper-pagination{
  grid-column: 1/4;

}

}
</style>
