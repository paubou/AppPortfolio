<template>
  <span>
    <slot />
  </span>
</template>
<script>

export default {

  mounted () {
    this.onStateChange()
  },
  beforeUpdate () {
    this.onStateChange()
  },

  methods: {
    onMouseover (e) {
      const nextLetter = (ch) => {
        if (!ch.match(/[a-z]/i)) { return ch } else if (ch === 'Z') { return 'A' } else if (ch === 'z') { return 'a' }
        return String.fromCharCode(ch.charCodeAt(0) + 1)
      }
      e.target.innerHTML = nextLetter(e.target.innerHTML)
    },
    onStateChange () {
      for (const child of this.$el.children) {
        child.removeEventListener('mouseover', this.onMouseover)
      }

      // console.log(this.$slots.default)
      const slot = this.$slots.default
      let nHTML = ''

      for (const elts of slot) {
        const letters = elts.text

        for (const letter of letters) {
          nHTML += '<span>' + letter + '</span>'
        }
      }
      this.$el.innerHTML = nHTML
      for (const child of this.$el.children) {
        child.addEventListener('mouseover', this.onMouseover)
      }
    }

  }

  // functional: true,
  // render (h, ctx) {
  //   //     console.log(this.$slots.default)
  //   //   }
  //   const slot = ctx.slots().default
  //   const content = []
  //   // console.log(ctx.slots().default)

  //   for (const elts of slot) {
  //     const letters = elts.text
  //     //   if (letters === undefined) {
  //     //     return
  //     //   }
  //     // const nHTML = ''
  //     for (const letter of letters) {
  //       content.push(h('span', {
  //         onMouseover: ctx.listeners.mouseover

  //       }, letter))
  //     }
  //   }
  //   // return content

  //   return h(
  //     { template: '<button @click="console.log(\'testevent\')">Im slot</button>' })
  //   // this.$slots.default.innerHTML = nHTML
  // }

}
</script>

<style>

</style>
