import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadChassisStock } from '../slices/stockSlice';

const getChassisStockAction = (dispatch) => {
	axios
		.get(`${BACKEND_PATH}/stock/chassis`)
		.then((response) => {
			dispatch(loadChassisStock(response.data));
		})
		.catch(() => {});
};

export default getChassisStockAction;
