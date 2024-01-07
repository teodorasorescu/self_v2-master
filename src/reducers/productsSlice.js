import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
	},

	reducers: {
		loadProducts: (state, action) => {
			state.products = action.payload;
			console.log(state.products);
			localStorage.setItem('products', JSON.stringify(state.products));
		},
	},
});

export const { loadProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;
