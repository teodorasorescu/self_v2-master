import { React } from 'react';
import classes from './artist.journal.item.module.scss';
import ArtistsPostersLoading from '../../posters/ArtistsPostersLoading';
import useMediaQuery from '@mui/material/useMediaQuery';
import { S3_BUCKET } from '../../../../constants/links';

const ArtistJournalItem = ({ artist }) => {
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	const instaIcon = S3_BUCKET + '/instagram_logo.webp';
	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<div className={classes.firstContainer}></div>
				{smartphoneScreen ? (
					<>
						{' '}
						<h1>{artist.artist}</h1>
						<a href='https://daiagrigore.com/'>daiagrigore.com</a>
						<a href='https://www.instagram.com/daia_dianagrigore/'>
							@daia_dianagrigore
						</a>
						<h2>{artist.artistDescription}</h2>
					</>
				) : (
					<div className={classes.secondContainer}>
						<h1>{artist.artist}</h1>
						<h2>{artist.artistDescription}</h2>
						<a href='https://daiagrigore.com/'>daiagrigore.com</a>
						<a href='https://www.instagram.com/daia_dianagrigore/'>
							@daia_dianagrigore
						</a>
					</div>
				)}
			</div>
			<h3>Selected works</h3>
			<ArtistsPostersLoading artist={artist} />
		</div>
	);
};

export default ArtistJournalItem;
