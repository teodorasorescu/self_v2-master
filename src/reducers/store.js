import { configureStore } from '@reduxjs/toolkit';
import itemsBagCount from './slices/itemsCountBagSlice';
import cartProductsReducer from './slices/cartProductsSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice.js';
import customerSlice from './slices/customerSlice';
import paymentSessionSlice from './slices/paymentSessionSlice.js';
import orderFailedSlice from './slices/orderFailedSlice.js';
export const store = configureStore({
	reducer: {
		itemCount: itemsBagCount,
		cartProducts: cartProductsReducer,
		product: productSlice,
		products: productsSlice,
		customer: customerSlice,
		sessionId: paymentSessionSlice,
		orderFailed: orderFailedSlice,
	},
});
