import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './signup-modal.module.scss';
import { useSelector } from 'react-redux';
import { selectNewsletterState } from '../../../reducers/slices/newsletterState';
import CloseIcon from '@mui/icons-material/Close';
import NewsletterForm from '../../NewsletterForm';

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
			}, 5000); // ⏳ Adjust delay time (5000ms = 5 seconds)
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
					<CloseIcon className={styles.xIcon} onClick={handleClose} />
					<h2>Self Posters Club</h2>
					<p>
						Sign up and be part of an artsy community with special offers and
						insider updates!
					</p>
					<NewsletterForm />
				</div>
			</div>
		)
	);
};

export default SignUpModal;
