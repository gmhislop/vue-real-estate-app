import { defineStore } from 'pinia';
import { fetchHousesData } from '@/api';

export const useHousesStore = defineStore({
  id: 'houses',
  state: () => ({
    houses: [],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchHouses() {
      this.loading = true;
      try {
        this.houses = await fetchHousesData();
      } catch (error) {
        if (error instanceof Error) { 
          this.error = error.message;
        } else {
          this.error = 'Error fetching houses data';
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
