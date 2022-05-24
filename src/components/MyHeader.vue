<template>
  <div>
    <header>{{ title }}</header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #f28dc8;
  color: white;
  font-size: 30px;
  text-align: center;
  margin-bottom: 2rem;
}
</style>
