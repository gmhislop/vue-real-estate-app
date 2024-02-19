<template>
    <div>
        <h1>{{ formTitle }}</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group" :class="{ 'has-error': errors.street }">
                <label for="street">Street name*</label>
                <input type="text" id="street" placeholder="Enter the street name" v-model="formData.street" required />
                <span v-if="errors.street" class="error-message">{{ errors.street }}</span>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="houseNumber">House number*</label>
                    <input type="text" id="houseNumber" placeholder="Enter house number" v-model="formData.houseNumber"
                        required />
                    <span v-if="errors.houseNumber" class="error-message">{{ errors.houseNumber }}</span>
                </div>
                <div class="form-group">
                    <label for="houseNumberAddition">Addition (optional)</label>
                    <input type="text" id="houseNumberAddition" placeholder="e.g. A"
                        v-model="formData.houseNumberAddition" />
                    <span v-if="errors.houseNumberAddition" class="error-message">{{ errors.houseNumberAddition }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="zip">Postal code*</label>
                <input type="text" id="zip" placeholder="e.g. 1000AA" v-model="formData.zip" required />
                <span v-if="errors.zip" class="error-message">{{ errors.zip }}</span>
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
                    <label for="hasGarage">Garage*</label>
                    <select id="hasGarage" v-model="formData.hasGarage" required>
                        <option value="" disabled selected>Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <span v-if="errors.hasGarage" class="error-message">{{ errors.hasGarage }}</span>
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="bedrooms">Bedrooms*</label>
                    <input type="text" id="bedrooms" placeholder="Enter amount" v-model="formData.bedrooms" required />
                    <span v-if="errors.bedrooms" class="error-message">{{ errors.bedrooms }}</span>
                </div>
                <div class="form-group">
                    <label for="bathrooms">Bathrooms*</label>
                    <input type="text" id="bathrooms" placeholder="Enter amount" v-model="formData.bathrooms" required />
                    <span v-if="errors.bathrooms" class="error-message">{{ errors.bathrooms }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="constructionYear">Construction year*</label>
                <input type="text" id="constructionYear" placeholder="e.g. 1990" v-model="formData.constructionYear"
                    required />
                <span v-if="errors.constructionYear" class="error-message">{{ errors.constructionYear }}</span>
            </div>
            <div class="form-group">
                <label for="description">Description*</label>
                <textarea id="description" placeholder="Enter description" v-model="formData.description" rows="10"
                    required></textarea>
                <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
            </div>
            <button class="submit-button" type="submit" @click="submitForm">{{ submitButtonText }}</button>
        </form>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import validateForm from '@/helpers/validation.ts';
import { useHousesStore } from '@/stores/houses';
import { uploadHouseImage, createHouse } from '@/api';

export default {
    name: 'HousingForm',
    props: {
        house: Object
    },
    setup(props) {
        const housesStore = useHousesStore();

        const formData = ref({
            street: props.house ? props.house.location.street : '',
            houseNumber: props.house ? props.house.location.houseNumber : '',
            additionHousenumber: props.house ? props.house.loction.additionHousenumber : '',
            zip: props.house ? props.house.location.zip : '',
            city: props.house ? props.house.location.city : '',
            price: props.house ? props.house.price : '',
            size: props.house ? props.house.size : '',
            hasGarage: props.house ? props.house.hasGarage : false,
            bedrooms: props.house ? props.house.rooms.bedrooms : '',
            bathrooms: props.house ? props.house.rooms.bathrooms : '',
            constructionYear: props.house ? props.house.constructionYear : '',
            description: props.house ? props.house.description : '',
            image: null
        });

        const formTitle = computed(() => props.house ? 'Edit listing' : 'Create new listing');
        const submitButtonText = computed(() => props.house ? 'SAVE' : 'POST');

        const errors = ref({
            street: '',
            houseNumber: '',
            houseNumberAddition: '',
            zip: '',
            city: '',
            price: '',
            size: '',
            hasGarage: '',
            bedrooms: '',
            bathrooms: '',
            constructionYear: '',
            description: '',
            image: null
        });

        const deleteImage = () => {
            formData.value.image = null;
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

        const submitForm = async () => {
            validateForm();

            if (Object.keys(errors.value).length === 0) {
                try {
                    let newHouse;

                    if (props.house) {

                    } else {
                        // Create new house
                        newHouse = await createHouse(formData.value);
                    }

                    if (formData.value.image && newHouse) {
                        // Upload image for the newly created house
                        await uploadHouseImage(newHouse.id, formData.value.image);
                    }

                    console.log('New house created:', newHouse);

                } catch (error) {
                    console.error('Error creating/editing house:', error);
                    alert('Failed to create/edit house. Please try again later.');
                }
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
    border: 1px dashed (var(--color-text));
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
    background-color: var(--color-primary);
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
