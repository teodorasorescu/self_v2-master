import { React } from 'react';
import classes from '../../../styling/posters.page.details.module.scss';
import ProductItem from '../../features/products/ProductItem';

const FramesDetailsPage = ({ frames }) => {
	return (
		<div className={classes.container}>
			<h1>Frames</h1>
			<h2>
				A carefully crafted series of 152 original art prints. Every piece in
				the collection has been created with intention, embodying the essence of
				the season through a harmonious blend of fall colors, textures, and
				shapes.
			</h2>
			<div className={classes.postersList}>
				{frames.map((f) => (
					<div key={f.urlTitle} className={classes.poster}>
						<a href={`/posters/${f.urlTitle}`}>
							<ProductItem product={f} />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default FramesDetailsPage;
