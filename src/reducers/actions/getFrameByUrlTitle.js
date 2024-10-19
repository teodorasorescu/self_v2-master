import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import {
	loadPoster,
	loadPosterFailed,
	loadPosterStarted,
} from '../slices/posterSlice';

const getFrameByUrlTitle = (urlTitle, dispatch) => {
	dispatch(loadPosterStarted());
	axios
		.get(`${BACKEND_PATH}/products/frames/` + urlTitle)
		.then((response) => {
			dispatch(loadPoster(response.data));
		})
		.catch(() => {
			dispatch(loadPosterFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getFrameByUrlTitle;
