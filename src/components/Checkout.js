import React, { useEffect } from 'react';
import styles from '../styling/checkout.module.scss';
import { useStateContext } from '../contexts/ContextProvider';
import AddressForm from './AddressForm.jsx';
import { CheckoutCart } from './CheckoutCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OrderResume } from './OrderResume';
import Self from '../images/self_logo.webp';

export const Checkout = () => {
	const { headerOn, setHeaderOn } = useStateContext();
	const wideScreen = useMediaQuery('(min-width:1025px)');
	const storedProducts = JSON.parse(localStorage.getItem('products'));
	const deliveryPrice = parseInt(localStorage.getItem('deliveryPrice'), 10);

	useEffect(() => {
		setHeaderOn(false);
		window.gtag('event', 'conversion', {
			send_to: 'AW-16617160410/TSFuCKyNtcsZENr91vM9',
			value: 1.0,
			currency: 'RON',
			transaction_id: '',
		});
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.checkoutContainer}>
				<div className={styles.image}>
					<img
						src={Self}
						alt='embrace yourself, tablouri personalizate canvas'
					/>
				</div>
				{!wideScreen && (
					<OrderResume
						storedProducts={storedProducts}
						deliveryPrice={deliveryPrice}
					/>
				)}
				<AddressForm />
			</div>
			{wideScreen && (
				<div className={styles.shoppingContainer}>
					<div className={styles.fixedContainer}>
						<CheckoutCart
							storedProducts={storedProducts}
							deliveryPrice={deliveryPrice}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
