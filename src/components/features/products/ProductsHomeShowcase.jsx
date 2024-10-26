import React from 'react';
import classes from '../../../styling/posters.showcase.module.scss';
import Slider from 'react-slick';
import PostersGroup from '../posters/postersGroup/PostersGroup';
import Button from '../../ui/button/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import ReactGA from 'react-ga4';
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

export const ProductsHomeShowcase = ({ products }) => {
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

	const groups = [
		'Burst of Emotion',
		'The Art of Becoming',
		'Sky Whispers',
		'Dear Self...',
		'Self Embrace',
		'Acts of Grace',
		'Serenity of the Sun',
	];

	const sendEvent = () => {
		ReactGA.event('button_click', {
			button_label: 'ViewAllPosters',
		});
	};

	return (
		<div className={classes.container}>
			<Slider {...smartphoneSettings}>
				{' '}
				{groups.map((group, index) => (
					<PostersGroup group={group} key={index} posters={products} />
				))}
			</Slider>
			<div className={classes.buttonContainer}>
				<a href='/canvas-art-prints'>
					{' '}
					<Button
						msg={'View All'}
						style={classes.buttonStyle}
						onClick={sendEvent}
					/>
				</a>
			</div>
		</div>
	);
};

export default ProductsHomeShowcase;
