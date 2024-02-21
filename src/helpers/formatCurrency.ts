// Function to format currency with euro symbol
export function formatCurrency(price: number | bigint) {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0}).format(price)
}

// Function to format currency without euro symbol
export function formatCurrencyNoEuro(price: number | bigint) {
    return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
}