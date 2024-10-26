import { React } from 'react';
import classes from '../../../styling/posters.page.details.module.scss';
import ProductItem from '../../features/products/ProductItem';

const PostersDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<h1>Canvas Art Prints</h1>
			<h2>
				A carefully crafted series of 152 original art prints. Every piece in
				the collection has been created with intention, embodying the essence of
				the season through a harmonious blend of fall colors, textures, and
				shapes.
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
