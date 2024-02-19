<template>
    <div>
        <h1>{{ formTitle }}</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group" :class="{ 'has-error': errors.street_name }">
                <label for="street_name">Street name*</label>
                <input type="text" id="street_name" placeholder="Enter the street name" v-model="formData.street_name"
                    required />
                <span v-if="errors.street_name" class="error-message">{{ errors.street_name }}</span>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="house_number">House number*</label>
                    <input type="text" id="house_number" placeholder="Enter house number" v-model="formData.house_number"
                        required />
                    <span v-if="errors.house_number" class="error-message">{{ errors.house_number }}</span>
                </div>
                <div class="form-group">
                    <label for="addition">Addition (optional)</label>
                    <input type="text" id="addition" placeholder="e.g. A" v-model="formData.addition" />
                </div>
            </div>
            <div class="form-group">
                <label for="postal_code">Postal code*</label>
                <input type="text" id="postal_code" placeholder="e.g. 1000AA" v-model="formData.postal_code" required />
                <span v-if="errors.postal_code" class="error-message">{{ errors.postal_code }}</span>
            </div>
            <div class="form-group">
                <label for="city">City*</label>
                <input type="text" id="city" placeholder="e.g. Amsterdam" v-model="formData.city" required />
                <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
            </div>
            <div class="form-group">
                <label for="image">Upload picture (PNG or JPG)</label>
                <input type="file" id="image" accept="image/png, image/jpeg" @change="handleImageUpload"
                    style="display: none;" />
                <label for="image" class="upload-icon" :style="{ border: formData.image ? 'none' : '1px dashed #000000' }">
                    <div class="image-upload-container">
                        <div v-if="formData.image" class="image-preview-container">
                            <button class="delete-button" @click="deleteImage"><img alt="Delete image" class="delete-image"
                                    src="@/assets/ic_clear_white@3x.png" width="24px" /></button>
                            <img class="image-preview" :src="formData.image" alt="Uploaded Image Preview" />
                        </div>
                        <img v-else src="@/assets/ic_upload@3x.png" alt="Upload Image" width="24px" />
                    </div>
                </label>
            </div>
            <div class="form-group">
                <label for="price">Price*</label>
                <input type="text" id="price" placeholder="e.g. €150.000" v-model="formData.price" required />
                <span v-if="errors.price" class="error-message">{{ errors.price }}</span>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="size">Size*</label>
                    <input type="text" id="size" placeholder="e.g. 60m2" v-model="formData.size" required />
                    <span v-if="errors.size" class="error-message">{{ errors.size }}</span>
                </div>
                <div class="form-group">
                    <label for="garage">Garage*</label>
                    <select id="garage" v-model="formData.garage" required>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <span v-if="errors.garage" class="error-message">{{ errors.garage }}</span>
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="bedroom">Bedrooms*</label>
                    <input type="text" id="bedroom" placeholder="Enter amount" v-model="formData.bedroom" required />
                    <span v-if="errors.bedroom" class="error-message">{{ errors.bedroom }}</span>
                </div>
                <div class="form-group">
                    <label for="bathroom">Bathrooms*</label>
                    <input type="text" id="bathroom" placeholder="Enter amount" v-model="formData.bathroom" required />
                    <span v-if="errors.bathroom" class="error-message">{{ errors.bathroom }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="construction_date">Construction date*</label>
                <input type="text" id="construction_date" placeholder="e.g. 1990" v-model="formData.construction_date"
                    required />
                <span v-if="errors.construction_date" class="error-message">{{ errors.construction_date }}</span>
            </div>
            <div class="form-group">
                <label for="description">Description*</label>
                <textarea id="description" placeholder="Enter description" v-model="formData.description" rows="10"
                    required></textarea>
                <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
            </div>
            <button class="submit-button" type="submit">{{ submitButtonText }}</button>
        </form>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import validateForm from '@/helpers/validation.ts';

export default {
    name: 'HousingForm',
    props: {
        listing: Object
    },
    setup(props) {
        const formData = ref({
            street_name: props.listing ? props.listing.street_name : '',
            house_number: props.listing ? props.listing.house_number : '',
            addition: props.listing ? props.listing.addition : '',
            postal_code: props.listing ? props.listing.postal_code : '',
            city: props.listing ? props.listing.city : '',
            price: props.listing ? props.listing.price : '',
            size: props.listing ? props.listing.size : '',
            garage: props.listing ? props.listing.garage : '',
            bedroom: props.listing ? props.listing.bedroom : '',
            bathroom: props.listing ? props.listing.bathroom : '',
            construction_date: props.listing ? props.listing.construction_date : '',
            description: props.listing ? props.listing.description : ''
        });

        const formTitle = computed(() => props.listing ? 'Edit listing' : 'Create new listing');
        const submitButtonText = computed(() => props.listing ? 'SAVE' : 'POST');

        const errors = ref({
            street_name: '',
            house_number: '',
            postal_code: '',
            city: '',
            price: '',
            size: '',
            garage: '',
            bedroom: '',
            bathroom: '',
            construction_date: '',
            description: ''
        });

        const deleteImage = () => {
            formData.value.image = null; // Reset image to null
        };

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                // Read the uploaded file as a data URL
                const reader = new FileReader();
                reader.onload = () => {
                    // Update the formData with the image data
                    formData.value.image = reader.result;
                };
                reader.readAsDataURL(file);
            }
        };

        const submitForm = () => {
            validateForm();
            if (Object.keys(errors.value).length === 0) {
                console.log('Form submitted with data:', formData.value);
                // Additional logic for submitting form
            } else {
                console.error('Form has validation errors:', errors.value);
                alert('Form has validation errors. Please check the form for more details.');
            }
        };

        return {
            formData,
            formTitle,
            submitButtonText,
            submitForm,
            errors,
            handleImageUpload,
            deleteImage
        };
    }
};
</script>

<style scoped>
.upload-icon {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border: 1px dashed #000000;
    border-spacing: 2rem;
    margin-top: 1rem;
}

.image-upload-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-preview-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.delete-button {
    background: none;
    border: none;
    position: absolute;
    padding: 0;
    top: -4px;
    right: -8px;
    cursor: pointer;
}

.image-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
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

.submit-button {
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

.has-error input,
.has-error textarea,
.has-error select {
    border: 2px solid red;
}

.error-message {
    color: red;
    font-size: 0.8rem;
}

h1 {
    margin-bottom: 1rem;
}
</style>
