import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from '../styling/newsletter.form.module.scss';
import { selectNewsletterState } from '../reducers/slices/newsletterFormSlice';
import sendNewsletterAction from '../reducers/actions/sendNewsletterForm';

const NewsletterForm = () => {
	const [email, setEmail] = useState('');

	const newsletterSuccess = useSelector(selectNewsletterState);
	const dispatch = useDispatch();

	const setField = (event) => {
		setEmail(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		sendNewsletterAction({ email: email }, dispatch);
	}

	return (
		<div className={classes.container}>
			{newsletterSuccess ? (
				<div className={classes.thankYou}>
					<h3>You rock ♡ Thank you!</h3>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div class='input-group mb-3'>
						<input
							type='text'
							class='form-control'
							placeholder='Email'
							aria-label='Email'
							aria-describedby='basic-addon2'
							required
							value={email}
							onChange={(e) => {
								setField(e);
							}}
						/>
						<div class='input-group-append' className={classes.inputContainer}>
							<button class='btn btn-outline-secondary' type='submit'>
								I'm in{' '}
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default NewsletterForm;
