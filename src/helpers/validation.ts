type FormData = {
    houseNumber: string;
    houseNumberAddition: string | undefined;
    zip: string;
    street: string;
    city: string;
    price: string;
    size: string;
    hasGarage: boolean | undefined;
    bedrooms: number;
    bathrooms: number;
    constructionYear: number;
    description: string;
    image: null;
};

export default function validateForm(formData: FormData) {
    const errors: Partial<FormData> = {
        houseNumber: '',
        houseNumberAddition: '',
        zip: '',
        street: '',
        city: '',
        price: '',
        size: '',
        hasGarage: undefined,
        bedrooms: 0,
        bathrooms: 0,
        constructionYear: 0,
        description: '',
        image: null,
    };

    if (!formData.street) {
        errors.street = 'Street name is required.';
    }

    if (!formData.houseNumber) {
        errors.houseNumber = 'House number is required.';
    }

    if (!formData.zip) {
        errors.zip = 'Zip code is required.';
    }

    if (!formData.city) {
        errors.city = 'City is required.';
    }

    if (!formData.price) {
        errors.price = 'Price is required.';
    }

    if (!formData.size) {
        errors.size = 'Size is required.';
    }
    
    if (formData.hasGarage === undefined) {
        errors.hasGarage = 'Please select if the house has a garage.' as unknown as boolean;
    }
    
    if (formData.bedrooms === undefined || isNaN(formData.bedrooms)) {
        errors.bedrooms = 'Please enter a valid number for bedrooms.' as unknown as number;
    }
    
    if (formData.bathrooms === undefined || isNaN(formData.bathrooms)) {
        errors.bathrooms = 'Please enter a valid number for bathrooms.' as unknown as number;
    }
    
    if (formData.constructionYear === undefined || isNaN(formData.constructionYear)) {
        errors.constructionYear = 'Please enter a valid year of construction.' as unknown as number;
    }

    if (!formData.description) {
        errors.description = 'Description is required.';
    }

    return errors;
}
