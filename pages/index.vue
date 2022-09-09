<template>
  <main>
    <Transition>
      <div v-if="introOpened" class="imageIntro" @click="introOpened = false">
        <Intro />
        <Colors />
      </div>
    </Transition>

    <div v-show="!introOpened" class="container">
      <p class="thanks">
        thanks to <a href="https://snai.pe">snaipe uwu</a>
      </p>
      <div class="left">
        <section
          v-for="(filteredArticles, categoryKey, index) in First"
          :id="'item' + index"
          :key="categoryKey"
        >
          <CategoryWrapper
            :title="categoryKey"
            :is-active="categoryKey === activeCategory"
            :articles=" filteredArticles"
            @listenButtonEvent="changeCategory(categoryKey)"
          />
        </section>
      </div>
      <class class="right">
        <section
          v-for="(filteredArticles, categoryKey, index) in Second"
          :id="'item' + index"
          :key="categoryKey"
        >
          <CategoryWrapper
            :title="categoryKey"
            :is-active="categoryKey === activeCategory"
            :articles=" filteredArticles"
            @listenButtonEvent="changeCategory(categoryKey)"
          />
        </section>
      </class>
    </div>
  </main>
</template>

<script>
import CategoryWrapper from '~/components/CategoryWrapper.vue'
import Intro from '~/components/Intro.vue'
import Colors from '~/components/Colors.vue'
export default {
  components: { CategoryWrapper, Intro, Colors },

  async asyncData ({ $content }) {
    const articles = await $content('', { deep: true })
      .sortBy('path', 'asc')
      .only(['title', 'description', 'img', 'slug', 'informations', 'dir'])
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
      activeCategory: null,
      introOpened: true
    }
  },
  computed: {
    groupedCategories () {
      return this.articles.reduce((finalObject, obj) => {
        const directory = obj.dir.slice(3)
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
      return Object.fromEntries(Object.entries(this.groupedCategories).slice(5, 9))
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
.imageIntro{
  background:red;
}

.title.active{
  color: brown;
  z-index: 1000;
  position: relative;
}
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

.thanks {
  position: fixed;
  right: 0.2em;
}

.active>a{
  color:brown;
}

p{
  margin:0;
}
.container{
  display: grid;
  grid-template-columns: repeat(6, 1fr);;
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
.content.active {
  max-height: 5000px;
  width: 70vw;
  display: block;
  transition-property: width, max-height;
  transition-timing-function: cubic-bezier(0.305, 0.000, 0.000, 1.015);
  transition-duration: 600ms, 2s;
  transition-delay: 00ms, 500ms;
  position: relative;
  top: -1em;
}

.content {
  max-height: 0;
  width: 0px;
  transition-property: max-height, width;
  transition-timing-function: cubic-bezier(0.305, 0.000, 0.000, 1.015);
  transition-duration: 600ms, 600ms;
  transition-delay: 00ms, 600ms;
  overflow: hidden;
  position: relative;
  top: -1em;

}

img{
  width:100%;
}

.right section:last-of-type{
  display: inline;
  color:#ff1e00;
}

#item5 > .cat > .title {
  float: left;
}

.v-enter-active, .v-leave-active{
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
         opacity: 0;
    }

</style>
