import { configureStore } from '@reduxjs/toolkit';
import itemsBagCount from './slices/itemsCountBagSlice';
import cartProductsReducer from './slices/cartProductsSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice.js';
import customerSlice from './slices/customerSlice';

export const store = configureStore({
	reducer: {
		itemCount: itemsBagCount,
		cartProducts: cartProductsReducer,
		product: productSlice,
		products: productsSlice,
		customer: customerSlice,
	},
});
