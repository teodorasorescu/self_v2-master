import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectPosters,
} from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import PostersByArtistShowcase from '../postersByArtistShowcase/PostersByArtistShowcase';

const ArtistsPostersLoading = ({ artist }) => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	let storedPosters = useSelector(selectPosters);

	useEffect(() => {
		if (storedPosters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		const filteredPosters = storedPosters.filter(
			(poster) =>
				artist.id !== null &&
				poster.artist !== null &&
				poster.artist.id === artist.id
		);
		content = <PostersByArtistShowcase products={filteredPosters} />;
	}

	return <>{content}</>;
};

export default ArtistsPostersLoading;
