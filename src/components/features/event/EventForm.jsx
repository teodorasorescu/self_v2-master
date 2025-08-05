import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import classes from './event.form.module.scss';
import sendEventForm from '../../../reducers/actions/sendEventForm';
import { selectNewsletterState } from '../../../reducers/slices/newsletterState';
import Loader from '../../ui/loader/Loader';

const EventForm = ({ onSuccess }) => {
	const [member, setMember] = useState({
		email: '',
		name: '',
		phoneNumber: '',
		isComingWithFriend: 'Yes',
	});

	const dispatch = useDispatch();
	const memberSubmitted = useSelector(selectNewsletterState);
	const [isLoading, setIsLoading] = useState(false);

	const setField = (event) => {
		setMember({ ...member, [event.target.name]: event.target.value });
	};

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);

		try {
			await sendEventForm(member, dispatch);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (memberSubmitted === true && onSuccess) {
			onSuccess();
		}
	}, [memberSubmitted, onSuccess]);

	return (
		<div className={classes.container}>
			{isLoading && (
				<div>
					<p>Can't wait to see you!</p>
					<Loader />
				</div>
			)}
			<form onSubmit={handleSubmit} className={classes.form}>
				<div className={classes.inputGroup}>
					<input
						className={classes.formInput}
						type='text'
						name='email'
						placeholder='Email'
						required
						value={member.email}
						onChange={setField}
					/>
				</div>
				<div className={classes.inputGroup}>
					<input
						className={classes.formInput}
						type='text'
						name='name'
						placeholder='Name'
						required
						value={member.name}
						onChange={setField}
					/>
				</div>
				<div className={classes.inputGroup}>
					<input
						className={classes.formInput}
						type='text'
						name='phoneNumber'
						placeholder='Phone Number'
						required
						value={member.phoneNumber}
						onChange={setField}
					/>
				</div>
				<div className={classes.inputGroup}>
					<p>Bringing a friend? The ticket will be 90 lei!</p>
					<select
						name='isComingWithFriend'
						className={classes.formInput}
						onChange={setField}
						value={member.isComingWithFriend}
					>
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
				</div>
				<Button
					className={classes.buttonContainer}
					type='submit'
					disabled={isLoading}
				>
					Save My Spot
				</Button>
			</form>

			{memberSubmitted === true && <p>Going to the payment...</p>}
		</div>
	);
};

export default EventForm;
