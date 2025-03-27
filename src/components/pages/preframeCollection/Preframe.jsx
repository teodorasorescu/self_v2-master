import { React } from 'react';
import classes from './preframe.module.scss';
import ArtistJournalPreframe from '../artistJournalPage/ArtistJournalPreframe';

const Preframe = ({}) => {
	return (
		<div className={classes.container}>
			<ArtistJournalPreframe urlTitle='daia-grigore' />
		</div>
	);
};

export default Preframe;
