import { createSlice } from '@reduxjs/toolkit';

export const discountCodeSlice = createSlice({
	name: 'discountCode',
	initialState: {
		discountCodeSuccess: null,
		discountCode: 0,
	},

	reducers: {
		loadDiscountCodeState: (state, action) => {
			state.discountCodeSuccess = action.payload;
		},
		loadDiscountCodeValue: (state, action) => {
			state.discountCode = action.payload;
			localStorage.setItem('discountValue', action.payload);
		},
	},
});

export const { loadDiscountCodeState, loadDiscountCodeValue } =
	discountCodeSlice.actions;
export const selectDiscountCodeState = (state) =>
	state.discountCode.discountCodeSuccess;
export const selectDiscountCodeValue = (state) =>
	state.discountCode.discountCode;
export default discountCodeSlice.reducer;
