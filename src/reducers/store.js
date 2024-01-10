import { configureStore } from '@reduxjs/toolkit';
import itemsBagCount from './itemsCountBagSlice';
import cartProductsReducer from './cartProductsSlice';
import productsSlice from './productsSlice';
import productSlice from './productSlice.js';
import customerSlice from './customerSlice';

export const store = configureStore({
	reducer: {
		itemCount: itemsBagCount,
		cartProducts: cartProductsReducer,
		product: productSlice,
		products: productsSlice,
		customer: customerSlice,
	},
});
