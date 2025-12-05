import CardItem from '../cards/CardItem';
import classes from './posters.list.module.scss';

const CardsList = ({ posters }) => {
	return (
		<div className={classes.postersList}>
			{posters.map((poster, index) => (
				<div
					key={poster.urlTitle}
					className={classes.poster}
					style={{ '--delay': index }}
				>
					<a href={`/intention-cards/${poster.urlTitle}`}>
						<CardItem
							product={poster}
							posterImg={poster.imgTitle}
							hasHoverImg={true}
						/>
					</a>
				</div>
			))}
		</div>
	);
};

export default CardsList;
