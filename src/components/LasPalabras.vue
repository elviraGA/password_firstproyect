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
      <div>
        <base-button align="center" @click="mostrarNuevaPalabra"
          >Otra Palabra</base-button
        >
        <base-button align="center" @click="sumarAciertos"
          >Acertamos</base-button
        >
        <p v-if="win">Has ganado 10 puntos!!!🥳</p>
      </div>
    </base-card>
  </div>
</template>

<script>
import TheTimer from "./TheTimer.vue";

export default {
  components: {
    TheTimer,
  },

  computed: {
    aciertosActualizados() {
      return this.aciertos;
    },
  },

  data() {
    return {
      palabras: [],
      aciertos: 10,
      win: false,
    };
  },

  methods: {
    getWords() {
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

    mostrarNuevaPalabra() {
      this.win = false;
      this.getWords();
      
    },

    sumarAciertos() {
      this.getWords();
      this.aciertos += 10;
      this.win = true;
    },
  },

  //de esta forma cuando el componente se haga visible que lanza este método
  mounted() {
    this.getWords();
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
  list-style-type: none;
}

h2 {
  text-align: center;
  background-color: #f28dc8;
  color: white;
}

p {
  
  text-align: center;
  animation: slide-fade 0.7s ease-out forwards;

}
</style>
