import { React, useEffect } from 'react';
import ProductInfoPage from '../../pages/products/ProductInfoPage';

import Loader from '../../ui/loader/Loader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { framesDetails, suport } from '../../../constants/productConstants';
import {
	isFrameLoading,
	frameLoadingError,
	selectFrame,
} from '../../../reducers/slices/frameSlice';

import getFrameByUrlTitle from '../../../reducers/actions/getFrameByUrlTitle';

const FramesDetails = () => {
	const { urlTitle } = useParams();
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isFrameLoading);
	const errorMessage = useSelector(frameLoadingError);
	const frame = useSelector(selectFrame);
	// let content = <Error message={errorMessage} />;
	let content;
	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<ProductInfoPage
				product={frame}
				suport={suport}
				details={framesDetails}
			/>
		);
	}

	useEffect(() => {
		getFrameByUrlTitle(urlTitle, dispatch);
	}, []);

	return <>{content}</>;
};

export default FramesDetails;
