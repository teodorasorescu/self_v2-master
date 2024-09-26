import { React, useEffect } from 'react';
import PosterDetailsPage from './PosterDetailsPage';
import {
	selectPoster,
	isPosterLoading,
	posterLoadingError,
} from '../reducers/slices/posterSlice';
import Loader from './ui/loader/Loader';
import getPosterByUrlTitle from '../reducers/actions/getPosterByUrlTitle';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
		content = <PosterDetailsPage poster={poster} />;
	}

	useEffect(() => {
		getPosterByUrlTitle(urlTitle, dispatch);
	}, []);

	return <>{content}</>;
};

export default PosterDetails;
