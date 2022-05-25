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
      Tampoco está permitido hacer señas, sonidos o expresiones faciales para
      ayudar a tu compañero de equipo.
    </p>
    <base-button @click="setActivePage('las-palabras')">Vale, empezamos</base-button>
  </dialog>
</template>

<script>

export default {

  emits: ['set-page'],


  data() {
    return {
      cerrado: 'true',
    };
  },

  methods: {
    cerrar() {
      this.cerrado = false;
    },

    setActivePage(page) {
      this.$emit('set-page', page);
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
