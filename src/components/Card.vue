<template>
    <div :class="['card-container']" :style="{ flexDirection: showFullDetails ? 'column' : 'row' }">
        <img class="house-image" :src="house.image" :alt="house.address"
            :style="{ width: showFullDetails ? '100%' : 'auto', height: showFullDetails ? '400px' : '100%', borderRadius: showFullDetails ? '0px' : '8px', padding: showFullDetails ? '0' : '1rem' }" />
        <div class="detail-container">
            <div class="details">
                <div v-if="showFullDetails">
                    <h1>{{ house.address }}</h1>
                    <div class="full-detail-container">
                        <div class="fullDetails">
                            <h3>{{ house.street }}</h3>
                        </div>
                        <div class="fullDetails">
                            <span class="properties-text"><img src="@/assets/ic_price@3x.png" class="propertiess"
                                    alt="price" />{{ house.price }}</span>
                            <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess"
                                    alt="size" />{{ house.area }} m²</span>
                            <span class="properties-text"><img src="@/assets/ic_construction_date@3x.png"
                                    class="propertiess" alt="construction date" />Built in {{ house.construction_date
                                    }}</span>
                        </div>
                        <div class="fullDetails">
                            <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess"
                                    alt="bed" />{{ house.bedroom }}</span>
                            <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess"
                                    alt="bath" />{{ house.bathroom }}</span>
                            <span class="properties-text"><img src="@/assets/ic_garage@3x.png" class="propertiess"
                                    alt="garage" />{{ house.garage }} m²</span>
                        </div>
                    </div>
                    <div class="fullDetails">
                        <p class="description listing-information">{{ house.description }}</p>
                    </div>
                </div>
                <div class="defaultDetails" v-else>
                    <h2>{{ house.address }}</h2>
                    <h3>€ {{ house.price }}</h3>
                    <p>{{ house.street }}</p>
                    <div class="properties-container">
                        <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess" alt="bed" />{{
                            house.bedroom }}</span>
                        <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess" alt="bath" />{{
                            house.bathroom }}</span>
                        <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess" alt="size" />{{
                            house.area }} m²</span>
                    </div>
                </div>
            </div>

            <div class="button-container" v-if="!hideButtonContainer">
                <button @click="edit"><img src="@/assets/ic_edit@3x.png" class="icons" alt="Edit" /></button>
                <button @click="showDeleteModal = true"><img src="@/assets/ic_delete@3x.png" class="icons"
                        alt="Delete" /></button>
            </div>
            <delete-modal :show-modal="showDeleteModal" @cancel="cancelDelete" @confirm="confirmDelete" />
        </div>
    </div>
</template>
  
<script>
import DeleteModal from './DeleteModal.vue';

export default {
    components: {
        DeleteModal
    },
    props: {
        house: Object,
        showFullDetails: Boolean,
        hideButtonContainer: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showDeleteModal: false
        };
    },
    methods: {
        edit() {
            this.$router.push(`/edit/${this.house.id}`);
        },
        cancelDelete() {
            // Cancel deletion
            this.showDeleteModal = false;
        },
        confirmDelete() {
            // Confirm deletion
            // Implement logic to delete the house
            console.log('Deleting house:', this.house);
            this.showDeleteModal = false;
        }
    }
};
</script>
  
<style scoped>
.card-container {
    display: flex;
    width: 100%;
    min-width: 500px;
    background-color: var(--color-background-2);
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.house-image {
    border-radius: 8px;
    height: 400px;
    object-fit: cover;
}

.button-container {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1rem;
    right: 0;
    top: 0;
    gap: 0.5rem;
}

.propertiess {
    width: 20px;
    margin-right: 0.5rem;
}

.properties-container {
    display: flex;
    gap: 1rem;
    color: var(--color-tertiary);
    align-items: center;
}

.properties-text {
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-size: large;
}

.icons {
    height: 24px;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.detail-container {
    display: flex;
    position: relative;
    padding: 1rem;
    width: 100%;
}

.fullDetails {
    display: flex;
    gap: 1rem;
}

.description {
    margin: 1rem 0;
    color: var(--color-text-secondary);
    font-weight: 400;
}

.full-detail-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.defaultDetails {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--color-tertiary);
}
</style>
  