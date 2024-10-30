import { React } from 'react';
import classes from '../../../styling/posters.page.details.module.scss';
import ProductItem from '../../features/products/ProductItem';
import Breadcrumbs from '../../Breadcrumbs';

const PostersDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<Breadcrumbs />
			<h1>Canvas Art Prints</h1>
			<h2>
				A carefully crafted series of stunning canvas art prints, created with
				intention, embodying the essence of being through a harmonious blend of
				colors. Each piece is perfect for adding personality to your space,
				transforming ordinary rooms into vibrant expressions of style and
				creativity.
			</h2>
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
								posterImg={poster.imgTitlePosterList}
								hasHoverImg={true}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostersDetailsPage;
