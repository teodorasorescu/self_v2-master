import Carousel from 'react-bootstrap/Carousel';
import classes from '../../../styling/posters.carousel.module.scss';
import { S3_BUCKET } from '../../../constants/links';
import Tag from '../../ui/tag/Tag';

const ItemImagesCarousel = ({ product }) => {
	const isImageEmpty = product.imgTitle === '';
	return (
		<>
			{' '}
			{isImageEmpty || (
				<>
					<Carousel slide={false} data-bs-theme='dark'>
						<Carousel.Item interval={600000}>
							<div className={classes.container}>
								<img
									src={`${S3_BUCKET}/${product.imgTitle}`}
									className={classes.picturesContainer}
									alt={product.altDescription}
								/>
								<Tag title='35% OFF' />

								{product.stock !== null && product.stock <= 0 && (
									<Tag title='Out of Stock' />
								)}
								{product.limitedEdition != null &&
									product.limitedEdition === 1 && (
										<Tag title='Limited Edition' />
									)}
							</div>
						</Carousel.Item>
						{product.showcase !== undefined &&
							product.showcase.map((posterImg, index) => (
								<Carousel.Item interval={600000} key={index}>
									<div className={classes.container}>
										<img
											src={`${S3_BUCKET}/${posterImg}`}
											className={classes.picturesContainer}
											alt={product.altDescription}
										/>
									</div>
								</Carousel.Item>
							))}
					</Carousel>
				</>
			)}
		</>
	);
};

export default ItemImagesCarousel;
