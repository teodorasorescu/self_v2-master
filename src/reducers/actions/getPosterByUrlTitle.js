import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import {
	loadPoster,
	loadPosterFailed,
	loadPosterStarted,
} from '../slices/posterSlice';

const getPosterByUrlTitle = (urlTitle, dispatch) => {
	dispatch(loadPosterStarted());
	console.log(urlTitle);
	axios
		.get(`${BACKEND_PATH}/posters/` + urlTitle)
		.then((response) => {
			dispatch(loadPoster(response.data));
		})
		.catch(() => {
			dispatch(loadPosterFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getPosterByUrlTitle;
