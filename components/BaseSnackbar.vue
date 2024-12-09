<template>
  <v-snackbar
    v-model="snackbar.visible"
    :timeout="3000"
    location="top right"
    :color="snackbar.color"
    class="snackbar"
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from "~/composables";
const { snackbar } = useSnackbar();
</script>

<style scoped>
.snackbar {
  font-size: 16px;
}
</style>
