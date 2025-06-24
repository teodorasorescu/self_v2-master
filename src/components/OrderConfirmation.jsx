import styles from '../styling/order.confirmation.module.scss';
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect, useState } from 'react';
import sendOrderAction from '../reducers/actions/sendOrderAction';
import getPaymentStatusAction from '../reducers/actions/getPaymentStatusAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrderFailed } from '../reducers/slices/orderFailedSlice';
import { S3_BUCKET } from '../constants/links';
import { useCountry } from '../contexts/CountryProvider';
import { getCurrencyByCountry } from '../constants/utils';

const orderConfirmationImg = S3_BUCKET + '/order_confirmation.webp';
const orderFailedImg = S3_BUCKET + '/orderfailed.webp';
const declinedImg = S3_BUCKET + '/declined.webp';

const OrderConfirmation = () => {
	const { headerOn, setHeaderOn } = useStateContext();
	const [unpaidOrder, setUnpaidOrder] = useState(false);
	const { countryCode } = useCountry();
	const currency = getCurrencyByCountry(countryCode);
	const productsOrder = JSON.parse(localStorage.getItem('productsOrder'));

	const customer = JSON.parse(localStorage.getItem('customer'));
	const dispatch = useDispatch();
	const sessionId = localStorage.getItem('sessionId');
	const orderFailed = useSelector(selectOrderFailed);
	const failure = orderFailed || unpaidOrder;
	const discountCode = localStorage.getItem('discountCode');
	useEffect(() => {
		setHeaderOn(true);

		if (sessionId !== '') {
			const session = getPaymentStatusAction(sessionId, dispatch);

			session.then(function (s) {
				if (s.paymentStatus === 'paid') {
					const products = productsOrder.map((product) => {
						return {
							quantity: product.quantity,
							price: product.price,
							frameColor: product.frameColor,
							chassis: product.chassis,
							title: product.title,
							colors:
								product.colors != undefined && product.colors != null
									? product.colors.toString()
									: null,
							image: product.image,
							fontColor: JSON.stringify(product.fontColor),
							discount: product.discount,
							size: product.size,
						};
					});

					sendOrderAction(
						{
							products: products,
							customer: customer,
							discountCode: discountCode,
							currency: currency,
						},
						dispatch
					);
					setUnpaidOrder(false);
				}
				localStorage.setItem('discountCode', '');

				if (s.paymentStatus === 'unpaid') {
					setUnpaidOrder(true);
					localStorage.setItem('productsOrder', JSON.stringify([]));
				}
			});
		}
	}, []);

	return (
		<div className={styles.container}>
			{failure ? (
				<div className={styles.failedOrderContainer}>
					{unpaidOrder && (
						<>
							<img src={declinedImg} alt='paymentfailed' />
							<h3>Unsuccessful payment</h3>
						</>
					)}
					{orderFailed && (
						<>
							<img src={orderFailedImg} alt='orderfailed' />
							<h3>General error occurred. Try again later!</h3>
						</>
					)}
				</div>
			) : (
				<>
					<div className={styles.confirmationContainer}>
						<img
							src={orderConfirmationImg}
							alt='Comanda ta cu tablouri personalizate canvas gradient este confirmata!'
						/>
						<h5>Thank you for being yourself!</h5>
						<p>
							Your order has been confirmed and will be delivered within 5-7
							business days. We will send you a confirmation email shortly.
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default OrderConfirmation;
