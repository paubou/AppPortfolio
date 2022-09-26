<template>
  <div class="images">
    <a class="project-title">
      {{ content[current].title }}
    </a>
    <a class="informations">
      <Letterize>
        {{ content[current].informations }}
      </Letterize>
    </a>
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
          <img :data-src="require(`~/assets/${article.img}`)" class="swiper-lazy" :alt="article.title">
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
import Letterize from './Letterize.vue'
export default {
  components: { Letterize },
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
    const swiper = new Swiper(this.$refs.swiper, {
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: true,
      // loopedSlides: 3,
      initialSlide: 0,
      loadPrevNext: true,
      loadOnTransitionStart: true,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
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
      if (current < slidesLength) {
        this.$data.current = current
      }
    }
  }
}
</script>

<style lang="css" scoped>
.swiper {
  width: 100%;
  grid-column: 1/7;
  grid-row: 1;
  /* height: 100%; */
  margin: 1em 0 0 0 ;

}
.swiper-wrapper {
}
.swiper-slide {
  width: auto;
  align-items: center;
  justify-content: center;
  /* border-radius: 18px; */
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-content{
  height: 100% !important;
}

.swiper-slide img {
  height: auto;
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
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-thickness: 0.08em;
  text-underline-offset: 2px;
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
  grid-column: 6/7;
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
.swiper-wrapper{
  /* height: auto; */
}

  .images{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  .swiper{
    grid-column: 1/7;
    margin-top: 1em;
  }

.custom-swiper-button-prev {
  grid-row: 1;
  grid-column: 1/2;
  z-index: 100;
  display: none;
}

.custom-swiper-button-next {
  grid-row: 1;
  grid-column: 5/6;
  z-index: 100;
  display: none;
}

.project-title{
  line-height: 1;
  grid-column: 1/7;
  grid-row: 2;
  text-decoration-style: dotted;
  text-decoration-thickness: 0.09em;
  text-align: center;
  pointer-events: none;
  text-underline-offset: 4px;
}

.informations {
  text-decoration-style: solid;
  grid-column: 1/7;
  grid-row: 3;
  text-align: center;
  font-style: italic;
}

.swiper-slide {
  width: auto;
  /* top: 1.5em; */
}

.swiper-slide img{
  height: auto;
  width: 100%;
}

.swiper-pagination{
  grid-column: 1/7;
  text-align: center;

}
}
</style>
