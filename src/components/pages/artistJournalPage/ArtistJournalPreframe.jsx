import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../ui/loader/Loader';
import getArtistAction from '../../../reducers/actions/getArtistAction';
import {
	isArtistLoading,
	selectArtist,
} from '../../../reducers/slices/artistSlice';
import ArtistJournalPreframeItem from '../../features/journal/artistJournal/ArtistJournalPreframe';

const ArtistJournalPreframe = ({ urlTitle }) => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isArtistLoading);
	const artist = useSelector(selectArtist);
	useEffect(() => {
		getArtistAction(dispatch, urlTitle);
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <ArtistJournalPreframeItem artist={artist} />;
	}

	return <>{content}</>;
};

export default ArtistJournalPreframe;
