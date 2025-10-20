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
			const resp = response.data;

			const listShowcaseImgs = resp.showcase.split(',');

			const sticker = {
				...resp,
				showcase: listShowcaseImgs,
			};

			dispatch(loadSticker(sticker));
		})
		.catch(() => {
			dispatch(loadStickerFailed(BACKEND_ERROR_MESSAGE));
		});
};

export default getStickerByUrlTitle;
