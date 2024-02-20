<template>
    <h1 class="title">
        <slot></slot>
    </h1>
</template>
  
<script setup>
</script>
  
<style scoped>
.title {
    font-size: var(--input-errors);
    font-weight: var(--semibold);
    padding: 0.5rem 0;
}

@media screen and (min-width: 1024px) {
    .title {
        font-size: var(--input-errors);
    }
}
</style>
  