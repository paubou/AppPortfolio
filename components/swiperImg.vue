<template>
  <div>
    <div v-for="article in articles" :key="article" class="images">
      {{ article.title }}
      <img :src="require(`~/assets/${article.img}`)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object
    }
  }
}
</script>

<style>

</style>
