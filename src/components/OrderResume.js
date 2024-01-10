import React from 'react';
import styles from '../styling/order.resume.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStateContext } from '../contexts/ContextProvider';
import { CheckoutCart } from './CheckoutCart';

export const OrderResume = () => {
	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);
	const { orderResume, setOrderResume } = useStateContext();

	const total =
		storedProducts.reduce((a, v) => (a = a + v.quantity * 120), 0) + 20;

	const setOrderResumeTrue = () => {
		setOrderResume(true);
	};

	const setOrderResumeFalse = () => {
		setOrderResume(false);
	};
	return (
		<div className={styles.container}>
			{orderResume === false && (
				<div
					className={styles.resumeContainer}
					onClick={() => setOrderResumeTrue()}
				>
					<div className={styles.textContainer}>
						<p>
							Afișează rezumatul comenzii <KeyboardArrowDownIcon />
						</p>
						<p>{total + '.00 lei'}</p>
					</div>
				</div>
			)}
			{orderResume === true && (
				<div
					className={styles.resumeContainer}
					onClick={() => setOrderResumeFalse()}
				>
					<div className={styles.textContainer}>
						<p>
							Ascunde rezumatul comenzii <KeyboardArrowUpIcon />
						</p>
						<p>{total + '.00 lei'}</p>
					</div>

					<div className={styles.cartContainer}>
						<CheckoutCart />
					</div>
				</div>
			)}
		</div>
	);
};
