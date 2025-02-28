import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadNewsletterState } from '../slices/newsletterState';

const sendFreePosterForm = (email, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/newsletter/add`, { email })
		.then(() => {
			dispatch(loadNewsletterState(true));
		})
		.catch(() => {
			dispatch(loadNewsletterState(false));
		});
};

export default sendFreePosterForm;
