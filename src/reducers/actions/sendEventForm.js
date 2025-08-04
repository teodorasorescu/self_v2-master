import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadNewsletterState } from '../slices/newsletterState';

const sendEventForm = (member, dispatch) => {
	return axios
		.post(`${BACKEND_PATH}/register/member`, member)
		.then(() => {
			dispatch(loadNewsletterState(true));
		})
		.catch((error) => {
			if (error.response && error.response.status === 409) {
				dispatch(loadNewsletterState(true));
			} else {
				dispatch(loadNewsletterState(false));
			}
		});
};

export default sendEventForm;
