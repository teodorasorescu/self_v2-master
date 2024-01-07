import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/address.css';
import countries from '../constants/countries';
import states from '../constants/states';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadCustomer, selectCustomer } from '../reducers/customerSlice';
import { useStateContext } from '../contexts/ContextProvider';

export const PaymentForm = () => {
	const { customer, setCustomer } = useStateContext();

	const setField = (event) => {
		setCustomer({ ...customer, [event.target.name]: event.target.value });
	};

	const setCustomerField = () => {
		const newsletterChanged = !customer.newsletter;
		setCustomer({ ...customer, newsletter: newsletterChanged });
	};

	return (
		<div>
			<div>
				<h3
					align='left'
					style={{ fontSize: 'x-large', paddingBottom: '2%', paddingTop: '2%' }}
				></h3>
			</div>
		</div>
	);
};

export default PaymentForm;
