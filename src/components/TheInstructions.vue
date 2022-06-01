<!--This component's goal is to set the game's instructions. It is supposed to appeared at the beginning, when you open the webpage-->

<template>
  <dialog open v-if="cerrado">
    <h2>Cómo se juega</h2>
    <h3>Guía rápida📝</h3>
    <p>
      Objetivo: Averiguar el mayor número de "Password", intentando llegar a 10.
    </p>
    <p>
      Cada equipo tiene un minuto para adivinar todas las palabras que pueda
    </p>
    <p>
      Las pistas no pueden ser palabras relacionadas con la raíz o palabras
      compuestas.
    </p>
    <p>
      No hagas señas, sonidos o muecas para ayudar a tu compañero de equipo.😉
    </p>
    <base-button @click="cerrar">Vale, empezamos</base-button>
  </dialog>
</template>

<script>

export default {

  

  data() {
    return {
      cerrado: 'true',
    };
  },

//gracias a Vue router podemos cambiar de vista de un componente a otro 
  methods: {
    cerrar() {
      this.$router.push('/game');
    },

  
  },

  
};
</script>

<style scoped>
h2 {
  text-align: center;
  text-decoration: underline;
}

h3 {
  text-align: center;
}

p {
  text-align: center;
}
</style>
