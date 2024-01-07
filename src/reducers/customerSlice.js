import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
	name: 'customer',
	initialState: {
		customer: {
			id: '',
			email: '',
			firstName: '',
			lastName: '',
			addressLine: '',
			city: '',
			state: '',
			country: '',
			postalCode: '',
			hasSubmited: false,
			products: [],
			newsletter: false,
		},
	},

	reducers: {
		loadCustomer: (state, action) => {
			state.customer = action.payload;
		},
	},
});

export const { loadCustomer } = customerSlice.actions;
export const selectCustomer = (state) => state.customer.customer;
export default customerSlice.reducer;
