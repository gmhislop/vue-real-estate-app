<template>
    <section class="layout">
        <slot></slot>
    </section>
</template>
  
<style scoped>
.layout {
    max-width: 1440px;
    padding: 1.5rem 1.5rem 0 1.5rem;
    margin: auto;
}

@media screen and (min-width: 1024px) {
    .layout {
        padding: 1.5rem 10.3125rem 0 10.3125rem;
        height: 100%;
    }
}
</style>
  