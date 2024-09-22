import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import classes from '../styling/discount.form.module.scss';
import { selectDiscountState } from '../reducers/slices/discountFormSlice';
import sendDiscountAction from '../reducers/actions/sendDiscountAction';

const DiscountForm = () => {
	const [discountCode, setDiscountCode] = useState('');

	const validDiscountCode = useSelector(selectDiscountState);
	const dispatch = useDispatch();

	const setField = (event) => {
		setDiscountCode(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		sendDiscountAction({ discount: discountCode }, dispatch);
	}

	return (
		<div className={classes.container}>
			<form onSubmit={handleSubmit}>
				<div className={classes.inputContainer}>
					<input
						type='text'
						class='form-control'
						placeholder='Cod de reducere'
						aria-label='Cod de reducere'
						aria-describedby='basic-addon2'
						required
						value={discountCode}
						onChange={(e) => {
							setField(e);
						}}
					/>
					<div class='input-group-append' className={classes.buttonContainer}>
						<Button className={classes.buttonText} type='submit'>
							Aplică
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default DiscountForm;
