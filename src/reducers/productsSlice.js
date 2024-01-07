import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
	},

	reducers: {
		loadProducts: (state, action) => {
			state.products = action.payload;
			localStorage.setItem('products', JSON.stringify(state.products));
		},
	},
});

export const { loadProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;
