import { configureStore } from '@reduxjs/toolkit';
import itemsBagCount from './slices/itemsCountBagSlice';
import cartProductsReducer from './slices/cartProductsSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice.js';
import paymentSessionSlice from './slices/paymentSessionSlice.js';
import orderFailedSlice from './slices/orderFailedSlice.js';
import stockSlice from './slices/stockSlice.js';
import discountCodeSlice from './slices/discountCodeSlice.js';
import shippingCitiesSlice from './slices/shippingCitiesSlice.js';
import deliveryPriceSlice from './slices/deliveryPriceSlice.js';
import posterSlice from './slices/posterSlice.js';
import postersSlice from './slices/postersSlice.js';
import frameSlice from './slices/frameSlice.js';
import framesSlice from './slices/framesSlice.js';
import stickerSlice from './slices/stickerSlice.js';
import stickersSlice from './slices/stickersSlice.js';
import newsletterStateSlice from './slices/newsletterState.js';

export const store = configureStore({
	reducer: {
		itemCount: itemsBagCount,
		cartProducts: cartProductsReducer,
		product: productSlice,
		products: productsSlice,
		sessionId: paymentSessionSlice,
		orderFailed: orderFailedSlice,
		stock: stockSlice,
		discountCode: discountCodeSlice,
		cities: shippingCitiesSlice,
		deliveryPrice: deliveryPriceSlice,
		poster: posterSlice,
		posters: postersSlice,
		frame: frameSlice,
		frames: framesSlice,
		sticker: stickerSlice,
		stickers: stickersSlice,
		newsletterState: newsletterStateSlice,
	},
});
