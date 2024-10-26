import { React, useEffect } from 'react';
import ProductInfoPage from '../../pages/products/ProductInfoPage';
import {
	selectPoster,
	isPosterLoading,
	posterLoadingError,
} from '../../../reducers/slices/posterSlice';
import Loader from '../../ui/loader/Loader';
import getPosterByUrlTitle from '../../../reducers/actions/getPosterByUrlTitle';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stickerDetails, suport } from '../../../constants/productConstants';
import StickerInfoPage from '../../pages/stickers/StickerInfoPage';
import {
	isStickerLoading,
	selectSticker,
	stickerLoadingError,
} from '../../../reducers/slices/stickerSlice';
import getStickerByUrlTitle from '../../../reducers/actions/getStickerByUrlTitle';

const StickerDetails = () => {
	const { urlTitle } = useParams();
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isStickerLoading);
	const errorMessage = useSelector(stickerLoadingError);
	const sticker = useSelector(selectSticker);
	// let content = <Error message={errorMessage} />;
	let content;
	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<StickerInfoPage
				product={sticker}
				suport={suport}
				details={stickerDetails}
			/>
		);
	}

	useEffect(() => {
		getStickerByUrlTitle(urlTitle, dispatch);
	}, []);

	return <>{content}</>;
};

export default StickerDetails;
