import { loadStripe } from '@stripe/stripe-js';
import { BACKEND_PATH } from '../../constants/links';
import { loadOrderFailed } from '../slices/orderFailedSlice';

const sendCheckoutAction = async (
	navigate,
	dispatch,
	checkout,
	setItemCount
) => {
	const stripe = await loadStripe(
		'pk_test_51OAJQaCX4Aqjzt59sF98BMQBCZkn9SkcKSU3TdHKtwzay0Gt7YB0FgMWMFQVLJOMZKvVfcQLyhzZbMKWx3Ws1M2g00dCDW9WB2'
	);

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
