<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #360032;
  border-radius: 4px;
  background-color: #360032;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
}

div {
  text-align: center;
}

button:hover,
button:active {
  background-color: #5c0556;
  border-color: #5c0556;
}
</style>
