<template>
  <div class="cat">
    <div
      class="title"
      :class="{ active: isActive }"
      @click="
        changeComponent()"
    >
      <a href="#temp">{{ title }}</a>
    </div>
    <div :class="{ active: isActive }" class="content">
      <component :is="layout" :content="content" />
    </div>
  </div>
</template>

<script>
import Bio from './Bio.vue'
import Images from './Images.vue'
export default {
  components: { Images, Bio },
  props: {
    title: {
      type: String,
      default: 'Il...'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    content: {
    }

  },
  data () {
    return {
    }
  },
  computed: {
    layout () {
      return this.content.layout ?? 'Images'
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

a{
  text-decoration: none;
  color: var(--text)
}

</style>
