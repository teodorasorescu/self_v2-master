import { React } from 'react';
import classes from './artist.journal.item.module.scss';
import ArtistsPostersLoading from '../../posters/ArtistsPostersLoading';
import useMediaQuery from '@mui/material/useMediaQuery';

const ArtistJournalPreframeItem = ({ artist }) => {
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	return (
		<div className={classes.mainContainer}>
			<h2 className={classes.paragraph}>
				<br />
				Hi, I'm Teo, the founder of this poster shop. Nice to meet you! <br />
				<br /> Self Posters connects{' '}
				<b className={classes.boldColor}>talented independent artists</b> with
				those seeking{' '}
				<b className={classes.boldColor}>unique, expressive designs</b> for
				their homes.
				<br /> Today, I'm presenting a really special collection made by Daia
				Grigore named 'Salt Water'.
				<br /> <br />
			</h2>
			<div className={classes.container}>
				<div className={classes.firstContainer}></div>
				{smartphoneScreen ? (
					<>
						{' '}
						<h1>{artist.artist}'s Artworks</h1>
						<ArtistsPostersLoading artist={artist} />
						<h2>{artist.artistDescription}</h2>
					</>
				) : (
					<div className={classes.secondContainer}>
						<h1>{artist.artist}'s Artworks</h1>
						<ArtistsPostersLoading artist={artist} />
						<h2>{artist.artistDescription}</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default ArtistJournalPreframeItem;
