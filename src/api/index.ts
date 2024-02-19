export async function fetchHousesData() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/houses`, {
        headers: {
          'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch houses data');
      }
  
      return await response.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error fetching houses data: ${error.message}`);
    }
  }
}

export async function fetchHouseById(houseId: number) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/houses/${houseId}`, {
            headers: {
          'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch house data');
      }
  
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error fetching house data: ${error.message}`);
      }
      throw new Error('Unknown error fetching house data');
    }
  }

  export async function uploadHouseImage(houseId: string, imageData: File) {
    try {
        const response = await fetch(`https://api.intern.d-tt.nl/api/houses/${houseId}/upload`, {
            method: 'POST',
            body: imageData,
            headers: {
                'Content-Type': 'image/jpg' || 'image/png',
                'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        return await response.json();
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

export async function deleteHouseById(houseId: string) {
    try {
        const response = await fetch(`https://api.intern.d-tt.nl/api/houses/${houseId}`, {
            method: 'DELETE',
            headers: {
                'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
              }
        });

        if (!response.ok) {
            throw new Error('Failed to delete house');
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting house:', error);
        throw error;
    }
}

export async function createHouse(formData: FormData) {
    try {
        const response = await fetch(`https://api.intern.d-tt.nl/api/houses`, {
            method: 'POST',
            headers: {
                'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
              },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to create house');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating house:', error);
        throw error;
    }
}
