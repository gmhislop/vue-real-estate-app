<template>
    <div class="details-container">
        <slot></slot>
    </div>
</template>

<style scoped>
.details-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    padding-bottom: 1rem;
}
</style>
