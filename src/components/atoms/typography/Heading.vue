<template>
  <component :is="as" class="custom-heading">
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  as: {
    type: String,
    default: 'h1'
  }
})
</script>

<style scoped>
.custom-heading {
  font-family: var(--font-headings);
  font-size: var(--header-1);
  font-weight: var(--bold);
}

.custom-heading.as-h2 {
  font-size: var(--header-2);
}

.custom-heading.as-h3 {
  font-size: var(--header-3);
}
</style>
