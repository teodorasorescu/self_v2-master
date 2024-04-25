import React from 'react';
import styles from '../styling/order.resume.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStateContext } from '../contexts/ContextProvider';
import { CheckoutCart } from './CheckoutCart';
import { price } from '../constants/productConstants';

export const OrderResume = ({ storedProducts }) => {
	const { orderResume, setOrderResume } = useStateContext();

	const total =
		storedProducts.reduce((a, v) => (a = a + v.quantity * price), 0) + 20;

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
						<p>{total.toFixed(2) + ' lei'}</p>
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
						<p>{total.toFixed(2) + ' lei'}</p>
					</div>

					<div className={styles.cartContainer}>
						<CheckoutCart storedProducts={storedProducts} />
					</div>
				</div>
			)}
		</div>
	);
};
