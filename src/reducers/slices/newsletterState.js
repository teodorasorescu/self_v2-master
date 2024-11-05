import { createSlice } from '@reduxjs/toolkit';

export const newsletterStateSlice = createSlice({
	name: 'newsletterState',
	initialState: {
		newsletterState: '',
	},

	reducers: {
		loadNewsletterState: (state, action) => {
			state.newsletterState = action.payload;
		},
	},
});

export const { loadNewsletterState } = newsletterStateSlice.actions;
export const selectNewsletterState = (state) =>
	state.newsletterState.newsletterState;
export default newsletterStateSlice.reducer;
