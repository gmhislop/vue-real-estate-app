<template>
  <div class="background-image">
    <layout>
      <RouterLink class="back-arrow-container" to="" @click="this.$router.go(-1)">
          <img alt="Back Arrow icon" class="back-arrow-icon" src="@/assets/ic_back_grey@3x.png" />
          <p class="back-button-label">Back</p>
        </RouterLink>
      <section class="create-house-details">
        <Heading>Create new listing</Heading>
        <house-form :handle-submit="handleSubmit" :values="newHouse" button-text="POST"/>
      </section>
    </layout>
  </div>
  </template>
  
  <script setup>
  import { useHousesStore } from '@/stores/houses'
  import Layout from '@/components/templates/Layout/Layout.vue';
  import Heading from '@/components/atoms/typography/Heading.vue';
  import HouseForm from '@/components/organisms/HouseForm/HouseForm.vue'
  
  const newHouse = {
    location: {
      streetName: '', 
      houseNumber: '',
      zip: '',
      city: '', 
    },
    numberAddition: '',
    image: '',
    price: '',
    size: '',
    hasGarage: '',
    rooms: {
      bedrooms: '',
      bathrooms: '',
    },
    constructionYear: '',
    description: ''
  }
  const storeHouses = useHousesStore();
  
  async function handleSubmit(formData, houseImageFile) {
    const savedHouse = await storeHouses.createHouse(formData, houseImageFile);
    return savedHouse;
  }
  </script>
  
  <style scoped>
  .background-image {
    padding-bottom: 4rem;
    background-image: url("@/assets/img_background@3x.png");
    background-repeat: no-repeat;
    background-size: 132%;
    background-position: right -100px bottom;
  }
  
  .create-house-details {
    max-width: 28.125rem;
    margin: auto;
  }
  
  @media screen and (min-width: 48rem) {
    .create-house-details {
      max-width: 31.25rem;
    }
  }
  
  @media screen and (min-width: 64rem) {
    .create-house-details {
      max-width: 23.625rem;
      margin: 0;
    }
  
    .background-image {
      background-size: cover;
      background-position: right top;
    }
  }

  .back-arrow-icon {
      height: 16px;
    }
  .back-arrow-container {
    display: flex;
    gap: 16px;
    margin: 24px 0;
    color: var(--color-text-primary);
    font-weight: var(--semibold);
    align-items: center;
  }
  </style>
  
  