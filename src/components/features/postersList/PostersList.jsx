import ProductItem from '../products/ProductItem';
import classes from './posters.list.module.scss';

const PostersList = ({ posters }) => {
	return (
		<div className={classes.postersList}>
			{posters.map((poster, index) => (
				<div
					key={poster.urlTitle}
					className={classes.poster}
					style={{ '--delay': index }}
				>
					<a href={`/canvas-art-prints/${poster.urlTitle}`}>
						<ProductItem
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

export default PostersList;
