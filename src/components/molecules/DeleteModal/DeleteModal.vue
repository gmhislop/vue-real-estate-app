<template>
  <div class="overlay">
    <div class="modal">
      <Heading class="title">Delete Listing</Heading>
      <Paragraph class="text">
        Are you sure you want to delete this listing?
        <br />
        This action cannot be undone.
      </Paragraph>
      <button class="btn btn--danger" @click="deleteHouse">YES, DELETE</button>
      <button class="btn btn--cancel" @click="cancelDelete">GO BACK</button>
    </div>
  </div>
</template>

<script setup>
import { useHousesStore } from '@/stores/houses';
import { Paragraph, Heading } from '@/components/atoms';
import { useRouter, useRoute } from 'vue-router';
import { DETAIL_PAGE, HOME_PAGE } from '@/router';

const storeHouses = useHousesStore()
const router = useRouter()
const route = useRoute()

const deleteHouse = async () => {
  await storeHouses.deleteHouse()
  if (route.name === DETAIL_PAGE) {
    router.push({ name: HOME_PAGE })
  }
}

const cancelDelete = () => {
  storeHouses.cancelDeleteHouse()
}
</script>

<style scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  padding: 0.75rem;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 600px;
  padding: 2rem 1.5rem;
  border-radius: 0.625rem;
  background-color: white;
}

.title {
  text-align: center;
}

.text {
  margin-bottom: 1rem;
}

.btn {
  font-family: var(--headers-buttons-bold);
  font-size: var(--buttons-tabs-text);
  font-weight: var(--bold);
  color: var(--background-2);
  border: none;
  border-radius: 0.3125rem;
  width: 70%;
  padding: 0.75rem;
  text-align: center;
}

.btn--danger {
  background-color: var(--primary);
}

.btn--cancel {
  background-color: var(--secondary);
}

@media screen and (min-width: 1024px) {
  .modal {
    gap: 1rem;
    padding: 3rem;
  }
}
</style>
