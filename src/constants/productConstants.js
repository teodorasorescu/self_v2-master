export const price = 90.0;
export const chassisPrice = 50.0;

export const HOME_DELIVERY_SMALL = 19;
export const LOCKER_DELIVERY_SMALL = 14;
export const HOME_DELIVERY_BIG = 25;
export const LOCKER_DELIVERY_BIG = 14;

export const details =
	'Print: canvas (pânză) 100% bumbac cu finisaj mat\n Dimensiune: 30x40 cm\n Material ramă: lemn natural ceritificat FSC® 100% \nModalitate de fixare: prevazută cu agățătoare\n Protecție tablou: plexiglas\n Material cadru (șasiu): lemn uscat de rășinoase';

export const suport =
	'Dacă aveți nelămuriri, nu ezitați să ne contactați la selfposters@gmail.com, sau pe instagram/tiktok @selfposters.ro ♡';

export const atentionareCuloare =
	'Vă sfătuim să nu alegeți culori stridente. Tehnologia actuală nu permite printarea culorilor în format RGB, ci CMYK. Astfel, culorile stridente pot ieși la imprimare ușor mai închise.';

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

export const shippingMessage = 'Transport gratuit la comenzi peste 240 RON!';

export const headerMessage = 'La 3 tablouri cumpărate, al 3 lea este gratuit';
export const color0 = {
	r: '255',
	g: '190',
	b: '11',
};

export const color2 = {
	r: '251',
	g: '86',
	b: '7',
};

export const color3 = {
	r: '255',
	g: '0',
	b: '110',
};

export const color1 = {
	r: '255',
	g: '163',
	b: '163',
};

export const fontColors = [
	'Prima culoare',
	'A doua culoare',
	'A treia culoare',
	'A patra culoare',
];
