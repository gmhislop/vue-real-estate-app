import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { deleteHouse, getHouses, postHouse, updateHouse } from '@/services/api'

// Define types
type House = {
  id: number;
  price: number;
  size: number;
  location: {
    street: string;
    city: string;
    zip: string;
  };
};

const sortingFunctions = {
  price: (a: House, b: House) => a.price - b.price,
  size: (a: House, b: House) => a.size - b.size
};

export const useHousesStore = defineStore({
  id: 'houses',
  state: () => ({
    houses: [] as House[],
    search: '',
    sortBy: 'price' as keyof typeof sortingFunctions,
    houseToDeleteId: null as number | null
  }),
  actions: {
    async fill() {
      try {
        const houses = await getHouses();
        this.houses = houses.sort(sortingFunctions[this.sortBy]);
        return houses;
      } catch (error) {
        console.error('Error fetching houses:', error);
        throw error;
      }
    },
    async createHouse(house: House) {
      try {
        const savedHouse = await postHouse(house);
        this.houses.push(savedHouse);
        return savedHouse;
      } catch (error) {
        console.error('Error creating house:', error);
        throw error;
      }
    },
    async updateHouse(house: House, id: number) {
      try {
        await updateHouse(house, id);
        const index = this.houses.findIndex(h => h.id === id);
        if (index !== -1) this.houses.splice(index, 1, house);
        return house;
      } catch (error) {
        console.error('Error updating house:', error);
        throw error;
      }
    },
    async deleteHouse() {
      try {
        if (!this.houseToDeleteId) return;
        await deleteHouse(this.houseToDeleteId);
        this.houses = this.houses.filter((house) => house.id !== this.houseToDeleteId);
        this.houseToDeleteId = null;
      } catch (error) {
        console.error('Error deleting house:', error);
        throw error;
      }
    },
    updateSearch(input: string) {
      this.search = input;
    },
    clearSearch() {
      this.search = '';
    },
    updateSortBy(sortOption: keyof typeof sortingFunctions) {
      this.sortBy = sortOption;
      this.houses = this.houses.sort(sortingFunctions[sortOption]);
    },
    displayDeleteWarning(id: number) {
      this.houseToDeleteId = id;
    },
    cancelDeleteHouse() {
      this.houseToDeleteId = null;
    }
  },
  getters: {
    houseDetails() {
      const route = useRoute();
      const houseId = parseInt(route.params.id);
      return this.houses.find((house) => house.id === houseId);
    },
    filteredHouses(state) {
      return state.houses.filter((house) => {
        const searchAttributes = ['street', 'city', 'zip'];
        const query = state.search.toLowerCase();
        return searchAttributes.some((attribute) => house.location[attribute].toLowerCase().includes(query));
      });
    },
    resultCount() {
      return this.filteredHouses.length;
    },
    noResults() {
      return this.resultCount === 0;
    },
    displayResultCount() {
      return this.resultCount && this.search;
    },
    displayDeleteModal() {
      return this.houseToDeleteId !== null;
    }
  }
});
