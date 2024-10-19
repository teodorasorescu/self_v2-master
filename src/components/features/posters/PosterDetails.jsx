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
import { postersDetails, suport } from '../../../constants/productConstants';

const PosterDetails = () => {
	const { urlTitle } = useParams();
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isPosterLoading);
	const errorMessage = useSelector(posterLoadingError);
	const poster = useSelector(selectPoster);
	// let content = <Error message={errorMessage} />;
	let content;
	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<ProductInfoPage
				product={poster}
				suport={suport}
				details={postersDetails}
			/>
		);
	}

	useEffect(() => {
		getPosterByUrlTitle(urlTitle, dispatch);
	}, []);

	return <>{content}</>;
};

export default PosterDetails;
