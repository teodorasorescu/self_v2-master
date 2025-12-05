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
	let isCard = false;

	if (group !== null && group !== undefined) {
		queryParam = '?group=' + group;
		isCard = true;
	}

	axios
		.get(`${BACKEND_PATH}/products/posters` + queryParam)
		.then((response) => {
			if (isCard) {
				dispatch(
					loadPostersSuccess({
						data: response.data,
						type: 'cards',
					})
				);
			} else {
				dispatch(
					loadPostersSuccess({
						data: response.data,
						type: 'posters',
					})
				);
			}
		})
		.catch(() => {
			dispatch(loadPostersFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getPostersAction;
