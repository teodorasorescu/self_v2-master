import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadShippingCities } from '../slices/shippingCitiesSlice';

const getCitiesByCountyAction = (dispatch, countyName) => {
	axios
		.get(`${BACKEND_PATH}/shipping/cities/` + countyName)
		.then((response) => {
			dispatch(loadShippingCities(response.data));
		})
		.catch(() => {});
};

export default getCitiesByCountyAction;
