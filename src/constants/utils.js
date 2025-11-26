import { chassisPrices, framePrices, posterPrices } from './productConstants';
import { v4 as uuidv4 } from 'uuid';
import states from './states';

export const getCurrencyByCountry = (countryCode) => {
	const RON_COUNTRIES = ['RO'];
	return RON_COUNTRIES.includes(countryCode) ? 'RON' : 'EUR';
};

export const updatePrice = (
	frameColor,
	chassis,
	size,
	initialPrice,
	countryCode = 'RO'
) => {
	const basePrice = posterPrices.get(size)?.get(initialPrice) || 0;
	let originalPrice = basePrice?.original;
	const discountedPrice = basePrice?.discount35;

	const framePrice = frameColor !== 'none' ? framePrices.get(size) || 0 : 0;
	const chassisPrice = chassis ? chassisPrices.get(size) || 0 : 0;

	const totalInRON = discountedPrice + framePrice + chassisPrice;
	const totalInRONOriginal = originalPrice + framePrice + chassisPrice;

	const currency = getCurrencyByCountry(countryCode);

	const price =
		currency === 'RON'
			? totalInRON
			: parseFloat((totalInRON / RON_TO_EUR_RATE).toFixed(1));

	originalPrice =
		currency === 'RON'
			? totalInRONOriginal
			: parseFloat((totalInRONOriginal / RON_TO_EUR_RATE).toFixed(1));
	return {
		price,
		currency,
		originalPrice,
	};
};

export const calculatePromotionPrice = (price) => {
	return price + 0.4 * 90;
};

export const calculateStickerPrice = (price) => {
	return price + 0.4 * 35;
};
export const computeProduct = (
	product,
	finalPrice,
	discountCodeValue,
	frameColor,
	chassis,
	size
) => {
	return {
		...product,
		id: uuidv4(),
		initialPrice: finalPrice,
		image: product.imgTitle,
		quantity: 1,
		discount: discountCodeValue !== 0 ? discountCodeValue : 0,
		price:
			discountCodeValue !== 0
				? computeDiscount(finalPrice, discountCodeValue)
				: finalPrice,
		frameColor,
		chassis,
		size,
	};
};

export const computeCustomProduct = (
	product,
	finalPrice,
	discountCodeValue,
	frameColor,
	chassis,
	size
) => {
	return {
		...product,
		id: uuidv4(),
		initialPrice: finalPrice,
		quantity: 1,
		discount: discountCodeValue !== 0 ? discountCodeValue : 0,
		price:
			discountCodeValue !== 0
				? computeDiscount(finalPrice, discountCodeValue)
				: finalPrice,
		frameColor,
		chassis,
		size,
	};
};

export const calculateTotalPrice = (storedProducts) => {
	return storedProducts.reduce((a, p) => (a = a + p.quantity * p.price), 0);
};

export const computeProductsLength = (storedProducts) => {
	return storedProducts.reduce((a, p) => (a = a + p.quantity), 0);
};

export const computeDiscount = (price, discount) => {
	return price - price * (discount / 100);
};

export const modifyProductPrices = (products, discount) => {
	const modifiedProducts = products.map((product) => {
		return {
			...product,
			price:
				product.discount !== 0
					? product.price
					: computeDiscount(product.price, discount),
			discount: product.discount !== 0 ? product.discount : discount,
		};
	});
	localStorage.setItem('products', JSON.stringify(modifiedProducts));
};

export const modifyExistingDiscount = (products, newDiscount) => {
	const modifiedProducts = products.map((product) => {
		return {
			...product,
			price: computeDiscount(product.initialPrice, newDiscount),
			discount: newDiscount,
		};
	});
	localStorage.setItem('products', JSON.stringify(modifiedProducts));
};

const RON_TO_EUR_RATE = 5;

export function getLocalizedPrice(priceInRon, countryCode) {
	const isRON = countryCode === 'RO';
	const price = isRON
		? priceInRon
		: Math.floor(parseFloat(priceInRon / RON_TO_EUR_RATE));

	const currency = isRON ? 'RON' : 'EUR';

	return { price, currency };
}

export const getRegions = (country) => {
	return states[country] || [];
};

export const samedayCountries = ['RO', 'HU', 'BG'];
export const samedayCountriesName = ['Romania', 'Hungary', 'Bulgaria'];
export const supportedCountries = [
	'AT', // Austria
	'BE', // Belgium
	'BG', // Bulgaria
	'HR', // Croatia
	'CY', // Cyprus
	'CZ', // Czechia
	'DK', // Denmark
	'EE', // Estonia
	'FI', // Finland
	'FR', // France
	'DE', // Germany
	'GR', // Greece
	'HU', // Hungary
	'IE', // Ireland
	'IT', // Italy
	'LV', // Latvia
	'LT', // Lithuania
	'LU', // Luxembourg
	'MT', // Malta
	'NL', // Netherlands
	'PL', // Poland
	'PT', // Portugal
	'RO', // Romania
	'SK', // Slovakia
	'SI', // Slovenia
	'ES', // Spain
	'SE', // Sweden
];
