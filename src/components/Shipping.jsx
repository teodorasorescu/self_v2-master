import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styling/shipping.module.scss';
import { getLockerPluginInstance } from './EasyboxLocker';
import { useStateContext } from '../contexts/ContextProvider';

import { useDispatch } from 'react-redux';
import { shippingPrices } from '../constants/productConstants';
import { loadDeliveryPriceState } from '../reducers/slices/deliveryPriceSlice';
import { useCountry } from '../contexts/CountryProvider';
import { samedayCountriesName } from '../constants/utils';
import countries from '../constants/countries';
import logoDPD from './DPD LOGO.svg';
import samedayLogo from './logo-sameday.svg';

export const Shipping = ({ country }) => {
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
	const { countryCode } = useCountry();

	let pluginInstance = getLockerPluginInstance(countryCode);
	pluginInstance.subscribe(closeAndSaveLockerId);

	const computeShippingPrice = () => {
		const shippingPrice = shippingPrices.get(countryCode);

		const filteredProducts = storedProducts.filter(
			(product) => product.frameColor === 'none' && product.chassis === false
		);

		if (filteredProducts.length === storedProducts.length) {
			setHomeDeliveryAmount(shippingPrice?.get('courier')['small']);
			setLockerDeliveryAmount(shippingPrice?.get('locker')['small']);
		} else {
			setHomeDeliveryAmount(shippingPrice?.get('courier')['large']);
			setLockerDeliveryAmount(shippingPrice?.get('locker')['large']);
		}
	};

	function closeAndSaveLockerId(locker) {
		setLocker(locker);
		setCustomer({ ...customer, lockerId: locker.lockerId });
		pluginInstance.close();
	}

	const saveCustomerShippingMethod = (value) => {
		let shippingPrice = 0;
		if (value === 2) {
			pluginInstance.open();
			shippingPrice = lockerDeliveryAmount;
			dispatch(loadDeliveryPriceState(lockerDeliveryAmount));
		} else {
			shippingPrice = homeDeliveryAmount;
			dispatch(loadDeliveryPriceState(homeDeliveryAmount));
		}

		setShippingMethod(value);
		setCustomer({
			...customer,
			shippingMethod: value,
			shippingPrice: shippingPrice,
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
				Shipping Method
			</h3>

			{countries.includes(country) ? (
				samedayCountriesName.includes(country) ? (
					<>
						<img
							src={samedayLogo}
							style={{ marginBottom: '3%' }}
							alt='Self Posters Logo'
						/>
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
										<p>Standard Shipping</p>
										{shippingMethod === 1 && homeDeliveryAmount !== 0 && (
											<p className={styles.pBold}>FREE</p>
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
									<p>Easybox Delivery</p>
									{shippingMethod === 2 && lockerDeliveryAmount !== 0 && (
										<p className={styles.pBold}>FREE</p>
									)}
								</label>
							</div>
							{shippingMethod === 2 && !isError && (
								<p>
									{locker.name} <br /> {locker.address} <br /> {locker.city}{' '}
									<br /> {locker.county}
								</p>
							)}
							{isError && <p>Choose locker or change delivery method.</p>}
						</form>
					</>
				) : (
					<>
						<img
							src={logoDPD}
							style={{ marginBottom: '3%' }}
							width='60'
							alt='DPD Logo'
						/>
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
										<p>Standard DPD Shipping</p>
										{shippingMethod === 1 && homeDeliveryAmount !== 0 && (
											<p className={styles.pBold}>FREE</p>
										)}
									</label>
								</div>
							</div>
						</form>
					</>
				)
			) : (
				<p>Please choose your country to see available shipping methods.</p>
			)}
		</div>
	);
};
