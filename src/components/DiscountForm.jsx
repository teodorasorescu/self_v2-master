import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import classes from '../styling/newsletter.form.module.scss';
import sendDiscountAction from '../reducers/actions/sendDiscountAction';
import { selectDiscountCodeState } from '../reducers/slices/discountCodeSlice';

const DiscountForm = () => {
	const [discountCode, setDiscountCode] = useState('');
	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);
	const discountCodeSuccess = useSelector(selectDiscountCodeState);
	const dispatch = useDispatch();

	const setField = (event) => {
		setDiscountCode(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		sendDiscountAction(discountCode, dispatch, storedProducts);
	}

	return (
		<div className={classes.container}>
			<form onSubmit={handleSubmit}>
				<div className='input-group mb-3'>
					<input
						className={`${classes.formInput} form-control`}
						type='text'
						placeholder='Cod de reducere'
						aria-describedby='basic-addon2'
						required
						value={discountCode}
						onChange={setField}
					/>
					<div className={`input-group-append ${classes.inputContainer}`}>
						<Button className={classes.buttonContainer} type='submit'>
							Aplică
						</Button>
					</div>
				</div>
			</form>
			{discountCodeSuccess != null && (
				<>
					{discountCodeSuccess === true ? (
						<p>Codul a fost aplicat cu succes!</p>
					) : (
						<p>Codul introdus este invalid.</p>
					)}
				</>
			)}
		</div>
	);
};

export default DiscountForm;
