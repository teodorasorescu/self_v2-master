import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';

import {
	loadStickersFailed,
	loadStickersStarted,
	loadStickersSuccess,
} from '../slices/stickersSlice';

const getStickersAction = (dispatch) => {
	dispatch(loadStickersStarted());

	axios
		.get(`${BACKEND_PATH}/products/stickers`)
		.then((response) => {
			dispatch(loadStickersSuccess(response.data));
		})
		.catch(() => {
			dispatch(loadStickersFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getStickersAction;
