import React from 'react';
import classes from './posters.artist.showcase.module.scss';
import Slider from 'react-slick';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductItem from '../products/ProductItem';
let arrowSize;
const NextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className={`${classes.customArrow} ${classes.next}`} onClick={onClick}>
			<ArrowForwardIosIcon style={{ fontSize: arrowSize, color: 'gray' }} />
		</div>
	);
};

const PrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className={`${classes.customArrow} ${classes.prev}`} onClick={onClick}>
			<ArrowBackIosIcon style={{ fontSize: arrowSize, color: 'gray' }} />
		</div>
	);
};

export const PostersByArtistShowcase = ({ products }) => {
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	arrowSize = smartphoneScreen ? '1.3rem' : '2rem';

	const smartphoneSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1, // Show 4 products per slide
		slidesToScroll: 1, // Scroll one slide at a time
		nextArrow: <NextArrow arrowSize={arrowSize} />, // Custom next arrow
		prevArrow: <PrevArrow arrowSize={arrowSize} />, // Custom previous arrow
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className={classes.container}>
			<Slider {...smartphoneSettings}>
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
			</Slider>
		</div>
	);
};

export default PostersByArtistShowcase;
