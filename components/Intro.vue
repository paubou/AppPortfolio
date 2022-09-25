<template>
  <transition>
    <img
      class="introduction"
      src="~/assets/intro/bienvenue.jpg"
      alt="bienvenue"
    >
  </transition>
</template>

<script>
export default {

}
</script>

<style>

    img.introduction{
        margin: 0.2em;
        position: absolute;
        width: 60vw;
    }

    @media (max-width: 1024px) {
      img.introduction{
        margin: 0em;
        width: 98%;
    }
}

</style>
