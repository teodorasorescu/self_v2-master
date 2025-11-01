import { React, useState } from 'react';
import classes from '../../../styling/poster.item.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import { S3_BUCKET } from '../../../constants/links.js';
import Tag from '../../ui/tag/Tag.jsx';
import { getLocalizedPrice } from '../../../constants/utils.js';
import { useCountry } from '../../../contexts/CountryProvider.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductItem = ({ product, posterImg, hasHoverImg }) => {
	const [hovered, setHovered] = useState(false);

	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	const imgTitle = S3_BUCKET + '/' + posterImg;
	const imgHoverTitle = S3_BUCKET + '/' + product.hoverImgTitle;
	const isArtist =
		product.artist != undefined &&
		product.artist.artist != undefined &&
		product.artist !== null &&
		product.artist.artist !== null;
	const { countryCode } = useCountry();

	const computedPrice = getLocalizedPrice(product.price, countryCode);
	return (
		<>
			<div
				className={classes.container}
				onMouseEnter={() => setHovered(!smartphoneScreen)}
				onMouseLeave={() => setHovered(false)}
			>
				<img
					src={imgTitle}
					effect='blur'
					fetchPriority='high'
					loading='eager'
					decoding='async'
					className={`${classes.pictureContainer} ${
						hovered && hasHoverImg ? classes.fadeOut : ''
					}`}
					alt={product.altDescription}
				/>{' '}
				{product.limitedEdition && <Tag title='Limited Edition' />}
				{hasHoverImg && (
					<LazyLoadImage
						src={imgHoverTitle}
						className={`${classes.pictureContainer} ${
							hovered ? classes.fadeIn : ''
						}`}
						effect='blur'
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
							From {computedPrice.price + ' ' + computedPrice.currency}
						</h4>
					)}
				</div>
			</div>
		</>
	);
};

export default ProductItem;
