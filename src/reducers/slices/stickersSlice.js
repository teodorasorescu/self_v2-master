import { createSlice } from '@reduxjs/toolkit';

const initialStateObj = {
	stickers: [],
	areStickersLoading: false,
	stickersLoadingError: '',
};

export const stickersSlice = createSlice({
	name: 'stickers',
	initialState: initialStateObj,
	reducers: {
		loadStickersSuccess: (state, action) => {
			state.stickers = action.payload;
			state.areStickersLoading = false;
		},
		loadStickersStarted: (state) => {
			state.areStickersLoading = true;
		},
		loadStickersFailed: (state, action) => {
			state.stickersLoadingError = action.payload;
			state.areStickersLoading = false;
		},
	},
});

export const { loadStickersStarted, loadStickersSuccess, loadStickersFailed } =
	stickersSlice.actions;

export const selectStickers = (state) => state.stickers.stickers;

export const areStickersLoading = (state) => state.stickers.areStickersLoading;

export const stickersLoadingError = (state) =>
	state.stickers.stickersLoadingError;

export default stickersSlice.reducer;
