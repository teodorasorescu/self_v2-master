import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styling/address.form.module.scss';
import countries from '../constants/countries';
import states from '../constants/states';
import { useStateContext } from '../contexts/ContextProvider';
import { Shipping } from './Shipping';
import useMediaQuery from '@mui/material/useMediaQuery';
import { loadStripe } from '@stripe/stripe-js';

export const AddressForm = () => {
	const { customer, setCustomer } = useStateContext();
	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);

	const setField = (event) => {
		setCustomer({ ...customer, [event.target.name]: event.target.value });
	};

	const smartphoneScreen = useMediaQuery('max-width:1025px');

	var heightT = '7vh';
	if (smartphoneScreen) {
		heightT = '11vh';
	}

	function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		e.target.classList.add('was-validated');
	}

	const setCustomerField = () => {
		const newsletterChanged = !customer.newsletter;
		setCustomer({ ...customer, newsletter: newsletterChanged });
	};

	const sendOrder = async () => {
		const stripe = await loadStripe(process.env.PUBLIC_KEY_STRIPE);
		console.log(products);
		const products = storedProducts.map((product, i) => {
			return {
				quantity: product.quantity,
				price: product.pFrice,
			};
		});

		const body = {
			products: products,
		};

		const headers = {
			'Content-Type': 'application/json',
		};

		const response = await fetch('http://localhost:8080/checkout/create', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(body),
		});

		const session = await response.json();

		const result = stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.log(result.error);
		}
	};

	return (
		<div>
			<div className={styles.container}>
				<form noValidate onSubmit={handleSubmit}>
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
							<div className='invalid-feedback'>Introdu un e-mail</div>
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
								Doresc să primesc e-mailuri cu noutăți și oferte{' '}
							</label>
						</div>
					</div>
					<div>
						<h3 align='left' className={styles.hTitle}>
							Livrare
						</h3>
						<div className='form-group' style={{ paddingBottom: '2%' }}>
							<input
								id='firstName'
								name='firstName'
								type='text'
								placeholder='Prenume'
								className='form-control'
								value={customer.firstName}
								onChange={(e) => {
									setField(e);
								}}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Introdu un prenume</div>
						</div>
						<div className='form-group'>
							<input
								id='lastName'
								name='lastName'
								type='text'
								placeholder='Nume de familie'
								className='form-control'
								value={customer.lastName}
								onChange={(e) => {
									setField(e);
								}}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Introdu un nume</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='address'
								name='address'
								type='text'
								className='form-control'
								placeholder='Adresă'
								value={customer.address}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Introdu o adresă</div>
						</div>

						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='addressInfo'
								name='addressInfo'
								type='text'
								placeholder='Scară, etaj, apartament, etc'
								className='form-control'
								value={customer.addressInfo}
								onChange={setField}
								style={{ height: heightT }}
							/>
						</div>

						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='postalCode'
								name='postalCode'
								type='text'
								className='form-control'
								placeholder='Cod poștal'
								value={customer.postalCode}
								onChange={setField}
								style={{ height: heightT }}
							/>
						</div>

						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='city'
								name='city'
								type='text'
								className='form-control'
								placeholder='Localitate'
								value={customer.city}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>Introdu o localitate</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<select
								className='form-select'
								id='state'
								name='state'
								defaultValue={customer.state}
								onChange={setField}
								style={{ height: heightT }}
								required
							>
								<option style={{ color: 'grey' }}>Județ</option>
								{states.map((state, index) => {
									return (
										<option key={index} value={`state-${index}`}>
											{state}
										</option>
									);
								})}
							</select>
							<div className='invalid-feedback'>
								{' '}
								<div className='invalid-feedback'>Introdu un județ</div>
							</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<select
								id='country'
								name='country'
								className='form-select'
								placeholder='Tară/Regiune'
								defaultValue={customer.country}
								onChange={setField}
								style={{ height: heightT }}
								required
							>
								<option value=''>Tară / Regiune</option>
								{countries.map((country, index) => {
									return <option key={`country-${index}`}>{country}</option>;
								})}
							</select>
							<div className='invalid-feedback'>Introdu o țară</div>
						</div>
						<div className='form-group' style={{ paddingTop: '2%' }}>
							<input
								id='phoneNumber'
								name='phoneNumber'
								type='text'
								placeholder='Telefon'
								className='form-control'
								value={customer.phoneNumber}
								onChange={setField}
								style={{ height: heightT }}
								required
							/>
							<div className='invalid-feedback'>
								Introdu un număr de telefon
							</div>
						</div>
					</div>
					<Shipping />

					<div style={{ paddingTop: '2%', paddingBottom: '5%' }}>
						<button
							type='submit'
							className={styles.buttonContainer}
							onClick={() => sendOrder()}
						>
							PLĂTEȘTE ACUM
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddressForm;
