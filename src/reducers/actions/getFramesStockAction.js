import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadFramesStock } from '../slices/stockSlice';

const getFramesStockAction = (dispatch) => {
	axios
		.get(`${BACKEND_PATH}/stock/frames`)
		.then((response) => {
			dispatch(loadFramesStock(response.data));
		})
		.catch(() => {});
};

export default getFramesStockAction;
