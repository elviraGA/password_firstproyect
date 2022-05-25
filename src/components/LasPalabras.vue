<template>
  <div>
    <base-card>
      <div>
        <ul v-for="palabra in palabras" :key="palabra">
          {{ palabras.join(", ") }}
        </ul>
      </div>
      <the-timer></the-timer>
      <base-button @click="mostrarNuevaPalabra">Otra Palabra</base-button>
      <base-button @click="sumarAciertos">Acertamos</base-button>

      <base-card>
        <h2>⚔️Historial del juego⚔️</h2>
        <ul>
            <li v-if="PalabraAcertada">
              Habéis acertado la palabra: tenéis {{aciertosActualizados}} puntos!!
            </li>
            <li v-if="PedirOtraPalabra">Has pedido otra palabra</li>
        </ul>
     </base-card>
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
      }
    },

  data() {
    return {
      palabras: [],
      aciertos: 0,
      PalabraAcertada: false,
      PedirOtraPalabra: false,

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
      this.getWords();
      this.PedirOtraPalabra = true;
    },

    

    sumarAciertos() {
       this.PalabraAcertada = true;
       this.getWords();
       this.aciertos += 10
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

</style>
