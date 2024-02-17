<template>
    <div>
        <HousingForm :listing=null />
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
