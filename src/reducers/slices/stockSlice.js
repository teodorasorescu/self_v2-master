import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
	name: 'stock',
	initialState: {
		framesStock: 0,
		postersStock: 0,
	},

	reducers: {
		loadFramesStock: (state, action) => {
			state.framesStock = action.payload;
		},
		loadPostersStock: (state, action) => {
			state.postersStock = action.payload;
		},
	},
});
export const { loadFramesStock, loadPostersStock } = stockSlice.actions;

export const selectFramesStock = (state) => state.stock.framesStock;

export const selectPostersStock = (state) => state.stock.postersStock;

export default stockSlice.reducer;
