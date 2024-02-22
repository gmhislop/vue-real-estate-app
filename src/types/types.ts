export type House = {
    id: number;
    price: number;
    size: number;
    location: {
      street: string;
      houseNumber: string;
      houseNumberAddition: string;
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
    madeByMe: boolean;
  }