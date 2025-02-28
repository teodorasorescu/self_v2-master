import { createSlice } from '@reduxjs/toolkit';

export const artistSlice = createSlice({
	name: 'artist',
	initialState: {
		artist: {
			id: '', //generat random
			artist: '',
			title: '',
			artistDescription: '',
			artistUrl: '',
			aboutArtistShowcase: '',
			posters: [],
		},
		isArtistLoading: false,
		artistLoadingError: '',
	},

	reducers: {
		loadArtist: (state, action) => {
			state.artist = action.payload;
			state.isArtistLoading = false;
		},

		loadArtistStarted: (state) => {
			state.isArtistLoading = true;
		},
		loadArtistFailed: (state, action) => {
			state.artistLoadingError = action.payload;
			state.isArtistLoading = false;
		},
	},
});

export const { loadArtist, loadArtistStarted, loadArtistFailed } =
	artistSlice.actions;
export const isArtistLoading = (state) => state.artist.isArtistLoading;

export const artistLoadingError = (state) => state.artist.artistLoadingError;
export const selectArtist = (state) => state.artist.artist;
export default artistSlice.reducer;
