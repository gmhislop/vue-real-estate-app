<template>
    <Label>{{ label }}</Label>
    <label class="upload-image-container" :class="{ 'input--error': errors.length > 0 }" for="image">
        <span class="image-upload-block" v-if="!previewImageUrl">
            <img class="upload-house-icon" src="@/assets/ic_upload@3x.png" alt="Upload house" />
        </span>
        <img class="uploaded-preview-image" :src="previewImageUrl" v-if="previewImageUrl" alt="Uploaded preview" />
        <img class="cancel-uploaded-image-icon" src="@/assets/ic_clear_white@3x.png" v-if="previewImageUrl" @click="clearImage"
            alt="Clear uploaded image" />
    </label>
    <Paragraph variant="error-message" v-for="error in errors" :key="error.$uid">
        {{ error.$message }}
    </Paragraph>
    <input id="image" type="file" ref="file" @change="displayPreviewImage" hidden />
</template>
  
<script setup>
import Paragraph from "@/components/atoms/typography/Paragraph.vue";
import Label from "@/components/atoms/Label/Label.vue";

defineProps({
    label: String,
    imageFile: {
        type: File,
        default: null
    },
    previewImageUrl: {
        type: String,
        default: ''
    },
    errors: {
        default: []
    }
})

const emit = defineEmits(['update:previewImageUrl', 'update:imageFile'])

const clearImage = (event) => {
    event.preventDefault();
    // Reset the preview image.
    emit('update:previewImageUrl', '');
    // Set value of the file input to null.
    emit('update:imageFile', null);
}

const displayPreviewImage = (event) => {
    if (!event.target.files[0]) return
    // Generate preview image. 
    const url = URL.createObjectURL(event.target.files[0])
    // Emit the changes for v-model to update.
    emit('update:previewImageUrl', url)
    emit('update:imageFile', event.target.files[0]);
}
</script>
  
<style scoped>
.upload-image-container {
    position: relative;
    width: 6.5rem;
    z-index: 0;
}

.input--error {
    border: 1px solid var(--primary);
}

.image-upload-block {
    display: block;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23E8E8E8FF' stroke-width='4' stroke-dasharray='10%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    width: 6.5rem;
    height: 6.5rem;
    justify-content: center;
    align-items: center;
}

.upload-house-icon {
    width: 1.5rem;
}

.uploaded-preview-image {
    width: 6.5rem;
    height: 6.5rem;
    object-fit: cover;
    object-position: left;
    border-radius: 5px;
}

.cancel-uploaded-image-icon {
    position: absolute;
    width: 1.5rem;
    left: 5.5rem;
    top: -0.375rem;
    cursor: pointer;
}
</style>
  