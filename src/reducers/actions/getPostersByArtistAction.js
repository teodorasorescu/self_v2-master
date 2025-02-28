import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';

import {
	loadPostersFailed,
	loadPostersStarted,
	loadPostersSuccess,
} from '../slices/posterShowcaseSlice';

const getPostersByArtistAction = (dispatch, artistId) => {
	dispatch(loadPostersStarted());

	axios
		.get(`${BACKEND_PATH}/artist/posters` + artistId)
		.then((response) => {
			console.log(response.data);
			dispatch(loadPostersSuccess(response.data));
		})
		.catch(() => {
			dispatch(loadPostersFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getPostersByArtistAction;
