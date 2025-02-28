import { React, useEffect } from 'react';
import classes from './artist.journal.item.module.scss';
import PostersByArtistShowcase from '../../postersByArtistShowcase/PostersByArtistShowcase';
import {
	isPosterShowcaseLoading,
	selectPosterShowcase,
} from '../../../../reducers/slices/posterShowcaseSlice';
import { useDispatch, useSelector } from 'react-redux';
import getPostersByArtistAction from '../../../../reducers/actions/getPostersByArtistAction';
import Loader from '../../../ui/loader/Loader';

const ArtistJournalItem = ({ artist }) => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isPosterShowcaseLoading);
	let posters = useSelector(selectPosterShowcase);

	useEffect(() => {
		getPostersByArtistAction(dispatch, artist.id);
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <PostersByArtistShowcase products={posters} />;
	}
	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<div className={classes.firstContainer}></div>
				<div className={classes.secondContainer}>
					<h1>{artist.artist}</h1>
					<h2>{artist.artistDescription}</h2>
				</div>
			</div>{' '}
			<h3>Selected works</h3>
			{content}
		</div>
	);
};

export default ArtistJournalItem;
