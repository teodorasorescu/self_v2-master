import { createSlice } from '@reduxjs/toolkit';

export const orderFailedSlice = createSlice({
	name: 'orderFailed',
	initialState: {
		orderFailed: false,
	},

	reducers: {
		loadOrderFailed: (state, action) => {
			state.orderFailed = action.payload;
		},
	},
});

export const { loadOrderFailed } = orderFailedSlice.actions;
export const selectOrderFailed = (state) => state.orderFailed.orderFailed;
export default orderFailedSlice.reducer;
