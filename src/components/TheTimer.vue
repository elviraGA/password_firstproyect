<template>
  <div>
    <base-card>
      <div  >{{ contador }} segundos🕒</div>
    </base-card>
    <dialog open v-if="visible">
      <p>Ohhhh, ¡el tiempo se ha acabado!⌛</p>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 30,
      visible: false,
    };
  },

  methods: {


    iniciarContador() {
      if (this.contador > 0) {
        setTimeout(() => {
          this.contador -= 1;
          this.iniciarContador();
        }, 1000);
      } else {
        this.visible = true;
      }
    },
  },

  mounted() {
    this.iniciarContador();
  },

  
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
