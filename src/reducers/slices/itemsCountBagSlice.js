import { createSlice } from '@reduxjs/toolkit';

export const itemsCountBagSlice = createSlice({
	name: 'itemCount',
	initialState: {
		initialState: {
			pacients: [],
		},
	},

	reducers: {
		loadItemCount: (state, action) => {
			state.itemCount = action.payload;
		},
	},
});

export const { loadItemCount } = itemsCountBagSlice.actions;
export const selectItemCount = (state) => state.itemCount.itemCount;
export default itemsCountBagSlice.reducer;
