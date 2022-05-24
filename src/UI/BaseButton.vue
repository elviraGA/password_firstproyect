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
  padding: 0.5rem 2rem;
  cursor: pointer;

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