import { loadOrderFailed } from '../slices/orderFailedSlice';
import { loadPaymentStatus } from '../slices/paymentStatusSlice';
import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';

const getPaymentStatusAction = (sessionId, dispatch) => {
	axios
		.get(`${BACKEND_PATH}/checkout/payment/` + sessionId)
		.then((response) => {
			localStorage.setItem('sessionId', '');
			dispatch(loadOrderFailed(false));
			dispatch(loadPaymentStatus(response.data));
		})
		.catch(() => {
			localStorage.setItem('sessionId', '');
			dispatch(loadOrderFailed(true));
		});
};

export default getPaymentStatusAction;
