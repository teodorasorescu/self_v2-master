import { createSlice } from '@reduxjs/toolkit';

export const paymentSessionSlice = createSlice({
	name: 'sessionId',
	initialState: {
		sessionId: '',
	},

	reducers: {
		loadPaymentSession: (state, action) => {
			state.sessionId = action.payload;
		},
	},
});

export const { loadPaymentSession } = paymentSessionSlice.actions;
export const selectPaymentSession = (state) => state.sessionId.sessionId;
export default paymentSessionSlice.reducer;
