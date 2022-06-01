<template>
  <my-header title="Password🎲"></my-header>
  <router-view></router-view>
  <my-footer></my-footer>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue"


export default {
  components: {
    MyHeader,
    MyFooter,

  },
};
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
