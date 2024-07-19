import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import classes from '../styling/picture.module.scss';
import Details from '../images/details.jpg';
import Frames from '../images/frames.jpeg';
import PostersAndFrames from '../images/postersAndFrames.jpeg';

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
			{/* poza de produs*/}
			{/* <Carousel.Item interval={600000}>
				{!isImageEmpty && (
					<div className={classes.container}>
						<img
							src={require(`../images/${product.image}`)}
							className={classes.picturesContainer}
							alt={altDescription}
						/>
					</div>
				)}
			</Carousel.Item> */}
			<Carousel.Item interval={600000}>
				{!isImageEmpty && (
					<div className={classes.container}>
						<img
							src={Details}
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
							src={Frames}
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
							src={PostersAndFrames}
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
