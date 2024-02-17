<template>
    <div class="card-container">
        <img class="house-image" :src="house.image" :alt="house.address" />
        <div class="info-container">
            <h2>{{ house.address }}</h2>
            <p>{{ house.price }}</p>
            <p>{{ house.city }}</p>
            <div class="info">
                <span class="propertie-text"><img src="@/assets/ic_bed@3x.png" class="properties" alt="bed" />{{
                    house.bedroom }}</span>
                <span class="propertie-text"><img src="@/assets/ic_bath@3x.png" class="properties" alt="bath" />{{
                    house.bathroom }}</span>
                <span class="propertie-text"><img src="@/assets/ic_size@3x.png" class="properties" alt="size" />{{
                    house.area }} m²</span>
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
        house: Object
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

.properties {
    width: 20px;
    margin-right: 1rem;
}

.propertie-text {
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

.info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.info {
    display: flex;
    gap: 1rem;
    color: #8C8C8C;
    align-items: center;
}
</style>
  