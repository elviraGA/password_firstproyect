<template>
  <my-header title="Password🎲"></my-header>
  <the-instructions></the-instructions>
  <las-palabras></las-palabras>


</template>

<script>
import MyHeader from './components/MyHeader.vue'
import TheInstructions from './components/TheInstructions.vue';
import LasPalabras from './components/LasPalabras.vue';


export default {

components: {

  MyHeader,
  TheInstructions,
  LasPalabras
},

data() {

  return {

    activePage: 'las-palabras'
  }
}

}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}


@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap");
</style>
