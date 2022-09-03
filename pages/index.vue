<template>
  <div class="container">
    <div class="left">
      <section
        v-for="(filteredArticles, categoryKey, index) in First"
        :id="'item' + index"
        :key="categoryKey"
        @click="changeCategory(categoryKey)"
      >
        <CategoryWrapper
          :title="categoryKey"
          :is-active="categoryKey === activeCategory"
          :articles=" filteredArticles"
        />
      </section>
    </div>
    <class class="right">
      <section
        v-for="(filteredArticles, categoryKey, index) in Second"
        :id="'item' + index"
        :key="categoryKey"
        @click="changeCategory(categoryKey)"
      >
        <CategoryWrapper
          :title="categoryKey"
          :is-active="categoryKey === activeCategory"
          :articles=" filteredArticles"
        />
      </section>
    </class>
  </div>
</template>

<script>
import CategoryWrapper from '~/components/CategoryWrapper.vue'
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
      activeCategory: null
    }
  },
  computed: {
    groupedCategories () {
      return this.articles.reduce((finalObject, obj) => {
        const directory = obj.dir.slice(1)
        finalObject[directory] ?? (finalObject[directory] = [])
        finalObject[directory].push(obj)
        return finalObject
      }, {})
    },
    First () {
      console.log(Object.entries(this.groupedCategories))
      return Object.fromEntries(Object.entries(this.groupedCategories).slice(0, 5))
    },
    Second () {
      console.log(Object.entries(this.groupedCategories))
      return Object.fromEntries(Object.entries(this.groupedCategories).slice(5, 100))
    }

  },
  methods: {
    changeCategory (key) {
      if (this.activeCategory === key) {
        this.activeCategory = null
      } else {
        this.activeCategory = key
        console.log(this)
      }
      // this.isActive = !this.isActive
    },
    debug (categoryKey, activeCategory) {
      // console.log(categoryKey === activeCategory)
      // console.log(categoryKey)
      // console.log(activeCategory)
      return categoryKey === activeCategory
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
  grid-template-columns: repeat(1, auto);
  grid-gap: 0 1em;
}

/* #item10 {
  grid-column: 2;
} */

.left{
  grid-row-start: 1 ;
  grid-column: 1;
}

.right{
  grid-row-start: 1 ;
  grid-column: 2/4;
}

a:hover{
  cursor: pointer;
}

/* .cat{
    overflow: hidden;
    max-height: 5000px;

  } */
.content.active{
  display: block;
  max-height: 5000px;
   transition-property: width, max-height;
  transition-duration: 400ms, 100ms;
  transition-timing-function: cubic-bezier(0.305, 0.000, 0.000, 1.015);
  transition-delay: 400ms, 100ms;
    width: 80vw;
 background: orange;
}

.content{
  width: 0px;
  max-height: 10px;
  /* transition-property: width, max-height;
  transition-timing-function: cubic-bezier(0.305, 0.000, 0.000, 1.015);
  transition-duration: 400ms, 100ms;
  transition-delay: 10s, 0s; */
   background: orange;
   display: none;
  /* transition: width 700ms cubic-bezier(0.305, 0.000, 0.000, 1.015), height 2s; custom */

}

img{
  width:100%;
  height: 100%;
}

.right section:last-of-type{
  display: inline;
}

#item5 > .cat > .title {
  float: left;
}
</style>
