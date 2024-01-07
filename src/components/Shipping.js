import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styling/address.form.module.scss';

export const Shipping = () => {
	return (
		<div>
			<h3 align='left' className={styles.titleShipping}>
				Metodă de expediere
			</h3>
			<div className={styles.shippingContainer}>
				<p>Curier rapid - Cargus</p>
				<p className={styles.pBold}>20,00 lei</p>
			</div>
		</div>
	);
};
