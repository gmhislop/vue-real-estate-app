export type House = {
    id: string;
    price: number;
    size: number;
    location: {
      street: string;
  
      city: string;
      zip: string;
    };
    rooms: {
      bedrooms: number;
      bathrooms: number;
    };
    hasGarage: boolean;
    constructionYear: number;
    description: string;
    image: string | null;
  }