import { createSlice } from '@reduxjs/toolkit';

export const newsletterFormSlice = createSlice({
	name: 'newsletterSuccess',
	initialState: {
		newsletterSuccess: false,
	},

	reducers: {
		loadNewsletterState: (state, action) => {
			state.newsletterSuccess = action.payload;
		},
	},
});

export const { loadNewsletterState } = newsletterFormSlice.actions;
export const selectNewsletterState = (state) =>
	state.newsletterSuccess.newsletterSuccess;
export default newsletterFormSlice.reducer;
