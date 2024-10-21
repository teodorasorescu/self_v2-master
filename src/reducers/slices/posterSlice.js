import { createSlice } from '@reduxjs/toolkit';

export const posterSlice = createSlice({
	name: 'poster',
	initialState: {
		poster: {
			id: '',
			imgTitle: '',
			imgTitlePosterList: '',
			imgTitlePosterSmartphone: '',
			title: '',
			price: 0,
			urlTitle: '',
			altDescription: '',
			hoverImgTitle: '',
			posterGroup: '',
			showcase: [],
		},
		isPosterLoading: false,
		posterLoadingError: '',
	},

	reducers: {
		loadPoster: (state, action) => {
			state.poster = action.payload;
			state.isPosterLoading = false;
		},
		loadPosterStarted: (state) => {
			state.isPosterLoading = true;
		},
		loadPosterFailed: (state, action) => {
			state.posterLoadingError = action.payload;
			state.isPosterLoading = false;
		},
	},
});

export const { loadPosterStarted, loadPoster, loadPosterFailed } =
	posterSlice.actions;
export const selectPoster = (state) => state.poster.poster;

export const isPosterLoading = (state) => state.poster.isPosterLoading;
export const posterLoadingError = (state) => state.poster.posterLoadingError;

export default posterSlice.reducer;
