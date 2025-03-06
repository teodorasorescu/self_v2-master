import React from 'react';
import classes from '../../../styling/posters.showcase.module.scss';
import Slider from 'react-slick';
import PostersGroup from '../posters/postersGroup/PostersGroup';
import Button from '../../ui/button/Button';
import ReactGA from 'react-ga4';
import { sliderSettings } from '../../ui/slider/PostersSlider';

export const ProductsHomeShowcase = ({ products }) => {
	const groups = ['Salt Water'];

	const sendEvent = () => {
		ReactGA.event('button_click', {
			button_label: 'ViewAllPosters',
		});
	};

	return (
		<div className={classes.container}>
			<Slider {...sliderSettings}>
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
