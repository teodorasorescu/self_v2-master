import { framePrice } from './frameColors';
import { chassisPrice } from './productConstants';
import { v4 as uuidv4 } from 'uuid';

export const updatePrice = (product, frameColor, chassis) => {
	let updatedPrice = product.price;
	if (frameColor !== 'fără') {
		updatedPrice += framePrice;
	}
	if (chassis) {
		updatedPrice += chassisPrice;
	}

	return updatedPrice;
};

export const calculatePromotionPrice = (price) => {
	return price + 0.4 * price;
};
export const computeProduct = (
	product,
	finalPrice,
	discountCodeValue,
	frameColor,
	chassis
) => {
	return {
		...product,
		id: uuidv4(),
		initialPrice: finalPrice,
		quantity: 1,
		discount: discountCodeValue !== 0 ? discountCodeValue : product.discount,
		price:
			discountCodeValue !== 0
				? computeDiscount(finalPrice, discountCodeValue)
				: finalPrice,
		frameColor,
		chassis,
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
