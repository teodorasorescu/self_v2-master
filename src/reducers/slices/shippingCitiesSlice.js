import { createSlice } from '@reduxjs/toolkit';

export const shippingCitiesSlice = createSlice({
	name: 'cities',
	initialState: {
		cities: [],
	},

	reducers: {
		loadShippingCities: (state, action) => {
			state.cities = action.payload;
		},
	},
});

export const { loadShippingCities } = shippingCitiesSlice.actions;
export const selectShippingCities = (state) => state.cities.cities;
export default shippingCitiesSlice.reducer;
