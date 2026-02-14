<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const drawer = ref(false)
</script>
