import { createSlice } from '@reduxjs/toolkit';

const initialStateObj = {
	posters: [],
	arePostersLoading: false,
	postersLoadingError: '',
};

export const postersSlice = createSlice({
	name: 'posters',
	initialState: initialStateObj,
	reducers: {
		loadPostersSuccess: (state, action) => {
			state.posters = action.payload;
			localStorage.setItem('posters', JSON.stringify(state.posters));
			state.arePostersLoading = false;
		},
		loadPostersStarted: (state) => {
			state.arePostersLoading = true;
		},
		loadPostersFailed: (state, action) => {
			state.postersLoadingError = action.payload;
			state.arePostersLoading = false;
		},
	},
});

export const { loadPostersStarted, loadPostersSuccess, loadPostersFailed } =
	postersSlice.actions;

export const selectPosters = (state) => state.posters.posters;

export const arePostersLoading = (state) => state.posters.arePostersLoading;

export const postersLoadingError = (state) => state.posters.postersLoadingError;

export default postersSlice.reducer;
