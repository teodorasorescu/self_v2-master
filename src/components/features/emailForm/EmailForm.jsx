import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { selectNewsletterState } from '../../../reducers/slices/newsletterState';
import classes from './email-form.module.scss';
import sendEarlyAccessEmail from '../../../reducers/actions/sendEarlyAcessEmail';

const EmailForm = ({ afterMessage }) => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const newsletterSubmitted = useSelector(selectNewsletterState);

	const setField = (event) => {
		setEmail(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		sendEarlyAccessEmail(email, dispatch);
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
							SUBMIT
						</Button>
					</div>
				</div>
			</form>
			{newsletterSubmitted != null && (
				<>{newsletterSubmitted === true && <p>{afterMessage}</p>}</>
			)}
		</div>
	);
};

export default EmailForm;
