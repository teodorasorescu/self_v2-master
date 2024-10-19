import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import {
	loadPostersSuccess,
	loadPostersStarted,
	loadPostersFailed,
} from '../slices/postersSlice';

const getFramesAction = (dispatch) => {
	dispatch(loadPostersStarted());

	axios
		.get(`${BACKEND_PATH}/products/frames`)
		.then((response) => {
			dispatch(loadPostersSuccess(response.data));
		})
		.catch(() => {
			dispatch(loadPostersFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getFramesAction;
