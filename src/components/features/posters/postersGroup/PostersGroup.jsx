import { React } from 'react';
import classes from './posters.group.module.scss';
import ProductItem from '../../products/ProductItem.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostersGroup = ({ group, posters }) => {
	const filteredPosters = posters.filter(
		(poster) => poster.posterGroup === group
	);

	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	return (
		<div className={classes.container}>
			<h3>Will you be my Valentine?</h3>
			<div className={classes.postersList}>
				{filteredPosters.map((poster, index) => (
					<div
						key={poster.urlTitle}
						className={classes.poster}
						style={{ '--delay': index }}
					>
						<a href={`/canvas-art-prints/${poster.urlTitle}`}>
							<ProductItem
								product={poster}
								posterImg={
									smartphoneScreen ? poster.imgTitle : poster.imgTitlePosterList
								}
								hasHoverImg={true}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostersGroup;
