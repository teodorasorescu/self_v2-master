import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './signup-modal.module.scss';
import { useSelector } from 'react-redux';
import { selectNewsletterState } from '../../../reducers/slices/newsletterState';
import EmailForm from '../emailForm/EmailForm';
import Button from '../../ui/button/Button';

const SignUpModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const newsLetterState = useSelector(selectNewsletterState);

	useEffect(() => {
		const hasVisited =
			Cookies.get('early_access_popup') ||
			localStorage.getItem('early_access_popup');

		if (!hasVisited) {
			setTimeout(() => {
				setIsOpen(true); // Show modal after delay
			}, 1000); // ⏳ Adjust delay time (5000ms = 5 seconds)
		}

		if (newsLetterState == true) {
			if (navigator.cookieEnabled) {
				Cookies.set('early_access_popup', 'true', { expires: 7, path: '/' });
			} else {
				localStorage.setItem('early_access_popup', 'true');
			}
		}
	}, []);

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		isOpen && (
			<div className={styles['modal-overlay']}>
				<div className={styles.modal}>
					<h2>Get Early Access!</h2>
					<p>Sign up now to be the first to know about our Vday launch.</p>
					<EmailForm afterMessage={'You will receive an access code soon!'} />
					<Button
						msg={'Close'}
						style={styles['close-button']}
						onClick={handleClose}
					></Button>
				</div>
			</div>
		)
	);
};

export default SignUpModal;
