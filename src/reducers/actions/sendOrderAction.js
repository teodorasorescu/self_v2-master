import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadOrderFailed } from '../slices/orderFailedSlice';

const sendOrderAction = (order, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/order/create`, order)
		.then(() => {
			dispatch(loadOrderFailed(false));
		})
		.catch(() => {
			dispatch(loadOrderFailed(true));
		});
};

export default sendOrderAction;
