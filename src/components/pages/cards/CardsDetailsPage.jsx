import classes from '../../../styling/posters.page.details.module.scss';
import CardsList from '../../features/cardsList/CardsList';
import Banner from '../../ui/banner/Banner';

const CardsDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<h1>Wish Cards</h1>

			<h2>
				Instructions
				<br />
				1. Take out the match
				<br /> 2. Strike the match
				<br /> 3. Light the candle
				<br /> 4. Set an intention or make a wish
			</h2>
			<CardsList posters={posters} />
			<Banner />
		</div>
	);
};

export default CardsDetailsPage;
