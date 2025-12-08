import { useState } from 'react';
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
	const imgTitlePosterSmartphone =
		S3_BUCKET + '/' + product.imgTitlePosterSmartphone;
	const imageToShow = smartphoneScreen ? imgTitlePosterSmartphone : imgTitle;

	const isArtist =
		product.artist != undefined &&
		product.artist.artist != undefined &&
		product.artist !== null &&
		product.artist.artist !== null;

	const isOperaArtist = isArtist && [16, 15].includes(product.artist.id);

	const { countryCode } = useCountry();

	const discountedPrice = getLocalizedPrice(53, countryCode);
	const computedPrice = getLocalizedPrice(product.price, countryCode);

	return (
		<>
			<div
				className={classes.container}
				onMouseEnter={() => setHovered(!smartphoneScreen)}
				onMouseLeave={() => setHovered(false)}
			>
				<img
					src={imageToShow}
					className={`${classes.pictureContainer} ${
						hovered && hasHoverImg ? classes.fadeOut : ''
					}`}
					alt={product.altDescription}
				/>{' '}
				<Tag title='15% OFF' />
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
						<div>
							{isOperaArtist ? (
								<h4 className={classes.price}>
									{computedPrice.price} {computedPrice.currency}
								</h4>
							) : (
								<>
									<h4 style={{ color: 'red' }} className={classes.price}>
										from {discountedPrice.price} {discountedPrice.currency}
									</h4>
									<h4
										style={{ textDecoration: 'line-through' }}
										className={classes.price}
									>
										{computedPrice.price} {computedPrice.currency}
									</h4>
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProductItem;
