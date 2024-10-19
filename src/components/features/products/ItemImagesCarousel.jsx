import Carousel from 'react-bootstrap/Carousel';
import classes from '../../../styling/posters.carousel.module.scss';
import { S3_BUCKET } from '../../../constants/links';

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
							</div>
						</Carousel.Item>
					</Carousel>
				</>
			)}
		</>
	);
};

export default ItemImagesCarousel;
