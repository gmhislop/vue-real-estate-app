
type FormData = {
    street_name: string;
    house_number: string;
    postal_code: string;
    city: string;
    price: string;
    size: string;
    garage: string;
    bedroom: string;
    bathroom: string;
    construction_date: string;
    description: string;
}

export default function validateForm(formData: FormData) {
    const errors: Partial<FormData> = {};

    if (!formData.street_name) {
        errors.street_name = 'Street name is required.';
    }

    if (!formData.house_number) {
        errors.house_number = 'House number is required.';
    }

    if (!formData.postal_code) {
        errors.postal_code = 'Postal code is required.';
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

    if (!formData.garage) {
        errors.garage = 'Garage amount is required.';
    }

    if (!formData.bedroom || isNaN(parseInt(formData.bedroom))) {
        errors.bedroom = 'Please enter a valid number for bedroom.';
    }

    if (!formData.bathroom || isNaN(parseInt(formData.bathroom))) {
        errors.bathroom = 'Please enter a valid number for bathroom.';
    }

    if (!formData.construction_date) {
        errors.construction_date = 'Construction date is required.';
    }

    if (!formData.description) {
        errors.description = 'Description is required.';
    }

    return errors;
}
