<script setup>
  import Main from './components/Main.vue'
</script>

<template>
  <v-layout>
    <v-app-bar elevation="2"  color="primary" density="compact">
      <template v-slot:prepend>
        <v-icon icon="$vuetify"></v-icon>
      </template>
      <v-app-bar-title>Zadanie rekrutacyjne</v-app-bar-title>
    </v-app-bar>

     <v-main class="d-flex align-top justify-center" style="min-height: 300px;">
      <Main/>
    </v-main>

    <v-footer elevation="4" app color="primary">
      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Mateusz Rogulski</strong>
      </div>
    </v-footer>
  
  </v-layout>
</template>

<style scoped>

</style>
