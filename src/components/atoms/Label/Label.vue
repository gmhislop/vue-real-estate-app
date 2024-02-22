<template>
  <h2 class="title">
    <slot></slot>
  </h2>
</template>

<script setup></script>

<style scoped>
.title {
  font-size: var(--input-errors);
  font-weight: var(--regular);
  padding: 0.5rem 0;
}

@media screen and (min-width: 1024px) {
  .title {
    font-size: var(--input-errors);
  }
}
</style>
