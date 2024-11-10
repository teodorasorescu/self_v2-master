import { React, useState } from 'react';
import classes from '../../../styling/poster.item.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import { S3_BUCKET } from '../../../constants/links.js';

const ProductItem = ({ product, posterImg, hasHoverImg }) => {
	const [hovered, setHovered] = useState(false);

	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	const imgTitle = S3_BUCKET + '/' + posterImg;
	const imgHoverTitle = S3_BUCKET + '/' + product.hoverImgTitle;

	return (
		<>
			<div
				className={classes.container}
				onMouseEnter={() => setHovered(!smartphoneScreen)}
				onMouseLeave={() => setHovered(false)}
			>
				<img
					src={imgTitle}
					className={`${classes.pictureContainer} ${
						hovered && hasHoverImg ? classes.fadeOut : ''
					}`}
					alt={product.altDescription}
				/>
				{hasHoverImg && (
					<img
						src={imgHoverTitle}
						className={`${classes.pictureContainer} ${
							hovered ? classes.fadeIn : ''
						}`}
						alt={product.altDescription}
						style={{ display: hovered ? 'block' : 'none' }}
					/>
				)}
				<div className={classes.textContainer}>
					<h3>{product.title}</h3>
					<h4>From {product.price.toFixed(2)} lei</h4>
				</div>
			</div>
		</>
	);
};

export default ProductItem;
