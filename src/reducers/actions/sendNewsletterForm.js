import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadNewsletterState } from '../slices/newsletterState';

const sendNewsletterAction = (email, dispatch) => {
	console.log(email);
	axios
		.post(`${BACKEND_PATH}/newsletter/add`, { email })
		.then(() => {
			dispatch(loadNewsletterState(true));
		})
		.catch(() => {
			dispatch(loadNewsletterState(false));
		});
};

export default sendNewsletterAction;
