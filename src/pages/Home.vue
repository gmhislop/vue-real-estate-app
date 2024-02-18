<template>
    <div class="home">
        <div v-if="shouldShowEmptyState">
            <EmptyState />
        </div>
        <div v-else class="content">
            <div class="title-container">
                <h2>Houses</h2>
                <button class="createButton" @click="createNew">+ CREATE NEW</button>
            </div>
            <div class="toggle-container">
                <button class="toggle-button-left" :class="{ 'active': sortBy === 'price' }" @click="setSortBy('price')">
                    Price
                </button>
                <button class="toggle-button-right" :class="{ 'active': sortBy === 'size' }" @click="setSortBy('size')">
                    Size
                </button>
            </div>
            <Card v-for="(house, index) in sortedHouses" :key="index" :house="house" />
        </div>
    </div>
</template>

<script>
import EmptyState from '@/components/EmptyState.vue';
import Card from '@/components/Card.vue';

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
            houses: [ // Dummy data for houses
                { address: '1234 Main St', price: '500.000', street: '1011AA Amsterdam', bathroom: 2, bedroom: 3, area: 100, image: 'https://via.placeholder.com/150', construction_date: '2020', garage: 2 },
                { address: '5678 Elm St', price: '600.000', street: '1011AA Amsterdam', bathroom: 3, bedroom: 4, area: 120, image: 'https://via.placeholder.com/150', construction_date: '2021', garage: 2 },
                { address: '91011 Oak St', price: '700.000', street: '1011AA Amsterdam', bathroom: 3, bedroom: 5, area: 150, image: 'https://via.placeholder.com/150', construction_date: '2019', garage: 2 },
                { address: '5678 Elm St', price: '600.000', street: '1011AA Amsterdam', bathroom: 3, bedroom: 4, area: 120, image: 'https://via.placeholder.com/150', construction_date: '2021', garage: 2 },
                { address: '91011 Oak St', price: '700.000', street: '1011AA Amsterdam', bathroom: 3, bedroom: 5, area: 150, image: 'https://via.placeholder.com/150', construction_date: '2019', garage: 2 }
            ]
        };
    },
    methods: {
        confirmDelete() {
            // Method logic for confirming deletion
        },
        createNew() {
            // Method logic for creating new house
        },
        setSortBy(option) {
            this.sortBy = option;
        }
    },
    computed: {
        sortedHouses() {
            return this.houses.slice().sort((a, b) => {
                return this.sortBy === 'price' ? a.price - b.price : a.size - b.size;
            });
        }
    }
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

.toggle-container {
    display: flex;
    background-color: #C3C3C3;
    border-radius: 8px;
}

.toggle-container button {
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: black;
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
    background-color: #EB5440;
    color: white;
}

.createButton {
    background-color: #EB5440;
    color: white;
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    cursor: pointer;
}
</style>
