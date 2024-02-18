<template>
    <div class="detail">
        <router-link class="back-link" to="/"><img src="@/assets/ic_back_grey@3x.png" class="back-icon" alt="back" />Back to
            overview</router-link>
        <div class="content-wrapper">
            <div class="detail-container">
                <Card v-for="(house, index) in houses" :key="index" :house="house" showFullDetails />
            </div>
            <div class="recommendation-container">
                <h2>Recommeneded for you</h2>
                <Card v-for="(house, index) in houses" :key="index" :house="house" hideButtonContainer />
            </div>
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
    width: 100%;
    padding: 1rem 10vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.content-wrapper {
    width: 100%;
    display: flex;
    gap: 5vw;
    flex-direction: row;
}

.detail-container {
    display: flex;
}

.recommendation-container {
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.back-icon {
    margin-right: 0.5rem;
    height: 1rem;
}

.back-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: #000000;
    cursor: pointer;
    width: fit-content;
    margin-bottom: 1rem;
}
</style>
