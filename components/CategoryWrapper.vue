<template>
  <div class="cat">
    <div
      class="title"
      :class="{ active: isActive }"
      @click="
        changeComponent()"
    >
      <a>{{ title }}</a>
      {{ id }}
    </div>
    <div :class="{ active: isActive }" class="content">
      <swiperImg
        :articles="articles"
      />
    </div>
  </div>
</template>

<script>
import SwiperImg from './swiperImg.vue'
export default {
  components: { SwiperImg },
  props: {
    title: {
      type: String,
      default: 'Il...'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    articles: {
      type: Array,
      default: null
    }

  },
  data () {
    return {
    }
  },
  methods: {
    changeComponent () {
      this.$emit('listenButtonEvent')
    }
  }
}

</script>

<style>
.title.active{
  color:brown;
}

</style>
