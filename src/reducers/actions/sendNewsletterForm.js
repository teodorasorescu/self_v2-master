import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadNewsletterState } from '../slices/newsletterState';

const sendNewsletterAction = (email, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/newsletter/send`, { email })
		.then(() => {
			dispatch(loadNewsletterState(true));
		})
		.catch(() => {
			dispatch(loadNewsletterState(false));
		});
};

export default sendNewsletterAction;
