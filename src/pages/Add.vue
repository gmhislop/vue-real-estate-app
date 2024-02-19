<template>
    <div class="add">
        <div class="add-container">
            <router-link class="back-link" to="/"><img src="@/assets/ic_back_grey@3x.png" class="back-icon"
                    alt="back" />Back to
                overview</router-link>
            <HousingForm :listing=null />
        </div>
    </div>
</template>

<script>
import HousingForm from '@/components/HousingForm.vue';

export default {
    name: 'Add',
    components: {
        HousingForm
    }
};
</script>

<style scoped>
.add {
    background-image: url('@/assets/img_background@3x.png');
    background-size: cover;
    width: 100%;
    height: 100%;
}

.add-container {
    max-width: 800px;
    padding: 1rem 10vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.back-icon {
    margin-right: 0.5rem;
    height: 1rem;
}

.back-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-text);
    cursor: pointer;
    width: fit-content;
    margin-bottom: 1rem;
}
</style>
