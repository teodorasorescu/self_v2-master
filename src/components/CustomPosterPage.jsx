import { description } from '../constants/homeMission';
import Flipcard from './Flipcard';
import SelfMission from './SelfMission';

import classes from '../styling/posters.page.details.module.scss';
const CustomPosterPage = () => {
	return (
		<div className={classes.container}>
			<h1>
				Tablouri <br /> Personalizate Canvas
			</h1>
			<h2>{description}</h2>
			<Flipcard />
		</div>
	);
};

export default CustomPosterPage;
