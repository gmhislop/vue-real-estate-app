import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { House } from '@/types/types';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getHouses = async (): Promise<House[]> => {
  const response: AxiosResponse<House[]> = await instance.get('/houses');
  console.log(JSON.stringify(response.data));
  return response.data;
};

export const postHouse = async (house: House): Promise<House> => {
  const response: AxiosResponse<House> = await instance.post('/houses', house);
  return response.data;
};

export const updateHouse = async (house: House, id: string): Promise<House> => {
  const response: AxiosResponse<House> = await instance.patch(`/houses/${id}`, house);
  return response.data;
};

export const deleteHouse = async (id: string): Promise<void> => {
  await instance.delete(`/houses/${id}`);
};

export const uploadImage = async (image: File, houseId: string): Promise<void> => {
  const data = new FormData();
  data.append('image', image, image.name);

  await instance.post(`/houses/${houseId}/upload`, data, {
    headers: {
      'Content-Type': image.type,
      'X-Api-Key': import.meta.env.VITE_API_KEY as string
    }
  });
};
