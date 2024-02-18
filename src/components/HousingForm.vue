<template>
    <div>
        <h1>{{ formTitle }}</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="street_name">Street name*</label>
                <input type="text" id="title" placeholder="Enter the street name" v-model="formData.street_name" required />
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="house_number">House number*</label>
                    <input type="text" id="title" placeholder="Enter house number" v-model="formData.house_number"
                        required />
                </div>
                <div class="form-group">
                    <label for="addition">Addition (optional)</label>
                    <input type="text" id="addition" placeholder="e.g. A" v-model="formData.addition" />
                </div>
            </div>
            <div class="form-group">
                <label for="postal_code">Postal code*</label>
                <input type="text" id="postal_code" placeholder="e.g. 1000AA" v-model="formData.postal_code" required />
            </div>
            <div class="form-group">
                <label for="city">City*</label>
                <input type="text" id="city" placeholder="e.g. Amsterdam" v-model="formData.city" required />
            </div>
            <div class="form-group">
                <label for="image">Upload picture (PNG or JPG)</label>
                <input type="file" id="image" accept="image/png, image/jpeg" @change="handleImageUpload"
                    style="display: none;" />
                <label for="image" class="upload-icon">
                    <img src="@/assets/ic_upload@3x.png" alt="Upload Image" width="24px" />
                </label>
            </div>
            <div class="form-group">
                <label for="postal_code">Price*</label>
                <input type="text" id="postal_code" placeholder="e.g. €150.000" v-model="formData.postal_code" required />
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="size">Size*</label>
                    <input type="text" id="size" placeholder="e.g. 60m2" v-model="formData.size" required />
                </div>
                <div class="form-group">
                    <label for="garage">Garage*</label>
                    <select id="garage" placeholder="Select" v-model="formData.garage" required>
                        <option value="">Select</option>
                        <option v-for="i in 10" :value="i">{{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="bedroom">Bedrooms*</label>
                    <input type="text" id="bedroom" placeholder="Enter amount" v-model="formData.bedroom" required />
                </div>
                <div class="form-group">
                    <label for="bathroom">Bathrooms*</label>
                    <input type="text" id="bathroom" placeholder="Enter amount" v-model="formData.bathroom" required />
                </div>
            </div>
            <div class="form-group">
                <label for="construction_date">Construction date*</label>
                <input type="text" id="construction_date" placeholder="e.g. 1990" v-model="formData.construction_date"
                    required />
            </div>
            <div class="form-group">
                <label for="description">Description*</label>
                <textarea id="description" placeholder="Enter description" v-model="formData.description" rows="10"
                    required></textarea>
            </div>
            <button type="submit">{{ submitButtonText }}</button>
        </form>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
    name: 'HousingForm',
    props: {
        listing: Object
    },
    setup(props) {
        const formData = ref({
            street_name: '' ? props.listing.street_name : '',
            house_number: '' ? props.listing.house_number : '',
            addition: '' ? props.listing.addition : '',
            postal_code: '' ? props.listing.postal_code : '',
            city: '' ? props.listing.city : '',
            price: '' ? props.listing.price : '',
            size: '' ? props.listing.size : '',
            garage: '' ? props.listing.garage : '',
            bedroom: '' ? props.listing.bedroom : '',
            bathroom: '' ? props.listing.bathroom : '',
            construction_date: '' ? props.listing.construction_date : '',
            description: '' ? props.listing.description : ''
        });

        const formTitle = computed(() => props.listing ? 'Edit listing' : 'Create new listing');
        const submitButtonText = computed(() => props.listing ? 'Update' : 'POST');

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
.upload-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border: 1px dashed #000000;
    border-spacing: 2rem;
    margin-top: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
}

input,
textarea,
select {
    padding: 1rem;
    border: none;
    border-radius: 8px;
    margin-top: 0.5rem;
    width: 100%;
}

button {
    display: flex;
    align-items: center;
    margin-left: auto;
    background-color: #EB5440;
    color: white;
    padding: 0.5rem 4rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
}

.form-group-inline {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>
