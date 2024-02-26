<template>
  <Layout class="layout-wrapper-details">
    <section class="house-details">

      <RouterLink class="back-arrow-container" :to="{ name: HOME_PAGE }">
        <img alt="Back Arrow icon" class="back-arrow-icon" src="@/assets/ic_back_grey@3x.png" />
        <p class="back-button-label">Back to overview</p>
      </RouterLink>

      <div class="background-img"
        :style="{ backgroundImage: `url('${house?.image}')` }"
      >
        <div class="control-container-mobile" v-if="mobile">
          <RouterLink :to="{ name: HOME_PAGE }">
            <img alt="Back Arrow icon" src="@/assets/ic_back_white@3x.png" class="back-arrow-icon-mobile" />
          </RouterLink>
          <div class="mobile-edit-delete">
            <RouterLink :to="{ name: EDIT_PAGE, params: { id: house?.id } }" v-if="house?.madeByMe">
              <img alt="Edit icon" class="edit-icon-mobile" src="@/assets/ic_edit_white@3x.png"/>
            </RouterLink>
            <img 
              alt="Delete icon" 
              class="delete-icon-mobile" 
              src="@/assets/ic_delete_white@3x.png" 
              v-if="house?.madeByMe"
              @click="displayDeleteWarning"/>
          </div>
        </div>
      </div>
      
      <div class="house-info">
        <Heading as='h2' class="subtitle">{{ house?.location.street }}</Heading>
        <div class="desktop-edit-delete" v-if="!mobile">
          <RouterLink :to="{ name: EDIT_PAGE, params: { id: house?.id } }" @click="() => storeHouses.selectHouseDelete(house?.id)">
            <img alt="Edit icon" class="edit-icon" src="@/assets/ic_edit@3x.png"/>
          </RouterLink>
          <img 
            alt="Delete icon" 
            class="delete-icon" 
            @click="displayDeleteWarning"
            src="@/assets/ic_delete@3x.png" 
          />
        </div>
        <DetailsContainer>
          <DetailContainer>
            <Icon alt="Location icon" src="/src/assets/ic_location@3x.png"/>
            <Paragraph class="house-icon-text">{{ house?.location.zip }} {{ house?.location.city }}</Paragraph>
          </DetailContainer>
        </DetailsContainer>

        <DetailsContainer>
          <DetailContainer>
            <Icon alt="Price icon" src="/src/assets/ic_price@3x.png"/>
            <Paragraph class="house-icon-text">{{ price }}</Paragraph>
          </DetailContainer>

          <DetailContainer>
            <Icon altText="Size icon" iconUrl="/src/assets/ic_size@3x.png"/>
            <Paragraph class="house-icon-text">{{ house?.size}} m2</Paragraph>
          </DetailContainer>

          <DetailContainer>
            <Icon altText="Construction icon" iconUrl="/src/assets/ic_construction_date@3x.png"/>
            <Paragraph class="house-icon-text">Built in {{ house?.constructionYear}}</Paragraph>
          </DetailContainer>
        </DetailsContainer>

        <DetailsContainer>
          <DetailContainer>
            <Icon altText="Bedroom icon" iconUrl="/src/assets/ic_bed@3x.png"/>
            <Paragraph class="house-icon-text">{{ house?.rooms.bedrooms}}</Paragraph>
          </DetailContainer>

          <DetailContainer>
            <Icon altText="Bathroom icon" iconUrl="/src/assets/ic_bath@3x.png"/>
            <Paragraph class="house-icon-text">{{ house?.rooms.bathrooms}}</Paragraph>
          </DetailContainer>

          <DetailContainer>
            <Icon altText="Garage icon" iconUrl="/src/assets/ic_garage@3x.png"/>
            <Paragraph class="house-icon-text">{{ hasGarage }}</Paragraph>
          </DetailContainer>
        </DetailsContainer>

        <Paragraph class="house-description">{{ house?.description }}</Paragraph>
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
  import { computed, onMounted, onBeforeUnmount, ref  } from 'vue';
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

  const mobile = ref(window.innerWidth <= 767);

  const updateMobile = () => {
    mobile.value = window.innerWidth <= 767;
  };

  onMounted(() => {
    window.addEventListener('resize', updateMobile);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateMobile);
  });

</script>

<style scoped>

.layout-wrapper-details {
  padding: 0 0 64px 0;
  margin-bottom: 100px;
}

.control-container-mobile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.back-arrow-icon-mobile {
  height: 24px;
}

.delete-icon-mobile {
  height: 24px;
}

.edit-icon-mobile {
  height: 24px;
}

.mobile-edit-delete {
  display: flex;
  gap: 1.5rem;
}

.back-arrow-container {
  display: none;
  align-items: center;
}

.back-button-label {
  display: none;
}

.background-img {
  position: relative;
  min-height: 300px;
  margin-bottom: -24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.back-arrow-icon {
  height: 16px;
}

.edit-icon {
  height: 20px;
}

.delete-icon {
  height: 20px;
}

.house-info {
  position: relative;
  padding: 24px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--color-background-2);
}

.subtitle {
  padding-bottom: 8px;
  font-size: var(--header-2);
  font-weight: var(--semibold);
}

.house-description {
  padding-top: 24px;
  font-weight: var(--light);
}

.house-icon-text {
  font-weight: var(--light);
  font-size: var(--listing-information);
}

@media screen and (min-width: 768px){
  .background-img {
    min-height: 500px;
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
    color: var(--color-text-primary);
  }

  .house-details {
    max-width: 650px;
    margin: 0;
  }

  .back-button-label {
    /* font-family: var(--font-headings); */
    /* font-size: var(--back-button-label); */
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

  .delete-icon {
    position: absolute;
    width: 20px;
    top: 40px;
    right: 32px;
  }

  .house-info {
    padding: 32px;
    margin-top: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
}

</style>
