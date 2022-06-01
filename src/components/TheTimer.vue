<template>
  <div>
    <base-card>
      <div  >{{ contador }} segundos🕒</div>
    </base-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 60,
     
    };
  },

  methods: {


    iniciarContador() {
      if (this.contador > 0) {
        setTimeout(() => {
          this.contador -= 1;
          this.iniciarContador();
        }, 1000);
      } else {s
        this.$router.push('/the-end');
        
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
