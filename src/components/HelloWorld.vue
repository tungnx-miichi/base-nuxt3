<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="text-green">{{ msg }}</h1>
  </div>
  <div class="text-center p-4 bg-blue-500 text-black">
    <h1 class="text-2xl font-bold">Hello Tailwind + Vuetify</h1>
  </div>
  <v-btn color="primary" class="mt-4">Vuetifydd Button</v-btn>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
