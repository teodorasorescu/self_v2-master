import React, { useEffect } from 'react';
import styles from '../styling/checkout.module.scss';
import { useStateContext } from '../contexts/ContextProvider';
import AddressForm from './AddressForm.jsx';
import { CheckoutCart } from './CheckoutCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OrderResume } from './OrderResume';
import { S3_BUCKET } from '../constants/links.js';

export const Checkout = () => {
	const { headerOn, setHeaderOn } = useStateContext();
	const wideScreen = useMediaQuery('(min-width:1025px)');
	const storedProducts = JSON.parse(localStorage.getItem('products'));
	const Self = S3_BUCKET + '/self_logo.webp';
	useEffect(() => {
		setHeaderOn(false);
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
