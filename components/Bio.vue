<template>
  <nuxt-content class="biography" :document="content" />
</template>

<script>
export default {
  props: {
    content: {
    }
  }
}
</script>

<style>
.biography.nuxt-content {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.b-left{
  color:darkolivegreen;
  grid-column: 1/3;

}

.b-center{
  mix-blend-mode: difference;
  color:darkolivegreen;
  grid-column: 3/3;
  text-align: center;
  transform: skew(-15deg) rotate(-15deg);

}

.biography.nuxt-content a{
  text-decoration: dotted;
  text-decoration-thickness: 0.2rem;
  color: var(--randomcolor);

}

.b-right{
  color:darkolivegreen;
  grid-column: 4/6;
}

.right .content.active:last-child{
  top: 0em;
  width: 80vw;
}

.right .content:last-child{
  top: 0em;
}

</style>
