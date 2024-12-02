import { createSlice } from '@reduxjs/toolkit';
import { price } from '../../constants/productConstants';

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		product: {
			id: '', //generat random
			image: '',
			title: '',
			customTitle: '',
			description: '',
			colors: [],
			fontColor: '',
			chassis: false,
			quantity: 0,
			price: price,
			frameColor: '',
			subtitle: '',
			discount: 0,
			initialPrice: price,
			size: '21x30cm',
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
