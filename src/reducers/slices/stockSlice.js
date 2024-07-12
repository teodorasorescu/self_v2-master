import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
	name: 'stock',
	initialState: {
		framesStock: 20,
		postersStock: 100,
		chassisStock: 50,
	},

	reducers: {
		loadFramesStock: (state, action) => {
			state.framesStock = action.payload;
		},
		loadChassisStock: (state, action) => {
			state.chassisStock = action.payload;
		},
		loadPostersStock: (state, action) => {
			state.postersStock = action.payload;
		},
	},
});
export const { loadFramesStock, loadPostersStock, loadChassisStock } =
	stockSlice.actions;

export const selectFramesStock = (state) => state.stock.framesStock;

export const selectPostersStock = (state) => state.stock.postersStock;
export const selectChassisStock = (state) => state.stock.chassisStock;

export default stockSlice.reducer;
