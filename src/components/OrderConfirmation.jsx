import OrderIllustration from '../images/order_confirmation.webp';
import styles from '../styling/order.confirmation.module.scss';
import { CheckoutCart } from './CheckoutCart';
import { OrderResume } from './OrderResume';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStateContext } from '../contexts/ContextProvider';
import React, { useEffect, useState } from 'react';
import sendOrderAction from '../reducers/actions/sendOrderAction';
import getPaymentStatusAction from '../reducers/actions/getPaymentStatusAction';
import PaymentFailed from '../images/declined.webp';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrderFailed } from '../reducers/slices/orderFailedSlice';
import OrderFailed from '../images/orderfailed.webp';
import { selectPaymentStatus } from '../reducers/slices/paymentStatusSlice';

const OrderConfirmation = () => {
	const wideScreen = useMediaQuery('(min-width:1025px)');
	const { headerOn, setHeaderOn } = useStateContext();
	const [unpaidOrder, setUnpaidOrder] = useState(false);

	const productsOrder = JSON.parse(localStorage.getItem('productsOrder'));

	const customer = JSON.parse(localStorage.getItem('customer'));
	const dispatch = useDispatch();
	const sessionId = localStorage.getItem('sessionId');
	const orderFailed = useSelector(selectOrderFailed);
	const payment = useSelector(selectPaymentStatus);
	const failure = orderFailed || unpaidOrder;

	useEffect(() => {
		setHeaderOn(true);
		getPaymentStatusAction(sessionId, dispatch);
		if (payment.paymentStatus === 'paid') {
			const products = productsOrder.map((product, i) => {
				return {
					quantity: product.quantity,
					price: product.price,
					frameColor: product.frameColor,
					chassis: product.chassis,
					title: product.title,
					colors: product.colors.toString(),
					image: product.image,
					fontColor: JSON.stringify(product.fontColor),
				};
			});

			sendOrderAction(
				{
					products: products,
					customer: customer,
				},
				dispatch
			);
			setUnpaidOrder(false);
		}

		if (payment.paymentStatus === 'unpaid') {
			setUnpaidOrder(true);
			localStorage.setItem('productsOrder', JSON.stringify([]));
		}
	}, []);

	return (
		<div className={styles.container}>
			{failure ? (
				<div className={styles.failedOrderContainer}>
					{unpaidOrder && (
						<>
							<img src={PaymentFailed} alt='paymentfailed' />
							<h3>Tranzacție nereușită</h3>
						</>
					)}
					{orderFailed && (
						<>
							<img src={OrderFailed} alt='orderfailed' />
							<h3>A apărut o eroare. Încearcă mai târziu.</h3>
						</>
					)}
				</div>
			) : (
				<>
					<div className={styles.confirmationContainer}>
						<img
							src={OrderIllustration}
							alt='Comanda ta cu tablouri personalizate canvas gradient este confirmata!'
						/>
						<h5>Mulțumim pentru comandă!</h5>
						<p>
							Comanda ta este confirmată și va fi livrată în cel târziu 3-5 zile
							lucrătoare. Îți vom trimite un email cu confirmarea în cel mai
							scurt timp.
						</p>
					</div>
					<div className={styles.orderResumeContainer}>
						{wideScreen && <h4>Rezumatul comenzii</h4>}
						{wideScreen && <CheckoutCart storedProducts={productsOrder} />}
						{!wideScreen && <OrderResume storedProducts={productsOrder} />}
					</div>
				</>
			)}
		</div>
	);
};

export default OrderConfirmation;
