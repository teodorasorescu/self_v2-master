import React, { Component } from 'react';
import styles from '../styling/checkout.module.scss';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import AddressForm from './AddressForm';
import { CheckoutCart } from './CheckoutCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OrderResume } from './OrderResume';

export const Checkout = () => {
	const { headerOn, setHeaderOn } = useStateContext();
	const wideScreen = useMediaQuery('(min-width:1025px)');
	const smartphoneFoldScreen = useMediaQuery('(max-width:300px)');
	const ipadScreen = useMediaQuery('(width:1024px)');

	setHeaderOn(false);
	return (
		<div className={styles.container}>

				<div className={styles.checkoutContainer}>
					<div className={styles.text}>
						<h
							style={{
								fontSize: '70px',
								fontWeight: '500',
							}}
						>
							self.
						</h>
					</div>
					{!wideScreen && <OrderResume/>}
					<AddressForm />
				</div>
			{wideScreen && (
				<div className={styles.shoppingContainer}>
					<div className={styles.fixedContainer}>
						<CheckoutCart />
					</div>
				</div>
			)}
		</div>
	);
};
