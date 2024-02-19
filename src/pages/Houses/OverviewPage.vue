<template>
    <div class="home">
        <div class="title-container">
            <h2>Houses</h2>
            <button class="createButton" @click="createNew">+ CREATE NEW</button>
        </div>
        <div class="filter-container">
            <div class="search-container">
                <img alt="search logo" class="search-icon" src="@/assets/ic_search@3x.png" />
                <input type="text" v-model="filter" placeholder="Search..." class="search-input" />
                <img v-if="filter.length > 0" class="clear-icon" src="@/assets/ic_clear@3x.png" alt="Clear Filter"
                    @click="clearFilter" />
            </div>
            <div class="toggle-container">
                <button class="toggle-button-left tabs" :class="{ 'active': sortBy === 'price' }"
                    @click="setSortBy('price')">
                    Price
                </button>
                <button class="toggle-button-right tabs" :class="{ 'active': sortBy === 'size' }"
                    @click="setSortBy('size')">
                    Size
                </button>
            </div>
        </div>
        <p v-if="filter && filteredHouses.length > 0" class="result-count">{{ filteredHouses.length }} result(s) found</p>
        <div v-if="shouldShowEmptyState">
            <EmptyState />
        </div>
        <div v-else class="content">
            <Card v-for="(house, index) in filteredHouses" :key="index" :house="house" />
        </div>
    </div>
</template>
  
<script>
import EmptyState from '@/components/EmptyState.vue';
import Card from '@/components/Card.vue';
import { useHousesStore } from '@/stores/houses';

export default {
    name: 'Home',
    components: {
        EmptyState,
        Card
    },
    data() {
        return {
            shouldShowEmptyState: false,
            sortBy: 'price',
            filter: ''
        };
    },
    computed: {
        filteredHouses() {
            return useHousesStore().houses.filter((house) =>
                Object.values(house).some((value) =>
                    typeof value === "string" && value.toLowerCase().includes(this.filter.toLowerCase())
                )
            ).sort((a, b) => {
                return this.sortBy === 'price' ? a.price - b.price : a.size - b.size;
            });
        },
    },
    watch: {
        filteredHouses() {
            this.shouldShowEmptyState = this.filteredHouses.length === 0;
        },
    },
    methods: {
        createNew() {

        },
        setSortBy(option) {
            this.sortBy = option;
        },
        clearFilter() {
            this.filter = '';
        }
    },
    mounted() {
        useHousesStore().fetchHouses();
        console.log('Houses:', useHousesStore().houses);
    },
};
</script>
  
<style scoped>
.home {
    padding: 1rem 10vw;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.card-container {
    display: flex;
    width: 100%;
}

.title-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
}

h2 {
    font-weight: 700;
}

.result-count {
    margin-bottom: 1rem;
    font-size: large;
    font-weight: 700;
}

.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-input {
    border: none;
    border-radius: 4px;
    background-color: var(--color-tertiary-light);
    min-width: 20vw;
    padding: 1rem 3rem;
}

.clear-icon {
    position: absolute;
    right: 1rem;
    width: 1rem;
    cursor: pointer;
}

.search-icon {
    position: absolute;
    left: 1rem;
    width: 1rem;
    pointer-events: none;
}

.filter-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
}

.toggle-container {
    display: flex;
    background-color: var(--color-background-3);
    border-radius: 8px;
}

.toggle-container button {
    border: none;
    padding: 0.5rem 4vw;
    cursor: pointer;
    background-color: var(--color-tertiary-dark);
    color: var(--color-text-tertiary);
}

.toggle-button-left {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.toggle-button-right {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.toggle-container button.active {
    background-color: var(--color-primary);
    color: var(--color-text-tertiary);
}

.createButton {
    background-color: var(--color-primary);
    color: var(--color-text-tertiary);
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    cursor: pointer;
}
</style>
  