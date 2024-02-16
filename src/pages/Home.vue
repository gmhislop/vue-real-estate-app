<template>
    <div class="home">
        <div v-if="shouldShowEmptyState">
            <EmptyState />
        </div>
        <div v-else class="card-container-flex">
            <div class="title-container">
                <h2>Houses</h2>
                <button class='createButton' @click="confirmDelete">+ CREATE NEW</button>
            </div>
            <div class="card-container-flex">
                <div class="card-container">
                    <img class='house-image' src="https://via.placeholder.com/150" alt="Placeholder" />
                    <div class="info-container">
                        <h2>1234 Main St</h2>
                        <p>$500.000</p>
                        <p>12345 City</p>
                        <div class="info">
                            <span>BA</span>
                            <span>BR</span>
                            <span>100m²</span>
                        </div>
                        <div class="button-container">
                            <button @click="confirmDelete">E</button>
                            <button @click="confirmDelete">D</button>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <img class='house-image' src="https://via.placeholder.com/150" alt="Placeholder" />
                    <div class="info-container">
                        <h2>1234 Main St</h2>
                        <p>$500.000</p>
                        <p>12345 City</p>
                        <div class="info">
                            <span>BA</span>
                            <span>BR</span>
                            <span>100m²</span>
                        </div>
                        <div class="button-container">
                            <button @click="confirmDelete">E</button>
                            <button @click="confirmDelete">D</button>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <img class='house-image' src="https://via.placeholder.com/150" alt="Placeholder" />
                    <div class="info-container">
                        <h2>1234 Main St</h2>
                        <p>$500.000</p>
                        <p>12345 City</p>
                        <div class="info">
                            <span>BA</span>
                            <span>BR</span>
                            <span>100m²</span>
                        </div>
                        <div class="button-container">
                            <button @click="confirmDelete">E</button>
                            <button @click="confirmDelete">D</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import EmptyState from '@/components/EmptyState.vue';

export default {
    name: 'Home',
    components: {
        EmptyState
    }
};
</script>
  
<style scoped>
.home {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem 0;
}

.card-container {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    border-radius: 8px;
    gap: 1rem;
    background-color: red;
    width: 75%;
    padding: 1rem;
}

.house-image {
    border-radius: 8px;
}

.info {
    display: flex;
    gap: 1rem;
}

.info-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
}

.button-container {
    display: flex;
    position: absolute;
    right: 1rem;
    top: 1rem;
    gap: 0.5rem;
}

.card-container-flex {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.title-container {
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding: 1rem 0;
}

h2 {
    font-weight: 700;
}

.createButton {
    background-color: #EB5440;
    color: white;
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    cursor: pointer;
}
</style>
  