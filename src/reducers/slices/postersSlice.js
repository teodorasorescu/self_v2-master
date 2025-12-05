import { createSlice } from '@reduxjs/toolkit';

const initialStateObj = {
	posters: [],
	cards: [],
	selected: [],

	arePostersLoading: false,
	postersLoadingError: '',
};

export const postersSlice = createSlice({
	name: 'posters',
	initialState: initialStateObj,
	reducers: {
		loadPostersStarted: (state) => {
			state.arePostersLoading = true;
		},

		loadPostersSuccess: (state, action) => {
			const { data, type } = action.payload;

			// Exemplu: type = 'cards' sau 'posters' sau 'selected'
			if (!['cards', 'posters', 'selected'].includes(type)) {
				console.error(`Unknown type passed to loadPostersSuccess: ${type}`);
				return;
			}

			state[type] = data; // setăm dynamic array-ul potrivit

			// salvăm în localStorage dacă vrei caching
			localStorage.setItem(type, JSON.stringify(data));

			state.arePostersLoading = false;
		},

		loadPostersFailed: (state, action) => {
			state.postersLoadingError = action.payload;
			state.arePostersLoading = false;
		},
	},
});

export const { loadPostersStarted, loadPostersSuccess, loadPostersFailed } =
	postersSlice.actions;

// SELECTORS
export const selectPosters = (state) => state.posters.posters;
export const selectCards = (state) => state.posters.cards;
export const selectSelected = (state) => state.posters.selected;

export const arePostersLoading = (state) => state.posters.arePostersLoading;

export default postersSlice.reducer;
