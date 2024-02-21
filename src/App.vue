<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/molecules/NavBar/NavBar.vue';
  import DeleteModal from './components/molecules/DeleteModal/DeleteModal.vue';
  import { useHousesStore } from '@/stores/houses'

  const storeHouses = useHousesStore();
</script>

<template>
  <NavBar />
  <Suspense>
    <template #fallback>
      <div class="loading-spinner"></div>
    </template>
    <RouterView />
  </Suspense>
  <DeleteModal v-if="storeHouses.displayDeleteModal"/>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.loading-spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--color-primary);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
