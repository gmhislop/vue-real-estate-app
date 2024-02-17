<template>
    <div class="card-container">
        <img class="house-image" :src="house.image" :alt="house.address" />
        <div class="detail-container">
            <div class="details">
                <h2>{{ house.address }}</h2>
                <div v-if="fullDetails">
                    <div class="fullDetails">
                        <h3>{{ house.street }}</h3>
                    </div>
                    <div class="fullDetails">
                        <span class="properties-text"><img src="@/assets/ic_price@3x.png" class="propertiess"
                                alt="price" />{{
                                    house.price }}</span>
                        <span class="properties-text"><img src="@/assets/ic_size@3x.png" class="propertiess" alt="size" />{{
                            house.area }} m²</span>
                        <span class="properties-text"><img src="@/assets/ic_construction_date@3x.png" class="propertiess"
                                alt="construction date" />{{
                                    house.construction_date }} m²</span>
                    </div>
                    <div class="fullDetails">
                        <span class="properties-text"><img src="@/assets/ic_bed@3x.png" class="propertiess" alt="bed" />{{
                            house.bedroom }}</span>
                        <span class="properties-text"><img src="@/assets/ic_bath@3x.png" class="propertiess" alt="bath" />{{
                            house.bathroom }}</span>
                        <span class="properties-text"><img src="@/assets/ic_garage@3x.png" class="propertiess"
                                alt="garage" />{{
                                    house.garage }} m²</span>
                    </div>
                </div>
                <div class="defaultDetails" v-else>
                    <h3>€ {{ house.price }}</h3>
                    <h3>{{ house.street }}</h3>
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

            <div class="button-container">
                <button @click="edit"><img src="@/assets/ic_edit@3x.png" class="icons" alt="Edit" /></button>
                <button @click="delete"><img src="@/assets/ic_delete@3x.png" class="icons" alt="Delete" /></button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        house: Object,
        fullInfo: Array  // Array containing custom info to display
    },
    methods: {
        edit() {
            // Method logic for editing
        },
        delete() {
            // Method logic for deleting
        }
    }
};
</script>
  
<style scoped>
.card-container {
    display: flex;
    position: relative;
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.house-image {
    border-radius: 8px;
}

.button-container {
    position: absolute;
    display: flex;
    align-items: center;
    right: 1rem;
    top: 1rem;
    gap: 0.5rem;
}

.propertiess {
    width: 20px;
    margin-right: 0.5rem;
}

.properties-container {
    display: flex;
    gap: 1rem;
    color: #8C8C8C;
    align-items: center;
}

.properties-text {
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
    flex-direction: column;
    justify-content: center;
}

.fullDetails {
    display: flex;
    gap: 1rem;
    color: #8C8C8C;
    align-items: center;
}

.defaultDetails {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #8C8C8C;
}
</style>
  