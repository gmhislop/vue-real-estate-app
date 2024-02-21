<template>
    <layout class="layout-wrapper-details">
      <section class="create-house-details">
        <heading page-title="Create new listing"/>
        <house-form :handle-submit="handleSubmit" :values="newHouse" button-text="POST"/>
      </section>
    </layout>
  </template>
  
  <script setup>
  import { useHousesStore } from '@/stores/houses'
  import Layout from '@/components/templates/Layout/Layout.vue';
  import Heading from '@/components/atoms/typography/Heading.vue';
  import { useRouter } from 'vue-router';
  import HouseForm from '@/components/HouseForm/HouseForm.vue'
  import { DETAIL_PAGE } from '@/router';
  
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
  
  const router = useRouter();
  const storeHouses = useHousesStore();
  
  async function handleSubmit(formData, houseImageFile) {
    const savedHouse = await storeHouses.createHouse(formData, houseImageFile)
    router.push({name: DETAIL_PAGE, params: {id: savedHouse.id}})
  }
  </script>
  
  <style scoped>
  .layout-wrapper-details {
    padding-bottom: 4rem;
    background-image: url("@/assets/img_background@3x.png");
    background-repeat: no-repeat;
    background-size: 130%;
    background-position: right -6.25rem bottom;
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
  
    .layout-wrapper-details {
      background-size: cover;
      background-position: right top;
    }
  }
  </style>
  
  