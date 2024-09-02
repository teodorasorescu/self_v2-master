import { configureStore } from '@reduxjs/toolkit';
import itemsBagCount from './slices/itemsCountBagSlice';
import cartProductsReducer from './slices/cartProductsSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice.js';
import paymentSessionSlice from './slices/paymentSessionSlice.js';
import orderFailedSlice from './slices/orderFailedSlice.js';
import stockSlice from './slices/stockSlice.js';
import newsletterFormSlice from './slices/newsletterFormSlice.js';
import shippingCitiesSlice from './slices/shippingCitiesSlice.js';
import deliveryPriceSlice from './slices/deliveryPriceSlice.js';

export const store = configureStore({
	reducer: {
		itemCount: itemsBagCount,
		cartProducts: cartProductsReducer,
		product: productSlice,
		products: productsSlice,
		sessionId: paymentSessionSlice,
		orderFailed: orderFailedSlice,
		stock: stockSlice,
		newsletterSuccess: newsletterFormSlice,
		cities: shippingCitiesSlice,
		deliveryPrice: deliveryPriceSlice,
	},
});
