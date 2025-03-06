import { React } from 'react';
import classes from './artist.journal.item.module.scss';
import ArtistsPostersLoading from '../../posters/ArtistsPostersLoading';
import useMediaQuery from '@mui/material/useMediaQuery';

const ArtistJournalItem = ({ artist }) => {
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');

	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<div className={classes.firstContainer}></div>
				{smartphoneScreen ? (
					<>
						{' '}
						<h1>{artist.artist}</h1>
						<h2>{artist.artistDescription}</h2>
					</>
				) : (
					<div className={classes.secondContainer}>
						<h1>{artist.artist}</h1>
						<h2>{artist.artistDescription}</h2>
					</div>
				)}
			</div>
			<h3>Selected works</h3>
			<ArtistsPostersLoading artist={artist} />
		</div>
	);
};

export default ArtistJournalItem;
