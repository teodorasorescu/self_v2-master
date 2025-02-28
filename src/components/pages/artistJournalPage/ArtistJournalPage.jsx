import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from '../../ui/loader/Loader';
import ArtistJournalItem from '../../features/journal/artistJournal/ArtistJournalItem';
import getArtistAction from '../../../reducers/actions/getArtistAction';
import {
	isArtistLoading,
	selectArtist,
} from '../../../reducers/slices/artistSlice';

const ArtistJournalPage = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isArtistLoading);
	const { urlTitle } = useParams();
	const artist = useSelector(selectArtist);
	useEffect(() => {
		getArtistAction(dispatch, urlTitle);
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <ArtistJournalItem artist={artist} />;
	}

	return <>{content}</>;
};

export default ArtistJournalPage;
