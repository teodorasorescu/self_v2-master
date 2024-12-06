import { createSlice } from '@reduxjs/toolkit';

export const stickerSlice = createSlice({
	name: 'sticker',
	initialState: {
		sticker: {
			id: '',
			imgTitle: '',
			imgTitlePosterList: '',
			imgTitlePosterSmartphone: '',
			title: '',
			price: 0,
			urlTitle: '',
			altDescription: '',
			size: '15x20cm',
		},
		isStickerLoading: false,
		stickerLoadingError: '',
	},

	reducers: {
		loadSticker: (state, action) => {
			state.sticker = action.payload;
			state.isStickerLoading = false;
		},
		loadStickerStarted: (state) => {
			state.isStickerLoading = true;
		},
		loadStickerFailed: (state, action) => {
			state.stickerLoadingError = action.payload;
			state.isStickerLoading = false;
		},
	},
});

export const { loadStickerStarted, loadSticker, loadStickerFailed } =
	stickerSlice.actions;

export const selectSticker = (state) => state.sticker.sticker;

export const isStickerLoading = (state) => state.sticker.isStickerLoading;
export const stickerLoadingError = (state) => state.sticker.stickerLoadingError;

export default stickerSlice.reducer;
