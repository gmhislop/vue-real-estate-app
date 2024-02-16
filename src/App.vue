<script setup lang="ts">
import NavBar from './components/NavigationHeader.vue';
</script>

<template>
  <div class="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  padding-top: 3rem;
}
</style>
