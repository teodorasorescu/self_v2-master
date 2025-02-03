import classes from './access.module.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Heart from './heart.png';
import SignUpModal from '../../features/signUpModal/SignUpModal';
import sendAccessCodeAction from '../../../reducers/actions/sendAccessCodeAction';
import { S3_BUCKET } from '../../../constants/links';
import { selectAccessState } from '../../../reducers/slices/accessCodeSlice';
const selfLogo = S3_BUCKET + '/self_logo.webp';

const EarlyAccessPage = () => {
	const [code, setCode] = useState('');
	const dispatch = useDispatch();
	const accessState = useSelector(selectAccessState);
	const setField = (event) => {
		setCode(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		sendAccessCodeAction(code, dispatch);
	}

	return (
		<div className={classes.container}>
			<SignUpModal />

			<h1>Valentine's Day Collection</h1>
			<img src={Heart} width={100} alt='vdaycollection' />
			<form onSubmit={handleSubmit}>
				<div className='input-group mb-3'>
					<input
						className={`${classes.formInput} form-control`}
						type='text'
						placeholder='Enter Code'
						aria-describedby='basic-addon2'
						required
						value={code}
						onChange={setField}
					/>
					<div className={`input-group-append ${classes.inputContainer}`}>
						<Button className={classes.buttonContainer} type='submit'>
							GET IN
						</Button>
					</div>
				</div>
			</form>
			{accessState != null && (
				<>{accessState === false && <p>Invalid access code.</p>}</>
			)}
			<img width='100' src={selfLogo} alt='logo' />
		</div>
	);
};

export default EarlyAccessPage;
