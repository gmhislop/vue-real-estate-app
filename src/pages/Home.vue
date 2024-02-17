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
            <div class="card-container">
                <Card v-for="(house, index) in houses" :key="index" :house="house" />
            </div>
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
            houses: [ // Dummy data for houses
                { address: '1234 Main St', price: '$500.000', city: '12345 City', bathroom: 2, bedroom: 3, area: 100, image: 'https://via.placeholder.com/150' },
                { address: '5678 Elm St', price: '$600.000', city: '56789 Town', bathroom: 3, bedroom: 4, area: 120, image: 'https://via.placeholder.com/150' },
                { address: '91011 Oak St', price: '$700.000', city: '9101112 Village', bathroom: 3, bedroom: 5, area: 150, image: 'https://via.placeholder.com/150' }
            ]
        };
    },
    methods: {
        confirmDelete() {
            // Method logic for confirming deletion
        },
        createNew() {
            // Method logic for creating new house
        }
    }
};
</script>
  
<style scoped>
.home {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem 0;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    border-radius: 8px;
    width: 75%;
}

.title-container {
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding: 1rem 0;
}

h2 {
    font-weight: 700;
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
  