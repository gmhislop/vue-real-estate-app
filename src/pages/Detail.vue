<template>
    <div class="detail">
        <router-link class="back-link" to="/">
            <img src="@/assets/ic_back_grey@3x.png" class="back-icon" alt="back" />
            Back to overview
        </router-link>
        <div class="content-wrapper">
            <div class="detail-container">
                <Card v-if="selectedHouse" :house="selectedHouse" showFullDetails />
            </div>
        </div>
    </div>
</template>
  
<script>
import Card from '@/components/Card.vue';
import { ref, watch } from 'vue';
import { useHousesStore } from '@/stores/houses';

export default {
    name: 'Detail',
    components: {
        Card
    },
    setup() {
        const housesStore = useHousesStore();
        const selectedHouse = ref(null);

        watch(
            () => $route.params.id,
            async (newId) => {
                try {
                    selectedHouse.value = await housesStore.fetchHouseById(newId);
                } catch (error) {
                    console.error('Error fetching house by ID:', error);
                }
            }
        );

        return {
            selectedHouse
        };
    }
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

.back-icon {
    margin-right: 0.5rem;
    height: 1rem;
}

.back-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-text);
    cursor: pointer;
    width: fit-content;
    margin-bottom: 1rem;
}
</style>
