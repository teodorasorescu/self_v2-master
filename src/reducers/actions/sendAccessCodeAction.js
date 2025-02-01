import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadAccessState } from '../slices/accessCodeSlice';

const sendAccessCodeAction = (code, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/discount/` + code)
		.then(() => {
			dispatch(loadAccessState(true));
			window.location.reload();
		})
		.catch(() => {
			dispatch(loadAccessState(false));
		});
};

export default sendAccessCodeAction;
