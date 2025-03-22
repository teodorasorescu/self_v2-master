import { description } from '../constants/homeMission';
import Flipcard from './Flipcard';

import classes from '../styling/posters.page.details.module.scss';
const CustomPosterPage = () => {
	return (
		<div className={classes.container}>
			<h1>Customized Canvas Posters</h1>
			<h2>{description}</h2>
			<Flipcard />
		</div>
	);
};

export default CustomPosterPage;
