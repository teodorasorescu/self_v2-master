import OrderIllustration from '../images/order_confirmation.png';
import styles from '../styling/order.confirmation.module.scss';
import { CheckoutCart } from './CheckoutCart';
import { OrderResume } from './OrderResume';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStateContext } from '../contexts/ContextProvider';
import React, { useEffect } from 'react';

const OrderConfirmation = () => {
	const wideScreen = useMediaQuery('(min-width:1025px)');
	const { headerOn, setHeaderOn } = useStateContext();

	useEffect(() => {
		setHeaderOn(true);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.confirmationContainer}>
				<img src={OrderIllustration} alt='orderill' />
				<p>
					Comanda ta este confirmată și va fi livrată în cel târziu 3-5 zile
					lucrătoare . Îți vom trimite un email cu confirmarea în cel mai scurt
					timp.
				</p>
			</div>
			<div className={styles.orderResumeContainer}>
				{wideScreen && <h4>Rezumatul comenzii</h4>}
				{wideScreen && <CheckoutCart />}
				{!wideScreen && <OrderResume />}
			</div>
		</div>
	);
};

export default OrderConfirmation;
