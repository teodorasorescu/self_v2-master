import { createSlice } from '@reduxjs/toolkit';

export const discountFormSlice = createSlice({
	name: 'discountCodeValid',
	initialState: {
		discountCodeValid: false,
	},

	reducers: {
		loadDiscountState: (state, action) => {
			state.discountCodeValid = action.payload;
		},
	},
});

export const { loadDiscountState } = discountFormSlice.actions;
export const selectDiscountState = (state) =>
	state.discountCodeValid.discountCodeValid;
export default discountFormSlice.reducer;
