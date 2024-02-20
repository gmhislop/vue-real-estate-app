<template>
  <img :alt="altText" class="icon" :src="iconUrl" />
</template>

<script setup>

const props = defineProps({
  iconUrl: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
