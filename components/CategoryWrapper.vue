<template>
  <div class="wrapper">
    <div
      :class="{ active: isActive }"
      @click="toggle"
    >
      <a class="rien">
        {{ title }}
      </a>

      <div v-show="show" :class="{ active: isActive }" class="content">
        <img :src="require(`~/assets/${ body }`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: String,
    body: String
  },
  data () {
    return {
      isActive: false,
      show: true
    }
  },
  methods: {
    myFiler () {

    },
    toggle () {
      console.log('ping')
      this.isActive = !this.isActive
    }
  }
}

</script>

<style>

</style>
