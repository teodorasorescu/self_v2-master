import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styling/shipping.module.scss';
import { getLockerPluginInstance } from './EasyboxLocker';
import { useStateContext } from '../contexts/ContextProvider';

import { useDispatch } from 'react-redux';
import {
	HOME_DELIVERY_BIG,
	HOME_DELIVERY_SMALL,
	LOCKER_DELIVERY_BIG,
	LOCKER_DELIVERY_SMALL,
} from '../constants/productConstants';
import { loadDeliveryPriceState } from '../reducers/slices/deliveryPriceSlice';

export const Shipping = () => {
	const [shippingMethod, setShippingMethod] = useState(0);
	const [isError, setIsError] = useState(true);
	const [locker, setLocker] = useState({
		lockerId: 0,
		name: '',
		address: '',
		cityId: 0,
		city: '',
		countyId: 1,
		county: '',
	});
	const { customer, setCustomer } = useStateContext();
	const [homeDeliveryAmount, setHomeDeliveryAmount] = useState(0);
	const [lockerDeliveryAmount, setLockerDeliveryAmount] = useState(0);
	const storedProducts = JSON.parse(localStorage.getItem('products'));
	const dispatch = useDispatch();

	let pluginInstance = getLockerPluginInstance();
	pluginInstance.subscribe(closeAndSaveLockerId);

	const computeShippingPrice = () => {
		const filteredProducts = storedProducts.filter(
			(product) => product.frameColor === 'fără' && product.chassis === false
		);

		if (filteredProducts.length === storedProducts.length) {
			setHomeDeliveryAmount(HOME_DELIVERY_SMALL);
			setLockerDeliveryAmount(LOCKER_DELIVERY_SMALL);
		} else {
			setHomeDeliveryAmount(HOME_DELIVERY_BIG);
			setLockerDeliveryAmount(LOCKER_DELIVERY_BIG);
		}
	};

	function closeAndSaveLockerId(locker) {
		setLocker(locker);
		setCustomer({ ...customer, lockerId: locker.lockerId });
		pluginInstance.close();
	}

	const saveCustomerShippingMethod = (value) => {
		let shippingPrice = 0;
		let packageType = '0';
		if (value === 2) {
			pluginInstance.open();
			shippingPrice = lockerDeliveryAmount;
			dispatch(loadDeliveryPriceState(lockerDeliveryAmount));
			packageType = '1';
		} else {
			shippingPrice = homeDeliveryAmount;
			dispatch(loadDeliveryPriceState(homeDeliveryAmount));
		}

		setShippingMethod(value);
		setCustomer({
			...customer,
			shippingMethod: value,
			shippingPrice: shippingPrice,
			packageType: packageType,
		});
	};

	useEffect(() => {
		computeShippingPrice();

		if (shippingMethod === 2 && locker.lockerId === 0) {
			setIsError(true);
		} else {
			setIsError(false);
		}
	}, [
		shippingMethod,
		locker.lockerId,
		lockerDeliveryAmount,
		homeDeliveryAmount,
	]);

	return (
		<div>
			<h3 align='left' className={styles.titleShipping}>
				Metodă de expediere - Sameday
			</h3>
			<form className={styles.formContainer}>
				<div className='form-group'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							name='deliveryMethod'
							id='homeDelivery'
							value='homeDelivery'
							onChange={() => saveCustomerShippingMethod(1)}
							checked={shippingMethod === 1}
						/>
						<label
							className={`form-check-label ${styles.shippingContainer}`}
							htmlFor='homeDelivery'
						>
							<p>Livrare la domiciliu</p>
							{shippingMethod === 1 && homeDeliveryAmount !== 0 && (
								<p className={styles.pBold}>{homeDeliveryAmount} lei</p>
							)}
						</label>
					</div>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='deliveryMethod'
						id='lockerOption'
						value='lockerOption'
						onChange={() => saveCustomerShippingMethod(2)}
						checked={shippingMethod === 2}
					/>
					<label
						className={`form-check-label ${styles.shippingContainer}`}
						htmlFor='lockerOption'
					>
						<p>Punct de colectare</p>
						{shippingMethod === 2 && lockerDeliveryAmount !== 0 && (
							<p className={styles.pBold}>{lockerDeliveryAmount} lei</p>
						)}
					</label>
				</div>
				{shippingMethod === 2 && !isError && (
					<p>
						{locker.name} <br /> {locker.address} <br /> {locker.city} <br />{' '}
						{locker.county}
					</p>
				)}
				{isError && <p>Alege un locker sau schimbă metoda de livrare.</p>}
			</form>
		</div>
	);
};
