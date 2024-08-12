import { loadStripe } from '@stripe/stripe-js';
import { BACKEND_PATH } from '../../constants/links';
import { loadOrderFailed } from '../slices/orderFailedSlice';

const sendCheckoutAction = async (
	navigate,
	dispatch,
	checkout,
	setItemCount
) => {
	const stripe = await loadStripe(process.env.REACT_APP_PUBLIC_KEY_STRIPE_PROD);

	const headers = {
		'Content-Type': 'application/json',
	};

	let checkoutResponse = '';
	try {
		const response = await fetch(`${BACKEND_PATH}/checkout/create`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(checkout),
		});

		checkoutResponse = await response.json();

		localStorage.setItem('sessionId', checkoutResponse.id);
		const result = stripe.redirectToCheckout({
			sessionId: checkoutResponse.id,
		});

		if (result.error) {
			dispatch(loadOrderFailed(true));
		}

		setItemCount(0);
		localStorage.setItem('productsOrder', localStorage.getItem('products'));
		localStorage.setItem('products', JSON.stringify([]));
	} catch (error) {
		dispatch(loadOrderFailed(true));
		navigate('/confirmare-comanda');
	}
};

export default sendCheckoutAction;
