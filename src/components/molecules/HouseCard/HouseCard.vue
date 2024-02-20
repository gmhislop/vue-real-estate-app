<template>
  <article class="house-card">
    <img alt="Picture of a house" class="house-image" :src="house.image" />
    <div class="house-info-container">
      <Heading>{{ house.location.street }}</Heading>
      <Paragraph>{{ formatCurrency(house.price) }}</Paragraph>
      <Paragraph variant="paragraph-light"
        >{{ house.location.zip }} {{ house.location.city }}</Paragraph
      >
      <DetailsContainer class="house-DetailsContainer">
        <DetailContainer>
          <Icon alt="Bedroom icon" url="/src/assets/ic_bed@3x.png" />
          <Paragraph>{{ house.rooms.bedrooms }}</Paragraph>
        </DetailContainer>

        <DetailContainer>
          <Icon alt="Bathroom icon" url="/src/assets/ic_bath@3x.png" />
          <Paragraph>{{ house.rooms.bathrooms }}</Paragraph>
        </DetailContainer>

        <DetailContainer>
          <Icon alt="Size icon" url="/src/assets/ic_size@3x.png" />
          <Paragraph>{{ house.size }} m<sup>2</sup></Paragraph>
        </DetailContainer>
      </DetailsContainer>
    </div>
    <router-link :to="{ name: EDIT_PAGE, params: { id: house.id } }" v-if="house.madeByMe">
      <img alt="Edit icon" class="edit-icon" src="@/assets/ic_edit@3x.png" />
    </router-link>
    <img
      alt="Delete icon"
      class="delete-icon"
      src="@/assets/ic_delete@3x.png"
      v-if="house.madeByMe"
      @click="displayDeleteWarning"
    />
  </article>
</template>

<script setup>
import { useHousesStore } from '@/stores/houses'
import { defineProps } from 'vue'
import formatCurrency from '@/utils/formatCurrency'
import { EDIT_PAGE } from '@/router'
import { Paragraph, DetailContainer, Icon, DetailsContainer, Heading } from '@/components/atoms'

const storeHouses = useHousesStore()
const props = defineProps({
  house: {
    type: Object,
    required: true
  }
})

function displayDeleteWarning(event) {
  event.preventDefault()
  storeHouses.displayDeleteWarning(props.house.id)
}
</script>

<style scoped>
.house-card {
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  background-color: var(--background-2);
  border-radius: 1rem;
  padding: 0.75rem;
  box-shadow: 0 0 0.1875rem 0.1875rem rgba(195, 195, 195, 0.1);
}

.house-image {
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 1rem;
  object-fit: cover;
  object-position: left;
}

.house-info-container {
  color: var(--text-primary);
  gap: 1rem;
}

.house-DetailsContainer {
  margin-top: 1rem;
  gap: 0.75rem;
}

.edit-icon,
.delete-icon {
  position: absolute;
  width: 1.5rem;
  top: 1.25rem;
}

.edit-icon {
  right: 5rem;
}

.delete-icon {
  right: 2.5rem;
}

@media screen and (min-width: 64rem) {
  .house-card {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .house-image {
    width: 10.9375rem;
    height: 10.9375rem;
  }

  .house-info-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .edit-icon {
    width: 1.875rem;
    top: 3.25rem;
    right: 6.25rem;
  }

  .delete-icon {
    width: 1.875rem;
    top: 3.25rem;
    right: 3.125rem;
  }
}
</style>
