import { createSlice } from '@reduxjs/toolkit';

export const cartProductsSlice = createSlice({
	name: 'cartProducts',
	initialState: {
		cartProducts: [],
	},

	reducers: {
		loadCartProducts: (state, action) => {
			state.cartProducts = action.payload;
		},
	},
});

export const { loadCartProducts } = cartProductsSlice.actions;
export const selectCartProducts = (state) => state.cartProducts.cartProducts;
export default cartProductsSlice.reducer;
