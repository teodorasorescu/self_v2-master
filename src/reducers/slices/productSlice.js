import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		product: {
			id: '', //generat random
			image: '',
			title: '',
			description: '',
			colors: [],
			quantity: 0,
			price: 120,
			frameColor: '',
		},
	},

	reducers: {
		loadProduct: (state, action) => {
			state.product = action.payload;
		},
	},
});

export const { loadProduct } = productSlice.actions;
export const selectProduct = (state) => state.product.product;
export default productSlice.reducer;
