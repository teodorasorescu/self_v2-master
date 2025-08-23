import styles from '../styling/order.resume.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStateContext } from '../contexts/ContextProvider';
import { CheckoutCart } from './CheckoutCart';
import { calculateTotalPrice, getCurrencyByCountry } from '../constants/utils';
import { useCountry } from '../contexts/CountryProvider';

export const OrderResume = ({ storedProducts }) => {
	const { orderResume, setOrderResume } = useStateContext();
	const { countryCode } = useCountry();
	const currency = ' ' + getCurrencyByCountry(countryCode);

	const total = calculateTotalPrice(storedProducts);
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
							Show Your Order <KeyboardArrowDownIcon />
						</p>
						<p>{total.toFixed(1) + currency}</p>
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
							Hide Your Order <KeyboardArrowUpIcon />
						</p>
						<p>{total.toFixed(1) + currency}</p>
					</div>

					<div className={styles.cartContainer}>
						<CheckoutCart storedProducts={storedProducts} />
					</div>
				</div>
			)}
		</div>
	);
};
