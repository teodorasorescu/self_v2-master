import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styling/address.form.module.scss';
import countries from '../constants/countries';
import states from '../constants/states';
import { useStateContext } from '../contexts/ContextProvider';
import { Shipping } from './Shipping';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
	calculateTotalPrice,
	computeProductsLength,
	getCurrencyByCountry,
	getRegions,
	samedayCountries,
} from '../constants/utils';
import { price } from '../constants/productConstants';

import sendCheckoutAction from '../reducers/actions/sendCheckoutAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectShippingCities } from '../reducers/slices/shippingCitiesSlice';
import getCitiesByCountyAction from '../reducers/actions/getCitiesByCountyAction';
import { selectDeliveryPrice } from '../reducers/slices/deliveryPriceSlice';
import { useCountry } from '../contexts/CountryProvider';

export const AddressForm = () => {
	const { customer, setCustomer } = useStateContext();
	const { itemCount, setItemCount } = useStateContext();

	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);

	const dispatch = useDispatch();

	const setField = (event) => {
		setCustomer({ ...customer, [event.target.name]: event.target.value });
	};
	const smartphoneScreen = useMediaQuery('max-width:1025px');
	const { countryCode } = useCountry();
	const currency = getCurrencyByCountry(countryCode);

	const total = calculateTotalPrice(storedProducts);
	const discountNo = Math.floor(computeProductsLength(storedProducts) / 3);
	const discount = false;
	//computeProductsLength(storedProducts) / 3 >= 1;

	const deliveryPrice = useSelector(selectDeliveryPrice);
	localStorage.setItem('deliveryPrice', deliveryPrice);

	const getTotal = () => {
		// if (discount) {
		// 	return total - price * discountNo + deliveryPrice;
		// }
		// return total + deliveryPrice;
		return total;
	};

	var heightT = '7vh';
	if (smartphoneScreen) {
		heightT = '11vh';
	}

	function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		sendSession();
	}

	const navigate = useNavigate();

	const setCustomerField = () => {
		const newsletterChanged = !customer.newsletter;
		setCustomer({ ...customer, newsletter: newsletterChanged });
	};

	localStorage.setItem('customer', JSON.stringify(customer));
	const sendSession = () => {
		sendCheckoutAction(
			navigate,
			dispatch,
			{
				total: getTotal(),
				currency: currency,
			},
			setItemCount
		);
	};

	let cities = useSelector(selectShippingCities);
	useEffect(() => {
		getCitiesByCountyAction(dispatch, customer.state);
	}, [customer.state]);

	return (
		<div>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<div>
						<h3 align='left' className={styles.hTitle}>
							Contact
						</h3>
						<div className='form-group'>
							<input
								id='email'
								name='email'
								type='text'
								placeholder='E-mail'
								className='form-control'
								value={customer.email}
								onChange={(e) => {
									setField(e);
								}}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>E-mail Required</div>
						</div>
						<div className='form-check' style={{ paddingBottom: '2%' }}>
							<input
								className='form-check-input'
								id='newsletter'
								type='checkbox'
								name='newsletter'
								value={customer.newsletter}
								onChange={setCustomerField}
								style={{ paddingBottom: '2%' }}
							/>
							<label
								className='form-check-label'
								style={{
									maxInlineSize: '100%',
									display: 'block',
									cursor: 'pointer',
									paddingTop: '0.5%',
								}}
							>
								I want to be part of Artsy Club
							</label>
						</div>
					</div>
					<div>
						<h3 align='left' className={styles.hTitle}>
							Delivery
						</h3>
						<div className='form-group' style={{ paddingBottom: '2%' }}>
							<input
								id='firstName'
								name='firstName'
								type='text'
								placeholder='First Name'
								className='form-control'
								value={customer.firstName}
								onChange={(e) => {
									setField(e);
								}}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>First Name Required</div>
						</div>
						<div className='form-group'>
							<input
								id='lastName'
								name='lastName'
								type='text'
								placeholder='Last Name'
								className='form-control'
								value={customer.lastName}
								onChange={(e) => {
									setField(e);
								}}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Last Name Required</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='address'
								name='address'
								type='text'
								className='form-control'
								placeholder='Address'
								value={customer.address}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Address Required</div>
						</div>

						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='addressInfo'
								name='addressInfo'
								type='text'
								placeholder='Apartment, suite, etc.'
								className='form-control'
								value={customer.addressInfo}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>{' '}
							<div className='invalid-feedback'>Apartment, suite required</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<select
								id='country'
								name='country'
								className='form-select'
								placeholder='Country / Region'
								defaultValue={customer.country}
								onChange={setField}
								style={{ height: heightT }}
								required
							>
								<option value=''>Country / Region</option>
								{countries.map((country, index) => {
									return <option key={`country-${index}`}>{country}</option>;
								})}
							</select>
							<div className='invalid-feedback'>Country Required</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							{samedayCountries.includes(customer.country) ? (
								<select
									className='form-select'
									id='state'
									name='state'
									defaultValue={customer.state}
									onChange={setField}
									style={{ height: heightT }}
									required
								>
									<option style={{ color: 'grey' }}>County</option>
									{getRegions(customer.country).map((state, index) => (
										<option key={index}>{state}</option>
									))}
								</select>
							) : (
								<input
									type='text'
									className='form-control'
									id='state'
									name='state'
									value={customer.state}
									onChange={setField}
									placeholder='State / Region'
									style={{ height: heightT }}
									required
								/>
							)}
							<div className='invalid-feedback'>County Required</div>
						</div>

						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								className='form-control'
								id='cityId'
								name='cityId'
								type='text'
								placeholder='City'
								value={customer.cityId}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>City Required</div>
							{/* <option style={{ color: 'grey' }}>City</option>
								{cities.map((city, index) => {
									return (
										<option key={index} value={city.id}>
											{city.name}
										</option>
									);
								})} */}
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='postalCode'
								name='postalCode'
								type='text'
								className='form-control'
								placeholder='Postal Code'
								value={customer.postalCode}
								onChange={setField}
								style={{ height: 'heightT' }}
							/>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='phoneNumber'
								name='phoneNumber'
								type='text'
								placeholder='Phone'
								className='form-control'
								value={customer.phoneNumber}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Phone Required</div>
						</div>
					</div>
					<Shipping country={customer.country} />

					<div className='form-check' style={{ paddingBottom: '2%' }}>
						<input
							className='form-check-input'
							id='policy'
							type='checkbox'
							name='policy'
							style={{ paddingBottom: '2%' }}
							required
						/>
						<label
							className='form-check-label'
							style={{
								maxInlineSize: '100%',
								display: 'block',
								cursor: 'pointer',
								marginTop: '3%',
							}}
						>
							I have read and agree to the
							<a href='privacy-policy'> Privacy Policy</a> and
							<a href='terms-and-conditions'> Terms and Conditions</a>.*
						</label>
					</div>
					<div style={{ paddingTop: '2%', paddingBottom: '5%' }}>
						<button type='submit' className={styles.buttonContainer}>
							PAY NOW
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddressForm;
