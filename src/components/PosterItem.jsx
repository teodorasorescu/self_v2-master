import { React, useEffect, useState } from 'react';
import classes from '../styling/poster.item.module.scss';

const PosterItem = ({ poster }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className={classes.container}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img
				src={require(`../images/${poster.imgTitle}`)}
				className={`${classes.pictureContainer} ${
					hovered ? classes.fadeOut : ''
				}`}
				alt={poster.altDescription}
			/>
			<img
				src={require(`../images/${poster.hoverImgTitle}`)}
				className={`${classes.pictureContainer} ${
					hovered ? classes.fadeIn : ''
				}`}
				alt={poster.altDescription}
				style={{ display: hovered ? 'block' : 'none' }} // Only show when hovered
			/>
			<div className={classes.textContainer}>
				<h3>{poster.title}</h3>
				<h4>{'from ' + poster.price.toFixed(2) + ' lei'}</h4>
			</div>
		</div>
	);
};

export default PosterItem;
