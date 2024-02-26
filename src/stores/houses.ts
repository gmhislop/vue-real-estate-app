import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { deleteHouse, getHouses, postHouse, updateHouse } from '@/services/api';
import type { House } from '@/types/types';

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
    houseToDeleteId: null as number | null,
    houseToUpdateId: null as number | null,
  }),
  actions: {
    async fill(): Promise<House[]> { 
      try {
        const houses: House[] = await getHouses();
        const sortedHouses = [...houses];
        sortedHouses.sort(sortingFunctions[this.sortBy]);
        this.houses = sortedHouses;
        return houses;
      } catch (error: unknown) {
        console.error('Error fetching houses:', error);
        throw error;
      }
    },
    async createHouse(house: House, image: string): Promise<House> {
      try {
        const savedHouse = await postHouse(house);
        this.houses.push({...savedHouse, image});
        return {...savedHouse, image};
      } catch (error: unknown) {
        console.error('Error creating house:', error);
        throw error;
      }
    },
    async updateHouse(house: House, id: number): Promise<House> {
      try {
        this.houses = this.houses.map((h) => {
          if (h.id === id) return house;
          return h;
        });
        await updateHouse(house, id as unknown as string);
        this.houseToUpdateId = null; 
        return { ...house, id };
      } catch (error: unknown) {
        console.error('Error updating house:', error);
        throw error;
      }
    },
    async deleteHouse(): Promise<void> {
      try {
        if (!this.houseToDeleteId) return;
        await deleteHouse(this.houseToDeleteId as unknown as string);
        this.houses = this.houses.filter((house) => house.id !== this.houseToDeleteId);
        await this.fill();
        this.houseToDeleteId = null;
      } catch (error: unknown) {
        console.error('Error deleting house:', error);
        throw error;
      }
    },
    updateSearch(input: string): void {
      this.search = input;
    },
    clearSearch(): void {
      this.search = '';
    },
    updateSortBy(sortOption: keyof typeof sortingFunctions): void {
      this.sortBy = sortOption;
      const sortedHouses = this.houses.slice().sort(sortingFunctions[sortOption]);
      this.houses = sortedHouses;
    },
    selectHouseDelete(id: number | null): void {
      this.houseToUpdateId = id;
    },
    displayDeleteWarning(id: number): void {
      this.houseToDeleteId = id;
    },
    cancelDeleteHouse(): void {
      this.houseToDeleteId = null;
    }
  },
  getters: {
    houseDetails(): House | undefined {
      const route = useRoute();
      const houseId = route ? parseInt(route.params.id as string) : this.houseToDeleteId;
      return this.houses.find((house) => house.id === houseId);
    },
    filteredHouses(state): House[] {
      return state.houses.filter((house) => {
        const searchAttributes: (keyof typeof house.location)[] = ['street', 'city', 'zip'];
        const query = state.search.toLowerCase();
        if (!house.location) return this.houses;
        return searchAttributes.some((attribute) => house.location[attribute].toLowerCase().includes(query));
      });
    },
    resultCount(): number {
      return this.filteredHouses.length;
    },
    noResults(): boolean {
      return this.resultCount === 0;
    },
    displayResultCount(): boolean {
      return this.resultCount > 0 && !!this.search;
    },
    displayDeleteModal(): boolean {
      return this.houseToDeleteId !== null;
    }
  }
});
