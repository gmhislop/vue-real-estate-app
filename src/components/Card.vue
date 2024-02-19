<template>
    <div v-if="!showFullDetails" class="card-container">
        <img class="house-image" @click="detail" :src="house.image" :alt="house.street + house.houseNumber"
            :style="{ borderRadius: showFullDetails ? '0px' : '8px', margin: showFullDetails ? '0' : '1rem' }" />
        <div class="detail-container">
            <div class="details">
                <div v-if="showFullDetails">
                    <h1>{{ house.location.street }}</h1>
                    <div class="full-detail-container">
                        <div class="fullDetails">
                            <h3>{{ house.street }}</h3>
                        </div>
                        <div class="fullDetails">
                            <span class="properties-text"><img src="@/assets/ic_price@3x.png" class="propertiess"
                                    alt="price" />{{ house.price }}</span>
                            <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess"
                                    alt="size" />{{ house.size }} m²</span>
                            <span class="properties-text"><img src="@/assets/ic_construction_date@3x.png"
                                    class="propertiess" alt="construction date" />Built in {{ house.constructionYear
                                    }}</span>
                        </div>
                        <div class="fullDetails">
                            <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess"
                                    alt="bed" />{{ house.rooms.bedrooms }}</span>
                            <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess"
                                    alt="bath" />{{ house.rooms.bathrooms }}</span>
                            <span v-if="house.hasGarage" class="properties-text"><img src="@/assets/ic_garage@3x.png"
                                    class="propertiess" alt="garage" />Yes</span>
                        </div>
                    </div>
                    <div class="fullDetails">
                        <p class="description listing-information">{{ house.description }}</p>
                    </div>
                </div>
                <div class="defaultDetails" v-else>
                    <h2>{{ house.location.street }}</h2>
                    <h3>€ {{ house.price }}</h3>
                    <div class="address-container">
                        <p>{{ house.location.zip }}</p>
                        <p>{{ house.location.city }}</p>
                    </div>
                    <div class="default-properties-container">
                        <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess" alt="bed" />{{
                            house.rooms.bedrooms }}</span>
                        <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess" alt="bath" />{{
                            house.rooms.bathrooms }}</span>
                        <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess" alt="size" />{{
                            house.size }} m²</span>
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
    <div v-else :class="['card-container']" :style="{ flexDirection: showFullDetails ? 'column' : 'row' }">
        <img class="house-image" :src="house.image" :alt="house.street + house.houseNumber"
            :style="{ borderRadius: showFullDetails ? '0px' : '8px', margin: showFullDetails ? '0' : '1rem' }" />
        <div class="detail-container">
            <div class="details">
                <div v-if="showFullDetails">
                    <h1>{{ house.location.street }}</h1>
                    <div class="full-detail-container">
                        <div class="fullDetails">
                            <h3>{{ house.street }}</h3>
                        </div>
                        <div class="fullDetails">
                            <span class="properties-text"><img src="@/assets/ic_price@3x.png" class="propertiess"
                                    alt="price" />{{ house.price }}</span>
                            <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess"
                                    alt="size" />{{ house.size }} m²</span>
                            <span class="properties-text"><img src="@/assets/ic_construction_date@3x.png"
                                    class="propertiess" alt="construction date" />Built in {{ house.constructionYear
                                    }}</span>
                        </div>
                        <div class="fullDetails">
                            <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess"
                                    alt="bed" />{{ house.rooms.bedrooms }}</span>
                            <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess"
                                    alt="bath" />{{ house.rooms.bathrooms }}</span>
                            <span v-if="house.hasGarage" class="properties-text"><img src="@/assets/ic_garage@3x.png"
                                    class="propertiess" alt="garage" />Yes</span>
                        </div>
                    </div>
                    <div class="fullDetails">
                        <p class="description listing-information">{{ house.description }}</p>
                    </div>
                </div>
                <div class="defaultDetails" v-else>
                    <h2>{{ house.location.street }}</h2>
                    <div class="address-container">
                        <p>{{ house.location.zip }}</p>
                        <p>{{ house.location.city }}</p>
                    </div>
                    <div class="properties-container">
                        <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess" alt="bed" />{{
                            house.rooms.bedrooms }}</span>
                        <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess" alt="bath" />{{
                            house.rooms.bathrooms }}</span>
                        <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess" alt="size" />{{
                            house.size }} m²</span>
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
import { defineComponent } from 'vue';
import { deleteHouseById } from '@/api';

// type House = {
//     id: number;
//     image: string;
//     location: {
//         street: string;
//         houseNumber: string;
//         houseNumberAddition?: string;
//         city: string;
//         zip: string;
//     };
//     price: number;
//     size: number;
//     constructionYear: number;
//     rooms: {
//         bedroom: number;
//         bathroom: number;
//     },
//     hasGarage: boolean;
//     description: string;
// };

export default defineComponent({
    name: 'HouseCard',
    components: {
        DeleteModal
    },
    props: {
        house: {
            type: Object,
            required: true
        },
        showFullDetails: {
            type: Boolean,
            default: false
        },
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
            this.showDeleteModal = false;
        },
        async confirmDelete() {
            try {
                console.log('Deleting house:', this.house);
                await deleteHouseById(this.house.id);
                console.log('House deleted successfully');
            } catch (error) {
                console.error('Error deleting house:', error);
            } finally {
                this.showDeleteModal = false;
            }
        },
        detail() {
            this.$router.push(`/houses/${this.house.id}`);
        }
    }
});
</script>
  
<style scoped>
.card-container {
    display: flex;
    min-width: 500px;
    background-color: var(--color-background-2);
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.house-image {
    object-fit: cover;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    cursor: pointer;
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

.address-container {
    display: flex;
    gap: 0.5rem;
    color: var(--color-tertiary);
}

.default-properties-container {
    display: flex;
    gap: 1rem;
    margin-top: auto;
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
    color: var(--color-tertiary);
    gap: 0.5rem;
    height: 100%;

}
</style>
  @/api/api