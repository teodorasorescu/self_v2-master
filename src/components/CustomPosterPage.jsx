import { description } from '../constants/homeMission';
import Flipcard from './Flipcard';

import classes from '../styling/posters.page.details.module.scss';
import Breadcrumbs from './Breadcrumbs';
const CustomPosterPage = () => {
	return (
		<div className={classes.container}>
			<Breadcrumbs />
			<h1>
				Tablouri <br /> Personalizate Canvas
			</h1>
			<h2>{description}</h2>
			<Flipcard />
		</div>
	);
};

export default CustomPosterPage;
