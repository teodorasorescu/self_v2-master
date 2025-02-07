import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadNewsletterState } from '../slices/newsletterState';

const sendEarlyAccessEmail = (email, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/newsletter/early-access`, { email })
		.then(() => {
			dispatch(loadNewsletterState(true));
		})
		.catch(() => {
			dispatch(loadNewsletterState(false));
		});
};

export default sendEarlyAccessEmail;
