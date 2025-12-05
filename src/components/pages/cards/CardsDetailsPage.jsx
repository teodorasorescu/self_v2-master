import classes from '../../../styling/posters.page.details.module.scss';
import CardsList from '../../features/cardsList/CardsList';
import Banner from '../../ui/banner/Banner';

const CardsDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<h1>Intention Cards</h1>
			<h2>
				A special holiday collaboration with Odyssée Candles and Adela Holdon.
				Each card invites you to set an intention, light your candle with
				purpose and let the flame carry your thoughts toward what you wish for
				the new year. The candle, hand-poured in Romania by Odyssée, is crafted
				with clean, sustainable ingredients, free from harmful substances and
				cruelty-free. Illustrations by Adela Holdon.
			</h2>
			<CardsList posters={posters} />
			<Banner />
		</div>
	);
};

export default CardsDetailsPage;
