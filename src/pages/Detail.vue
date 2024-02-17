<template>
    <div class="detail">
        <div class="card-container">
            <Card v-for="(house, index) in houses" :key="index" :house="house" showFullDetails />
        </div>
    </div>
</template>
  
<script>
import Card from '@/components/Card.vue';
export default {
    name: 'Detail',
    components: {
        Card
    },
    data() {
        return {
            shouldShowEmptyState: false,
            houses: [ // Dummy data for houses
                { address: '1234 Main St', price: '500.000', street: '1011AA Amsterdam', bathroom: 2, bedroom: 3, area: 100, image: 'https://via.placeholder.com/150', construction_date: '2020', garage: 2, description: 'Nestled in a serene neighborhood, this charming home offers a perfect blend of modern comfort and classic appeal. Featuring spacious interiors, a cozy living area, and a beautifully landscaped backyard, its an ideal retreat for relaxation and entertainment. With convenient access to amenities and scenic views, this home promises a delightful living experience.' },

            ]
        };
    },
};
</script>
  
<style scoped>
.detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem 10vw;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
}
</style>
