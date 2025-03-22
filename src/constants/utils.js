import { chassisPrices, framePrices, posterPrices } from './productConstants';
import { v4 as uuidv4 } from 'uuid';

export const updatePrice = (frameColor, chassis, size, initialPrice) => {
	let updatedPrice = posterPrices.get(size)?.get(initialPrice);
	if (frameColor !== 'fără') {
		updatedPrice += framePrices.get(size);
	}
	if (chassis) {
		updatedPrice += chassisPrices.get(size);
	}

	return updatedPrice;
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
