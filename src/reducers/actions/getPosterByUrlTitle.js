import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import {
	loadPoster,
	loadPosterFailed,
	loadPosterStarted,
} from '../slices/posterSlice';

const getPosterByUrlTitle = (urlTitle, dispatch) => {
	dispatch(loadPosterStarted());
	axios
		.get(`${BACKEND_PATH}/products/posters/` + urlTitle)
		.then((response) => {
			const resp = response.data;
			console.log(resp);
			const listShowcaseImgs = resp.showcase.split(',');

			const poster = {
				...resp,
				showcase: listShowcaseImgs,
			};

			dispatch(loadPoster(poster));
		})
		.catch(() => {
			dispatch(loadPosterFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getPosterByUrlTitle;
