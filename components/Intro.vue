<template>
  <transition>
    <img
      class="introduction"
      src="~/assets/intro/bienvenue.jpg"
      alt="bienvenue, une liste de mots et d'action de dessine à l'écran, dans un caractère serif"
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
        cursor: pointer;
    }

    @media (max-width: 1024px) {
      img.introduction{
        margin: 0em;
        width: 98%;
    }
}

</style>
