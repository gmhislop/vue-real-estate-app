<template>
  <main>
    <Layout>
      <div class="heading-container--mobile">
        <RouterLink class="add-link" :to="{ name: CREATE_PAGE }">
          <img alt="Plus icon" class="plus-icon" src="@/assets/ic_plus_grey@3x.png" />
        </RouterLink>
        <Heading class="page-title--mobile">Houses</Heading>
      </div>

      <div class="heading-container--desktop">
        <Heading class="page-title--mobile">Houses</Heading>
        <RouterLink class="create-button-container" :to="{ name: CREATE_PAGE }">
          <button class="create-new-button">
            <img alt="White plus icon" class="plus-icon" src="@/assets/ic_plus_white@3x.png" />
            CREATE NEW
          </button>
        </RouterLink>
      </div>

      <FilterControls />

      <Heading as="h2" class="results-found" v-if="storeHouses.displayResultCount">{{ storeHouses.resultCount }} results found</Heading>

      <NotFound v-if="storeHouses.noResults" />

      <ol class="house-list">
        <RouterLink
          :to="{ name: DETAIL_PAGE, params: { id: house.id } }"
          v-for="house in storeHouses.filteredHouses"
          :key="house.id"
        >
          <HouseCard :house="house" />
        </RouterLink>
      </ol>
    </Layout>
  </main>
</template>

<script setup>
import { useHousesStore } from '@/stores/houses';
import  NotFound  from '@/components/molecules/Notfound/NotFound.vue';
import  FilterControls  from '@/components/molecules/FilterControls/FilterControls.vue';
import  HouseCard  from '@/components/molecules/HouseCard/HouseCard.vue';
import  Layout from '@/components/templates/Layout/Layout.vue';
import  Heading  from '@/components/atoms/typography/Heading.vue';
import { DETAIL_PAGE, CREATE_PAGE } from '@/router';

const storeHouses = useHousesStore()

if (storeHouses.houses.length === 0) {
  await storeHouses.fill()
}
</script>

<style scoped>
.heading-container--mobile {
  position: relative;
  margin-bottom: 1rem;
}

.heading-container--desktop {
  display: none;
}

.page-title--mobile {
  text-align: center;
}

.add-link {
  position: absolute;
  right: 0;
  top: 0.5rem;
}

.plus-icon {
  width: 1.25rem;
}

.results-found {
  margin: 1rem 0;
}

.house-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0 4rem 0;
}

@media screen and (min-width: 1024px) {
  .heading-container--mobile {
    display: none;
  }

  .heading-container--desktop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .create-new-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 14rem;
    height: 100%;
    font-family: var(--headers-buttons-bold);
    font-size: var(--buttons-tabs-text);
    font-weight: var(--bold);
    color: var(--color-text-tertiary);
    background-color: var(--color-primary);
    border: none;
    border-radius: 0.625rem;
    padding: 0;
  }
  .house-list {
    gap: 1.5rem;
  }
}
</style>
