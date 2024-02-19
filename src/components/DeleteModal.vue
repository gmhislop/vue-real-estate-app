<template>
    <div class="modal" v-if="showModal" @click="cancel">
        <div class="modal-content" @click.stop>
            <div class="text-container">
                <h3>Delete listing</h3>
                <p>Are you sure you want to delete this listing?</p>
                <p>This action cannot be undone.</p>
            </div>
            <div class="button-container">
                <button class="delete-button" @click.stop="confirm">YES, DELETE</button>
                <button class="cancel-button" @click.stop="cancel">GO BACK</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        house: Object,
        showModal: Boolean
    },
    methods: {
        cancel() {
            this.$emit('cancel');
        },
        confirm() {
            this.$emit('confirm', this.house);
        }
    }
};
</script>
  
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 40px 80px;
    border-radius: 8px;
}

h3 {
    margin-bottom: 1rem;
    font-weight: 700;
}

.text-container {
    margin-bottom: 2rem;
    text-align: center;
}

.button-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

button {
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
}

.delete-button {
    background-color: #EB5440;
    color: white;
    font-weight: 700;
}

.cancel-button {
    background-color: #4A4B4C;
    color: white;
    font-weight: 700;
}
</style>
