import { createSlice } from '@reduxjs/toolkit';

const initialStateObj = {
	posterShowcase: [],
	isPosterShowcaseLoading: false,
	isPosterShowcaseError: '',
};

export const posterShowcaseSlice = createSlice({
	name: 'posterShowcase',
	initialState: initialStateObj,
	reducers: {
		loadPostersSuccess: (state, action) => {
			state.posterShowcase = action.payload;
			state.isPosterShowcaseLoading = false;
		},
		loadPostersStarted: (state) => {
			state.isPosterShowcaseLoading = true;
		},
		loadPostersFailed: (state, action) => {
			state.postersLoadingError = action.payload;
			state.isPosterShowcaseLoading = false;
		},
	},
});

export const { loadPostersStarted, loadPostersSuccess, loadPostersFailed } =
	posterShowcaseSlice.actions;

export const selectPosterShowcase = (state) =>
	state.posterShowcase.posterShowcase;

export const isPosterShowcaseLoading = (state) =>
	state.posterShowcase.isPosterShowcaseLoading;

export const posterShowcaseError = (state) =>
	state.posterShowcase.isPosterShowcaseError;

export default posterShowcaseSlice.reducer;
