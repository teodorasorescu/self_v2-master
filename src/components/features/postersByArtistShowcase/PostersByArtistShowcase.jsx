import classes from './posters.artist.showcase.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductItem from '../products/ProductItem';

export const PostersByArtistShowcase = ({ products }) => {
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');

	return (
		<div className={classes.container}>
			{/* <Slider {...sliderSettings}> */}
			<div className={classes.postersContainer}>
				<div className={classes.postersList}>
					{products.map((poster, index) => (
						<div
							key={poster.urlTitle}
							className={classes.poster}
							style={{ '--delay': index }}
						>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem
									product={poster}
									posterImg={
										smartphoneScreen
											? poster.imgTitle
											: poster.imgTitlePosterList
									}
									hasHoverImg={true}
								/>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PostersByArtistShowcase;
