<template>
    <div class="search-container">
        <img alt="search logo" class="search-icon" src="@/assets/ic_search@3x.png" />
        <input type="text" v-model="filter" placeholder="Search..." class="search-input" />
        <img v-if="filter.length > 0" class="clear-icon" src="@/assets/ic_clear@3x.png" alt="Clear Filter"
            @click="clearFilter" />
    </div>
</template>
  
<script>
export default {
    name: 'FilterInput',
    props: {
        value: String
    },
    data() {
        return {
            filter: this.value
        };
    },
    watch: {
        value(newValue) {
            this.filter = newValue;
        }
    },
    methods: {
        clearFilter() {
            this.filter = '';
            this.$emit('input', '');
        }
    }
};
</script>
  
<style scoped>
.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-input {
    border: none;
    padding: 0.5rem 0.5rem 0.5rem 3rem;
    border-radius: 4px;
    background-color: #E8E8E8;
}

.clear-icon {
    position: absolute;
    right: 1rem;
    width: 1rem;
    cursor: pointer;
}

.search-icon {
    position: absolute;
    left: 1rem;
    width: 1rem;
    pointer-events: none;
}
</style>
  