import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';

import {
	loadArtist,
	loadArtistFailed,
	loadArtistStarted,
} from '../slices/artistSlice';

const getArtistAction = (dispatch, urlTitle) => {
	dispatch(loadArtistStarted());

	axios
		.get(`${BACKEND_PATH}/artist/` + urlTitle)
		.then((response) => {
			console.log(response.data);
			dispatch(loadArtist(response.data));
		})
		.catch(() => {
			dispatch(loadArtistFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getArtistAction;
