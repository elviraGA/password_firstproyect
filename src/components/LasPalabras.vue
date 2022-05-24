<template>
  <div>
    <base-card>
      <div>
        <ul v-for="palabra in palabras" :key="palabra">
          {{
            palabras.join(", ")
          }}
        </ul>
      </div>
      <the-timer></the-timer>
      <base-button @click="mostrarNuevaPalabra">Nueva Palabra</base-button>
    </base-card>
  </div>
</template>

<script>
import TheTimer from "./TheTimer.vue";

export default {
  components: {
    TheTimer,
  },

  data() {
    return {
      palabras: [],
    };
  },


  methods: {

    mostrarNuevaPalabra() {
      fetch("https://clientes.api.greenborn.com.ar/public-random-word")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const palabras = [];
          for (const id in data) {
            palabras.push(data[id]);
          }
          this.palabras = palabras;
        });
    },
  },

  //de esta forma cuando el componente se haga visible que lanza este método
  mounted() {
    this.mostrarNuevaPalabra();
    
  },
};
</script>

<style scoped>
ul {
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
