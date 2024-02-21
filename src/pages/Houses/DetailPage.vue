<template>
    <Layout class="layout-wrapper-details">
      <section class="house-details">
  
        <RouterLink class="back-arrow-container" :to="{ name: HOME_PAGE }">
          <img alt="Back Arrow icon" class="back-arrow-icon back-arrow-icon--desktop" src="@/assets/ic_back_grey@3x.png" />
          <p class="back-button-label">Back to overview</p>
        </RouterLink>
  
        <div class="background-img"
          :style="{ backgroundImage: `url('${house?.image}')` }"
        >
          <RouterLink :to="{ name: HOME_PAGE }">
            <img alt="Back Arrow icon" class="back-arrow-icon back-arrow-icon--mobile" src="@/assets/ic_delete_white@3x.png" />
          </RouterLink>
          <RouterLink :to="{ name: EDIT_PAGE, params: { id: house?.id } }" v-if="house?.madeByMe">
            <img alt="Edit icon" class="edit-icon edit-icon--mobile" src="@/assets/ic_delete_white@3x.png"/>
          </RouterLink>
          <img 
            alt="Delete icon" 
            class="delete-icon delete-icon--mobile" 
            src="@/assets/ic_delete_white@3x.png" 
            v-if="house?.madeByMe" 
            @click="displayDeleteWarning"/>
        </div> 
        
        <div class="house-info">
          <Heading as='h2' class="subtitle">{{ house?.location.street }}</Heading>
          <RouterLink :to="{ name: EDIT_PAGE, params: { id: house?.id } }" v-if="house?.madeByMe">
            <img alt="Edit icon" class="edit-icon edit-icon--desktop" src="@/assets/ic_edit@3x.png"/>
          </RouterLink>
          <img 
            alt="Delete icon" 
            class="delete-icon delete-icon--desktop" 
            src="@/assets/ic_delete@3x.png" 
            v-if="house?.madeByMe" 
            @click="displayDeleteWarning"/>
          />
  
          <DetailsContainer>
            <DetailContainer>
              <Icon alt="Location icon" url="/src/assets/ic_location@3x.png"/>
              <Paragraph>{{ house?.location.zip }} {{ house?.location.city }}</Paragraph>
            </DetailContainer>
          </DetailsContainer>
  
          <DetailsContainer>
            <DetailContainer>
              <Icon alt="Price icon" url="/src/assets/ic_price@3x.png"/>
              <Paragraph>{{ price }}</Paragraph>
            </DetailContainer>
  
            <DetailContainer>
              <Icon alt="Size icon" url="/src/assets/ic_size@3x.png"/>
              <Paragraph>{{ house?.size}} m2</Paragraph>
            </DetailContainer>
  
            <DetailContainer>
              <Icon alt="Construction icon" url="/src/assets/ic_construction_date@3x.png"/>
              <Paragraph>Built in {{ house?.constructionYear}}</Paragraph>
            </DetailContainer>
          </DetailsContainer>
  
          <DetailsContainer>
            <DetailContainer>
              <Icon alt="Bedroom icon" url="/src/assets/bed.png"/>
              <Paragraph>{{ house?.rooms.bedrooms}}</Paragraph>
            </DetailContainer>
  
            <DetailContainer>
              <Icon alt="Bathroom icon" url="/src/assets/bathtub.png"/>
              <Paragraph>{{ house?.rooms.bathrooms}}</Paragraph>
            </DetailContainer>
  
            <DetailContainer>
              <Icon alt="Garage icon" url="/src/assets/garage.png"/>
              <Paragraph>{{ hasGarage }}</Paragraph>
            </DetailContainer>
          </DetailsContainer>
  
          <Paragraph>{{ house?.description }}</Paragraph>
        </div>
      </section>
    </Layout>
  </template>
  
  <script setup>
    import { useHousesStore } from '@/stores/houses';
    import DetailsContainer from '@/components/atoms/DetailsContainer/DetailsContainer.vue';
    import DetailContainer from '@/components/atoms/DetailsContainer/DetailContainer.vue';
    import Icon from '@/components/atoms/Icons/Icon.vue';
    import { EDIT_PAGE, HOME_PAGE } from '@/router';
    import { computed } from 'vue';
    import Paragraph from '@/components/atoms/typography/Paragraph.vue';
    import Layout from '@/components/templates/Layout/Layout.vue';
    import { formatCurrencyNoEuro } from '@/helpers/formatCurrency';
  
    const storeHouses = useHousesStore();
    if (!storeHouses.houseDetails) {
      await storeHouses.fill()
    }
    const house = computed(() => storeHouses.houseDetails)
    const price = computed(() => formatCurrencyNoEuro(house.value?.price) || '0.00');
    const hasGarage = computed(() => house.value?.hasGarage ? 'Yes': 'No') 

    function displayDeleteWarning() {
        storeHouses.displayDeleteWarning(storeHouses.houseDetails.id)
    }
  
  </script>
  
  <style scoped>
  
    .layout-wrapper-details {
      padding: 0 0 64px 0;
    }
  
    .back-arrow-container {
      display: none;
    }
  
    .back-button-label {
      display: none;
    }
  
    .background-img {
      position: relative;
      min-height: 300px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  
    .back-arrow-icon {
      position: absolute;
      width: 20px;
      top: 48px;
      left: 24px;
    }
  
    .back-arrow-icon--mobile {
      display: block;
    }
  
    .back-arrow-icon--desktop {
      display: none;
    }
  
    .edit-icon {
      position: absolute;
      width: 20px;
      top: 48px;
      right: 64px;
    }
  
    .edit-icon--mobile {
      display: block;
    }
  
    .edit-icon--desktop {
      display: none;
    }
  
    .delete-icon {
      position: absolute;
      width: 20px;
      top: 48px;
      right: 24px;
    }
  
    .delete-icon--mobile {
      display: block;
    }
  
    .delete-icon--desktop {
      display: none;
    }
  
    .house-info {
      position: relative;
      padding: 24px;
      margin-top: -24px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: var(--background-2);
    }
  
    .subtitle {
      padding-bottom: 8px;
    }
  
  @media screen and (min-width: 768px){
    .background-img {
      min-height: 500px;
    }
  
  }
  
  @media screen and (max-width: 1023px){
    .layout-wrapper-details {
      padding: 0 0 64px 0;
    }
  }
  
  @media screen and (min-width: 1024px) {
  
    .layout-wrapper-details {
      padding: 24px 165px 0 165px;
    }
  
    .back-arrow-container {
      display: flex;
      gap: 16px;
      margin: 24px 0;
      color: var(--text-primary);
    }
  
    .house-details {
      max-width: 650px;
      margin: 0;
    }
  
    .back-arrow-icon {
      position: absolute;
      width: 24px;
      top: 48px;
      left: 32px;
    }
    .back-arrow-icon--mobile {
      display: none;
    }
  
    .back-arrow-icon--desktop {
      display: block;
      position: inherit;
    }
  
    .back-button-label {
      font-family: var(--font-headings);
      font-size: var(--back-button-label);
      font-weight: var(--semibold);
      display: block;
    }
    .background-img {
      min-height: 500px;
    }
  
    .edit-icon {
      position: absolute;
      width: 20px;
      top: 40px;
      right: 72px;
    }
  
    .edit-icon--mobile {
      display: none;
    }
  
    .edit-icon--desktop {
      display: block;
    }
  
    .delete-icon {
      position: absolute;
      width: 20px;
      top: 40px;
      right: 32px;
    }
  
    .delete-icon--mobile {
      display: none;
    }
  
    .delete-icon--desktop {
      display: block;
    }
  
    .house-info {
      position: relative;
      padding: 32px;
      margin-top: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
    
  </style>
  