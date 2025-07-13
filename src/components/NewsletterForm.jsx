import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import classes from '../styling/discount.form.module.scss';
import sendNewsletterAction from '../reducers/actions/sendNewsletterForm';
import { selectNewsletterState } from '../reducers/slices/newsletterState';
import Loader from './ui/loader/Loader';

const NewsletterForm = ({ onSuccess }) => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const newsletterSubmitted = useSelector(selectNewsletterState);
	const [isLoading, setIsLoading] = useState(false);

	const setField = (event) => {
		setEmail(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		sendNewsletterAction(email, dispatch);

		setIsLoading(false);
	}

	useEffect(() => {
		if (newsletterSubmitted === true && onSuccess) {
			onSuccess();
		}
	}, [newsletterSubmitted, onSuccess]);

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
						<Button
							className={classes.buttonContainer}
							type='submit'
							disabled={isLoading}
						>
							{isLoading ? <Loader /> : "I'm in"}
						</Button>
					</div>
				</div>
			</form>

			{/* Optional message (can keep if you want) */}
			{newsletterSubmitted === true && (
				<p>Welcome to our community! I'm sure you're a cool artsy person!</p>
			)}
		</div>
	);
};

export default NewsletterForm;
