<template>
  <div>
    <v-footer id="footer" absolute>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      />

      <div class="footer">
        <a href="https://github.com/elviraGA" target="blank"
          ><i class="fab fa-github" style="font-size: 25px"></i
        ></a>
        <p>Copyright © 2022 Elvira García Alonso (who else? :D)</p>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: "https://media-exp1.licdn.com/dms/image/C4E33AQFgNc5aDrBvgQ/productpage-logo-image_100_100/0/1631005031603?e=1654459200&v=beta&t=vaajnaHl_qDwLOZ0-hecyBIUBGwi3klmwSxS8YjR5zY",
      link: "https://github.com/elviraGA",
    };
  },
};
</script>

<style scoped>
#footer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #f28dc8;
  color: white;
  font-size: 15px;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
