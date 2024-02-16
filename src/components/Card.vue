<template>
    <div class="card">
        <div class="image-container">
            <img :src="imageUrl" :alt="altText" class="image" />
        </div>
        <div class="info-container">
            <h2>{{ streetAddress }}</h2>
            <p>{{ postalCode }} {{ city }}</p>
        </div>
        <div class="button-container">
            <router-link class="link" :to="{ name: 'editRoute' }">Edit</router-link>
            <button @click="confirmDelete">Delete</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    imageUrl: String,
    altText: String,
    streetAddress: String,
    postalCode: String,
    city: String,
    id: String
});

const confirmDelete = () => {
    const confirmMessage = `Are you sure you want to delete ${props.streetAddress}?`;
    if (window.confirm(confirmMessage)) {
        deleteItem();
    }
};

const deleteItem = async () => {
    try {
        // Make a DELETE request to the API endpoint with the itemId
        // const response = await axios.delete(`/api/items/${props.id}`);
        // console.log('Item deleted successfully:', response.data);
        // Optionally, perform any necessary actions after successful deletion

        console.log('Item deleted successfully');
    } catch (error) {
        console.error('Error deleting item:', error);
        // Handle error cases, such as displaying an error message to the user
    }
};
</script>
  
<style scoped>
.card {
    display: flex;
    width: 90%;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

.image-container {
    flex: 1;
}

.image {
    width: 100%;
    height: auto;
}

.info-container {
    flex: 2;
    padding: 1rem;
}

.button-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>
  