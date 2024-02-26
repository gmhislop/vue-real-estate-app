<template>
    <header class="filters">
      <div class="relative-container">
        <input @input="storeHouses.updateSearch($event.target.value)" :value="storeHouses.search" class="search-input" placeholder="Search for a house" />
        <img class="searchbar-icon icon-search" src="@/assets/ic_search@3x.png" alt="Search icon" />
        <img @click="storeHouses.clearSearch" v-if="storeHouses.search" class="searchbar-icon icon-clear" src="@/assets/ic_clear@3x.png" alt="Clear icon" />
      </div>
      <div class="button-container" v-if="storeHouses.filteredHouses.length > 0">
        <button class="button-sort button-sort-left" @click="storeHouses.updateSortBy('price')" :class="{ 'active-sort': storeHouses.sortBy === 'price' }">Price</button>
        <button class="button-sort button-sort-right" @click="storeHouses.updateSortBy('size')" :class="{ 'active-sort': storeHouses.sortBy === 'size' }">Size</button>
      </div>
    </header>
  </template>
  
  <script setup>
  import { useHousesStore } from '@/stores/houses'
  const storeHouses = useHousesStore();
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .button-container {
    width: 100%;
    height: 36px;
  }
  
  .button-sort {
    width: 50%;
    height: 100%;
    padding: 0;
    font-family: var(--headers-buttons-bold);
    font-size: var(--buttons-tabs-text);
    font-weight: var(--bold);
    color: var(--color-background-2);
    background-color: var(--color-tertiary-dark);
    border: none;
  }
  
  .button-sort-left {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  .button-sort-right {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .icon-clear, .button-sort-left, .button-sort-right {
    cursor: pointer;
  }
  
  .active-sort {
    background-color: var(--color-primary);
  }
  
  .relative-container {
    position: relative;
  }
  
  .search-input {
    font-family: var(--font-body);
    font-size: var(--input-errors);
    font-weight: var(--regular);
    width: 100%;
    height: 36px;
    background: var(--color-tertiary-light);
    border-radius: 8px;
    border: none;
    color: var(--color-text-secondary);
    padding: 0 40px;
  }
  
  .searchbar-icon {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 8px;
  }
  
  .icon-search {
    left: 12px;
  }
  
  .icon-clear {
    right: 12px;
  }
  
  @media screen and (min-width: 1024px) {
    .relative-container {
      width: 40%;
    }
  
    .filters {
      flex-direction: row;
      margin-bottom: 1.5rem;
    }
  
    .searchbar-icon {
      top: 0.9rem;
    }
  
    .search-input {
      font-size: var(--input-errors);
      height: 2.75rem;
    }
  
    .button-container {
      width: 30%;
      height: 2.75rem;
    }
  
    .button-sort {
      font-size: var(--buttons-tabs-text);
    }
  }
  </style>
  