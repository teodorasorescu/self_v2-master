import { createSlice } from '@reduxjs/toolkit';

export const deliveryPriceSlice = createSlice({
	name: 'deliveryPrice',
	initialState: {
		deliveryPrice: 0,
	},

	reducers: {
		loadDeliveryPriceState: (state, action) => {
			state.deliveryPrice = action.payload;
		},
	},
});

export const { loadDeliveryPriceState } = deliveryPriceSlice.actions;
export const selectDeliveryPrice = (state) => state.deliveryPrice.deliveryPrice;
export default deliveryPriceSlice.reducer;
