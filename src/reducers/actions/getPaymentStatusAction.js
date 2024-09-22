import { loadOrderFailed } from '../slices/orderFailedSlice';
import { BACKEND_PATH } from '../../constants/links';

const getPaymentStatusAction = async (sessionId, dispatch) => {
	const address = await fetch(`${BACKEND_PATH}/checkout/payment/${sessionId}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.then((session) => {
			localStorage.setItem('sessionId', '');
			if (session.error) {
				dispatch(loadOrderFailed(true));
				localStorage.setItem('productsOrder', JSON.stringify([]));
			} else {
				dispatch(loadOrderFailed(false));
			}
			return session;
		});

	return address;
};

export default getPaymentStatusAction;
