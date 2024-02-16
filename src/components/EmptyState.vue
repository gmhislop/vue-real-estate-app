<template>
    <div class="empty">
        <img class="emptyImage" src="@/assets/img_empty_houses@3x.png" alt="Empty Houses" />
        <p>No results found</p>
        <p>Please try another keyword</p>
    </div>
</template>
  
<script>
export default {
    name: 'EmptyState'
};
</script>
  
<style scoped>
.empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.emptyImage {
    width: 400px;
    margin-bottom: 2rem;
}
</style>
  