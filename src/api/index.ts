export async function fetchHousesData() {
    try {
      const response = await fetch('https://api.intern.d-tt.nl/api/houses');
      if (!response.ok) {
        throw new Error('Failed to fetch houses data');
      }
      return await response.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error fetching houses data: ${error.message}`);
      } else {
        throw new Error('Unknown error occurred while fetching houses data');
      }
    }
  }
  