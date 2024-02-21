<template>
    <header class="filters">
        <div class="relative-container">
            <input @input="updateSearch" :value="search" class="search-input" placeholder="Search for a house" />
            <img class="searchbar-icon icon-search" src="@/assets/ic_search@3x.png" alt="search" />
            <img @click="clearSearch" v-if="search" class="searchbar-icon icon-clear" src="@/assets/ic_clear@3x.png"
                alt="clear" />
        </div>
        <div class="button-container" v-if="hasFilteredHouses">
            <button class="button-sort button-sort-left" @click="updateSortBy('price')"
                :class="{ 'active-sort': sortBy === 'price' }">Price</button>
            <button class="button-sort button-sort-right" @click="updateSortBy('size')"
                :class="{ 'active-sort': sortBy === 'size' }">Size</button>
        </div>
    </header>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useHousesStore } from '@/stores/houses';

interface House {
  price: number;
  size: number;
}

const search = ref<string>('');
const storeHouses = useHousesStore();

const updateSearch = (event: Event) => {
    search.value = (event.target as HTMLInputElement).value;
    storeHouses.updateSearch(search.value);
};

const clearSearch = () => {
    search.value = '';
    storeHouses.clearSearch();
};

const updateSortBy = (option: keyof House) => {
    storeHouses.updateSortBy(option);
};

const hasFilteredHouses = storeHouses.filteredHouses.length > 0;

const sortBy = ref<string>('');

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
    height: 2.25rem;
}

.button-sort {
    width: 50%;
    height: 100%;
    padding: 0;
    font-family: var(--headers-buttons-bold);
    font-size: var(--buttons-tabs-text);
    font-weight: var(--bold);
    color: var(--background-2);
    background-color: var(--tertiary-dark);
    border: none;
    border-radius: 0.5rem;
}

.button-sort-left {
    border-top-left-radius: 0.05rem;
    border-bottom-left-radius: 0.05rem;
}

.button-sort-right {
    border-top-right-radius: 0.05rem;
    border-bottom-right-radius: 0.05rem;
}

.active-sort {
    background-color: var(--primary);
}

.relative-container {
    position: relative;
}

.search-input {
    font-family: var(--font-body);
    font-size: var(--input-errors);
    font-weight: var(--regular);
    width: 100%;
    height: 2.25rem;
    background: var(--tertiary-light);
    border-radius: 0.5rem;
    border: none;
    color: var(--text-secondary);
    padding: 0 1rem;
}

.searchbar-icon {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0.625rem;
}

.icon-search {
    left: 1rem;
}

.icon-clear {
    right: 1rem;
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
        top: 0.875rem;
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
