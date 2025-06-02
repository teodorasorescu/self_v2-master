import { useEffect, useState } from 'react';
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
		const popupClosed = localStorage.getItem('popUpClosed') === 'true';

		if (!hasVisited && !popupClosed) {
			setTimeout(() => setIsOpen(true), 5000);
		}

		if (popupClosed && !hasVisited) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('popUpClosed', 'false');
			}, 600000);
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
		localStorage.setItem('popUpClosed', 'true');
	};

	return (
		isOpen && (
			<div className={styles['modal-overlay']}>
				<div className={styles.modal}>
					<CloseIcon className={styles.xIcon} onClick={handleClose} />
					<h2>Are you artsy enough for our club?</h2>
					<p>
						If yes, then sign up and be part of this artsy community with
						special offers and insider updates!
					</p>
					<NewsletterForm />
				</div>
			</div>
		)
	);
};

export default SignUpModal;
