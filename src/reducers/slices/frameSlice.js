import { createSlice } from '@reduxjs/toolkit';

export const frameSlice = createSlice({
	name: 'frame',
	initialState: {
		frame: {
			id: '',
			imgTitle: '',
			title: '',
			price: 0,
			urlTitle: '',
			altDescription: '',
			hoverImgTitle: '',
			color: '',
		},
		isFrameLoading: false,
		frameLoadingError: '',
	},

	reducers: {
		loadFrame: (state, action) => {
			state.frame = action.payload;
			state.isFrameLoading = false;
		},
		loadFrameStarted: (state) => {
			state.isFrameLoading = true;
		},
		loadFrameFailed: (state, action) => {
			state.frameLoadingError = action.payload;
			state.isFrameLoading = false;
		},
	},
});

export const { loadFrameStarted, loadFrame, loadFrameFailed } =
	frameSlice.actions;

export const selectFrame = (state) => state.frame.frame;

export const isFrameLoading = (state) => state.frame.isFrameLoading;
export const frameLoadingError = (state) => state.frame.frameLoadingError;

export default frameSlice.reducer;
