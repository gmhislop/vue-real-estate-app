<template>
    <div class="background-image">
      <Layout>
        <section class="create-house-details">
        <RouterLink class="back-arrow-container" :to="{ name: DETAIL_PAGE }">
          <img alt="Back Arrow icon" class="back-arrow-icon" src="@/assets/ic_back_grey@3x.png" />
          <p class="back-button-label">Back to detail page</p>
        </RouterLink>
  
        <Heading>Edit listing</Heading>
        
        <HouseForm 
          :handle-submit="handleSubmit" 
          :values="formValues" buttonText="SAVE" v-if="storeHouses.houseDetails"/>
      </section>
    </Layout> 
  </div>
  </template>
  
  <script setup>
    import { useHousesStore } from '@/stores/houses'
    import Layout from '@/components/templates/Layout/Layout.vue';
    import Heading from '@/components/atoms/typography/Heading.vue';

    import { useRouter } from 'vue-router';
    import HouseForm from '@/components/organisms/HouseForm/HouseForm.vue'
    import { reactive, computed } from 'vue';
    import { DETAIL_PAGE } from '@/router';
  
    const storeHouses = useHousesStore();
  
    if (!storeHouses.houseDetails) {
      await storeHouses.fill()
    }
  
    const house = computed(() => storeHouses.houseDetails)
  
    let formValues = reactive({
      streetName: house.value?.location.street.split(' ')[0], 
      houseNumber: house.value?.location.houseNumber,
      numberAddition: house.value?.location?.houseNumberAddition || '',
      image: house.value?.image,
      price: house.value?.price,
      bedrooms: house.value?.rooms.bedrooms,
      bathrooms: house.value?.rooms.bathrooms,
      size: house.value?.size,
      description: house.value?.description,
      city: house.value?.location.city,
      zip: house.value?.location.zip,
      createdAt: house.value.createdAt,
      constructionYear: house.value?.constructionYear,
      hasGarage: house.value?.hasGarage,
    }) 
    const router = useRouter();
  
    async function handleSubmit(formData) {
      const savedHouse = await storeHouses.updateHouse(formData, house.value.id);
      console.log(savedHouse)
      return savedHouse;
    }
  
  </script>
  
  <style scoped>
    .background-image {
    padding-bottom: 4rem;
    background-image: url("@/assets/img_background@3x.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  
    .create-house-details {
      max-width: 28.125rem;
      margin: auto;
    }
  
    @media screen and (min-width: 48rem){
      .create-house-details {
        max-width: 31.25rem;
      }
    }
  
    @media screen and (min-width: 64rem) {
      .create-house-details {
        max-width: 23.625rem;
        margin: 0;
      }
  
      .layout-wrapper-details {
        background-size: cover;
        background-position: right top;
      }
    }

  .back-arrow-icon {
    height: 1rem;
  }
  .back-arrow-container {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
    color: var(--color-text-primary);
    font-weight: var(--semibold);
    align-items: center;
  }
  </style>
  