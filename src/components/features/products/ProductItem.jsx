import { React, useState } from 'react';
import classes from '../../../styling/poster.item.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import { S3_BUCKET } from '../../../constants/links.js';
import Tag from '../../ui/tag/Tag.jsx';

const ProductItem = ({ product, posterImg, hasHoverImg }) => {
	const [hovered, setHovered] = useState(false);

	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	const imgTitle = S3_BUCKET + '/' + posterImg;
	const imgHoverTitle = S3_BUCKET + '/' + product.hoverImgTitle;
	const isArtist = product.artist !== null;
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
				/>{' '}
				{product.posterGroup == 'Salt Water' && <Tag title='Coming Soon' />}
				{product.limitedEdition && <Tag title='Limited Edition' />}
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
					{isArtist ? (
						<h4 className={classes.artist}> {product.artist.artist}</h4>
					) : (
						<h4 className={classes.artist}>Self Posters</h4>
					)}
					{product.stock !== null && product.stock <= 0 ? (
						<h4 className={classes.price}>Out of Stock</h4>
					) : (
						<h4 className={classes.price}>
							From {product.price.toFixed(2)} lei
						</h4>
					)}
				</div>
			</div>
		</>
	);
};

export default ProductItem;
