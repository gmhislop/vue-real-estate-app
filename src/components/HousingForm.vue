<template>
    <div>
        <h2>{{ formTitle }}</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="formData.title" required />
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" v-model="formData.description" required></textarea>
            </div>
            <!-- Additional form fields for listing details -->
            <button type="submit">{{ submitButtonText }}</button>
        </form>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
    name: 'HousingForm',
    props: {
        listing: Object // Listing object for editing, null for creating
    },
    setup(props) {
        const formData = ref({
            title: props.listing ? props.listing.title : '',
            description: props.listing ? props.listing.description : ''
        });

        const formTitle = computed(() => props.listing ? 'Edit Listing' : 'Add New Listing');
        const submitButtonText = computed(() => props.listing ? 'Update' : 'Create');

        const submitForm = () => {
            console.log('Form submitted with data:', formData.value);
            // Additional logic for submitting form
        };

        return {
            formData,
            formTitle,
            submitButtonText,
            submitForm
        };
    }
};
</script>
  
<style scoped>
/* Your scoped styles go here */
</style>
