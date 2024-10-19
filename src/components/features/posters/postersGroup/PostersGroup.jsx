import { React } from 'react';
import classes from './posters.group.module.scss';
import ProductItem from '../../products/ProductItem.jsx';

const PostersGroup = ({ group, posters }) => {
	const filteredPosters = posters.filter(
		(poster) => poster.posterGroup === group
	);

	return (
		<div className={classes.container}>
			<h3>{group}</h3>
			<div className={classes.postersList}>
				{filteredPosters.map((poster) => (
					<div key={poster.urlTitle} className={classes.poster}>
						<a href={`/posters/${poster.urlTitle}`}>
							<ProductItem product={poster} />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostersGroup;
