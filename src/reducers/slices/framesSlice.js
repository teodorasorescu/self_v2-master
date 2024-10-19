import { createSlice } from '@reduxjs/toolkit';

const initialStateObj = {
	frames: [],
	areFramesLoading: false,
	framesLoadingError: '',
};

export const framesSlice = createSlice({
	name: 'frames',
	initialState: initialStateObj,
	reducers: {
		loadFramesSuccess: (state, action) => {
			state.frames = action.payload;
			state.areFramesLoading = false;
		},
		loadFramesStarted: (state) => {
			state.areFramesLoading = true;
		},
		loadFramesFailed: (state, action) => {
			state.framesLoadingError = action.payload;
			state.areFramesLoading = false;
		},
	},
});

export const { loadFramesStarted, loadFramesSuccess, loadFramesFailed } =
	framesSlice.actions;

export const selectFrames = (state) => state.frames.frames;

export const areFramesLoading = (state) => state.frames.areFramesLoading;

export const framesLoadingError = (state) => state.frames.framesLoadingError;

export default framesSlice.reducer;
