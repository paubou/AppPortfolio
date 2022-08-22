<template>
  <div class="container">
    <a href="https://github.com/pbouigue/AppPortfolio">link to gh repo</a>
    <div
      v-for="(filteredArticles, categoryKey) in groupedCategories"
      :key="categoryKey"
      class="l"
    >
      {{ categoryKey }}
      <!-- <div v-for="article in filteredArticles" :key="article.slug"> -->
      <CategoryWrapper
        v-for="article in filteredArticles"
        :key="article.slug"
        :title="article.title"
        :body="article.img"
        @click="a"
      />
      </CategoryWrapper>
    </div>
  </div>
</template>

<script>
import CategoryWrapper from '../components/CategoryWrapper.vue'
export default {
  components: { CategoryWrapper },
  async asyncData ({ $content }) {
    const articles = await $content('', { deep: true })
      .only(['title', 'description', 'img', 'slug', 'cat', 'dir'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { articles }
  },
  data () {
    return {
      colors: [
        { ping: 'color: red' },
        { ping: 'color: orange' }
      ],
      isActive: false,
      show: true
    }
  },
  computed: {
    groupedCategories () {
      return this.articles.reduce((finalObject, obj) => {
        const directory = obj.dir
        finalObject[directory] ?? (finalObject[directory] = [])
        finalObject[directory].push(obj)
        return finalObject
      }, {})
    }
  },
  methods: {
    a () {
      alert('aeiou')
      console.log('test')
    }
  }
}

</script>

<style>
body{
  font-family:sans-serif;
  font-weight: normal;
  color: rgb(189, 183, 107);
  background-color:rgb(240, 240, 240);
  font-size: 1.25rem;
line-height: 1.25rem;

}

a{
  font-weight: normal;
  font-size: 1em;
  margin: 0;
}

.active>a{
  color:brown;
}

p{
  margin:0;
}
.container{
  display: grid;
  grid-template-columns: repeat(10,auto);
  grid-gap: 0 1em;
}

.l{
  grid-column: 1;
}

.r{
  grid-column: 2/4;
  grid-row: 1;
}

a:hover{
  cursor: pointer;
}

.wrapper{
    overflow: hidden;
    max-height: 5000px;

  }
.content.active{
  max-height: 5000px;
   transition-property: width, max-height;
  transition-duration: 400ms, 1s;
  transition-timing-function: cubic-bezier(0.305, 0.000, 0.000, 1.015);
  transition-delay: 0s, 400ms;
  /* transition: width 700ms cubic-bezier(0.305, 0.000, 0.000, 1.015), height 2s; custom */
  width: 20vw;
}

.content{
  color: blue;
  width: 0px;
  max-height: 0;
  transition-property: width, max-height;
  transition-timing-function: cubic-bezier(0.305, 0.000, 0.000, 1.015);
  transition-duration: 400ms, 1s;
  transition-delay: 10s, 0;
  /* transition: width 700ms cubic-bezier(0.305, 0.000, 0.000, 1.015), height 2s; custom */

}

img{
  width:100%;
  height: 100%;
}

</style>
