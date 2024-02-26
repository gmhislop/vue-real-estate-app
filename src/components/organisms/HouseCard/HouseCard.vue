<template>
  <article class="house-card">
    <img alt="Picture of a house" class="house-image" :src="house.image ? house.image : ' ' " />
    <div class="house-info-container">
      <Heading as="h3" class="title">{{ house.location.street }} {{ house.location.houseNumber }}</Heading>
      <Paragraph class="house-pice">{{ formattedPrice }}</Paragraph>
      <Paragraph variant="paragraph-light"
        >{{ house.location.zip }} {{ house.location.city }}</Paragraph
      >
      <DetailsContainer class="house-details-container">
        <DetailContainer>
          <Icon altText="Bedroom icon" iconUrl="/src/assets/ic_bed@3x.png" />
          <Paragraph>{{ house.rooms.bedrooms }}</Paragraph>
        </DetailContainer>

        <DetailContainer>
          <Icon altText="Bathroom icon" iconUrl="/src/assets/ic_bath@3x.png" />
          <Paragraph>{{ house.rooms.bathrooms }}</Paragraph>
        </DetailContainer>

        <DetailContainer>
          <Icon altText="Size icon" iconUrl="/src/assets/ic_size@3x.png" />
          <Paragraph>{{ house.size }} m<sup>2</sup></Paragraph>
        </DetailContainer>
      </DetailsContainer>
    </div>
    <div class="icons-container">
    <router-link :to="{ name: EDIT_PAGE, params: { id: house.id } }" v-if="house.madeByMe">
      <img alt="Edit icon" class="edit-icon" src="/src/assets/ic_edit@3x.png" />
    </router-link>
    <img
      alt="Delete icon"
      class="delete-icon"
      src="@/assets/ic_delete@3x.png"
      v-if="house.madeByMe"
      @click="displayDeleteWarning"
    />
    </div>
  </article>
</template>

<script lang="ts" setup>
import { useHousesStore } from '@/stores/houses'
import { defineProps } from 'vue'
import { formatCurrency} from '@/helpers/formatCurrency'
import { EDIT_PAGE } from '@/router'
import Heading from '@/components/atoms/typography/Heading.vue'
import Paragraph from '@/components/atoms/typography/Paragraph.vue'
import DetailsContainer from '@/components/atoms/DetailsContainer/DetailsContainer.vue'
import DetailContainer from '@/components/atoms/DetailsContainer/DetailContainer.vue'
import Icon from '@/components/atoms/Icons/Icon.vue'
import type { House } from '@/types/types'

const storeHouses = useHousesStore()
const props = defineProps<{
  house: House;
}>()

function displayDeleteWarning(event: Event) {
  event.preventDefault()
  storeHouses.displayDeleteWarning(props.house.id)
}

const formattedPrice = formatCurrency(props.house.price);
</script>

<style scoped>

.title {
  font-weight: var(--regular);
  color: var(--color-text-primary);
}

.house-pice {
  font-weight: var(--medium);
  color: var(--color-text-primary);
}

.house-card {
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  background-color: var(--color-background-2);
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

.house-details-container {
  gap: 0.75rem;
}

.edit-icon,
.delete-icon {
  height: 1.5rem;
  cursor: pointer;
  align-items: center;
  display: flex;
}

.icons-container {
  display: flex;
  position: absolute;
  align-items: center;
  right: 1rem;
  gap: 1rem;
}

.edit-icon:hover, .delete-icon:hover {
  filter: brightness(0.8);
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
}
</style>
