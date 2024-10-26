import { BACKEND_ERROR_MESSAGE, BACKEND_PATH } from '../../constants/links';
import axios from 'axios';

import {
	loadSticker,
	loadStickerFailed,
	loadStickerStarted,
} from '../slices/stickerSlice';

const getStickerByUrlTitle = (urlTitle, dispatch) => {
	dispatch(loadStickerStarted());
	axios
		.get(`${BACKEND_PATH}/products/stickers/` + urlTitle)
		.then((response) => {
			dispatch(loadSticker(response.data));
		})
		.catch(() => {
			dispatch(loadStickerFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getStickerByUrlTitle;
