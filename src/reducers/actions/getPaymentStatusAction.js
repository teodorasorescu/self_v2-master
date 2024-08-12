import { loadOrderFailed } from '../slices/orderFailedSlice';

const getPaymentStatusAction = async (sessionId, dispatch) => {
	const headers = {
		Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY_STRIPE_PROD}`,
	};

	const address = await fetch(
		`https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
		{
			method: 'GET',
			headers: headers,
		}
	)
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
