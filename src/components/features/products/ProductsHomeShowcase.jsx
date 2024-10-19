import React from 'react';
import classes from '../../../styling/posters.showcase.module.scss';
import Slider from 'react-slick';
import PostersGroup from '../posters/postersGroup/PostersGroup';
import Button from '../../ui/button/Button';

const NextArrow = (props) => {
	const { className, onClick } = props;
	return (
		<div className={classes.arrowContainer}>
			<div
				className={`${className} ${classes.customArrow} ${classes.customNextArrow}`}
				onClick={onClick}
			></div>
		</div>
	);
};

const PrevArrow = (props) => {
	const { className, onClick } = props;
	return (
		<div className={classes.arrowContainer}>
			<div
				className={`${className} ${classes.customArrow} ${classes.customPrevArrow}`}
				onClick={onClick}
			></div>
		</div>
	);
};

export const ProductsHomeShowcase = ({ products }) => {
	const smartphoneSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1, // Show 4 products per slide
		slidesToScroll: 1, // Scroll one slide at a time
		nextArrow: <NextArrow />, // Custom next arrow
		prevArrow: <PrevArrow />, // Custom previous arrow
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
		'Group 1',
		'Group 2',
		'Group 3',
		'Group 4',
		'Group 5',
		'Group 6',
		'Group 7',
	];

	return (
		<div className={classes.container}>
			<Slider {...smartphoneSettings}>
				{' '}
				{groups.map((group) => (
					<PostersGroup group={group} posters={products} />
				))}
			</Slider>
			<div className={classes.buttonContainer}>
				<a href='/posters'>
					{' '}
					<Button msg={'View All'} style={classes.buttonStyle} />
				</a>
			</div>
		</div>
	);
};

export default ProductsHomeShowcase;
