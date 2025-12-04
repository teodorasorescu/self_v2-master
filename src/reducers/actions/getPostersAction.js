import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import {
	loadPostersSuccess,
	loadPostersStarted,
	loadPostersFailed,
} from '../slices/postersSlice';

const getPostersAction = (dispatch, group) => {
	dispatch(loadPostersStarted());
	let queryParam = '?group=nogrup';
	if (group !== null && group !== undefined) {
		queryParam = '?group=' + group;
	}

	console.log(queryParam);
	axios
		.get(`${BACKEND_PATH}/products/posters` + queryParam)
		.then((response) => {
			dispatch(loadPostersSuccess(response.data));
		})
		.catch(() => {
			dispatch(loadPostersFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getPostersAction;
