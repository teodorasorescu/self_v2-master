import { createSlice } from '@reduxjs/toolkit';

export const accessStateSlice = createSlice({
	name: 'accessState',
	initialState: {
		accessState: '',
	},

	reducers: {
		loadAccessState: (state, action) => {
			state.accessState = action.payload;
			localStorage.setItem('accessCode', JSON.stringify(state.accessState));
		},
	},
});

export const { loadAccessState } = accessStateSlice.actions;
export const selectAccessState = (state) => state.accessState.accessState;
export default accessStateSlice.reducer;
