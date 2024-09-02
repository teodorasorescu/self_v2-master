import { createSlice } from '@reduxjs/toolkit';

export const paymentStatusSlice = createSlice({
	name: 'paymentStatus',
	initialState: {
		paymentStatus: '',
	},

	reducers: {
		loadPaymentStatus: (state, action) => {
			state.paymentStatus = action.payload;
		},
	},
});
export const { loadPaymentStatus } = paymentStatusSlice.actions;

export const selectPaymentStatus = (state) => state.paymentStatus;

export default paymentStatusSlice.reducer;
