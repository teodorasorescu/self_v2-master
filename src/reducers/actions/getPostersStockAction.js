import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadPostersStock } from '../slices/stockSlice';

const getPostersStockAction = (dispatch) => {
	axios
		.get(`${BACKEND_PATH}/stock/posters`)
		.then((response) => {
			console.log('heelo', response);
			dispatch(loadPostersStock(response.data));
		})
		.catch(() => {});
};

export default getPostersStockAction;
