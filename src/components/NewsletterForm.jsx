import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import classes from '../styling/discount.form.module.scss';
import sendNewsletterAction from '../reducers/actions/sendNewsletterForm';
import { selectNewsletterState } from '../reducers/slices/newsletterState';

const NewsletterForm = () => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const newsletterSubmitted = useSelector(selectNewsletterState);

	const setField = (event) => {
		setEmail(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		sendNewsletterAction(email, dispatch);
	}

	return (
		<div className={classes.container}>
			<form onSubmit={handleSubmit}>
				<div className='input-group mb-3'>
					<input
						className={`${classes.formInput} form-control`}
						type='text'
						placeholder='Email'
						aria-describedby='basic-addon2'
						required
						value={email}
						onChange={setField}
					/>
					<div className={`input-group-append ${classes.inputContainer}`}>
						<Button className={classes.buttonContainer} type='submit'>
							I'm in
						</Button>
					</div>
				</div>
			</form>
			{newsletterSubmitted != null && (
				<>
					{newsletterSubmitted === true &&
						"Welcome to our community! I'm sure you're a cool artsy person!"}
				</>
			)}
		</div>
	);
};

export default NewsletterForm;
