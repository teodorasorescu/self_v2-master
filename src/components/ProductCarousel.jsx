import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import classes from '../styling/picture.module.scss';
import { S3_BUCKET } from '../constants/links';

const detailsImg = S3_BUCKET + '/details.webp';
const framesImg = S3_BUCKET + '/frames.webp';
const postersAndFramesImg = S3_BUCKET + '/postersAndFrames.webp';

const ProductCarousel = ({
	product,
	altDescription,
	classGradient,
	styleGradient,
	title,
	subtitle,
	gradientTitle,
	gradientSubtitle,
}) => {
	const navigate = useNavigate();

	const isImageEmpty = product.image === '';

	useEffect(() => {
		if (isImageEmpty) {
			navigate('/');
		}
	}, []);

	return (
		<Carousel slide={false} data-bs-theme='dark'>
			<Carousel.Item data-bs-theme='dark' interval={600000}>
				<div className={classes.container}>
					{' '}
					<div className={classGradient} style={styleGradient}>
						<p className={gradientTitle} style={title}>
							{product.title}
						</p>
						<p className={gradientSubtitle} style={subtitle}>
							{product.subtitle}
						</p>
					</div>
				</div>
			</Carousel.Item>

			<Carousel.Item interval={600000}>
				{!isImageEmpty && (
					<div className={classes.container}>
						<img
							src={detailsImg}
							className={classes.picturesContainer}
							alt={altDescription}
						/>
					</div>
				)}
			</Carousel.Item>
			<Carousel.Item interval={600000}>
				{!isImageEmpty && (
					<div className={classes.container}>
						<img
							src={framesImg}
							className={classes.picturesContainer}
							alt={altDescription}
						/>
					</div>
				)}
			</Carousel.Item>
			<Carousel.Item interval={600000}>
				{!isImageEmpty && (
					<div className={classes.container}>
						<img
							src={postersAndFramesImg}
							className={classes.picturesContainer}
							alt={altDescription}
						/>
					</div>
				)}
			</Carousel.Item>
		</Carousel>
	);
};

export default ProductCarousel;
