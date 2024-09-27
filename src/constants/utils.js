import { framePrice } from './frameColors';
import { chassisPrice, computeDiscount } from './productConstants';
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
