<template>
  <div class="detail-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
}
</style>
