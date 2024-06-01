import React, { useEffect } from 'react';
import styles from '../styling/checkout.module.scss';
import { useStateContext } from '../contexts/ContextProvider';
import AddressForm from './AddressForm';
import { CheckoutCart } from './CheckoutCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OrderResume } from './OrderResume';
import Self from '../images/self_logo.png';

export const Checkout = () => {
	const { headerOn, setHeaderOn } = useStateContext();
	const wideScreen = useMediaQuery('(min-width:1025px)');
	const storedProducts = JSON.parse(localStorage.getItem('products'));
	const { orderConfirmation, setOrderConfirmation } = useStateContext();

	console.log('checkout', orderConfirmation);
	useEffect(() => {
		setHeaderOn(false);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.checkoutContainer}>
				<div className={styles.image}>
					<img src={Self} />
				</div>
				{!wideScreen && <OrderResume storedProducts={storedProducts} />}
				<AddressForm />
			</div>
			{wideScreen && (
				<div className={styles.shoppingContainer}>
					<div className={styles.fixedContainer}>
						<CheckoutCart storedProducts={storedProducts} />
					</div>
				</div>
			)}
		</div>
	);
};
