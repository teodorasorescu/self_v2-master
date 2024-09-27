import Carousel from 'react-bootstrap/Carousel';
import classes from '../styling/posters.carousel.module.scss';
import Details from '../images/details.webp';
import Frames from '../images/frames.webp';
import PostersAndFrames from '../images/postersAndFrames.webp';
import { isPosterLoading } from '../reducers/slices/posterSlice';
import { useSelector } from 'react-redux';

const PostersCarousel = ({ poster, altDescription }) => {
	const isPageLoading = useSelector(isPosterLoading);
	const isImageEmpty = poster.imgTitle === '';

	return (
		<>
			{' '}
			{isImageEmpty || (
				<>
					<Carousel slide={false} data-bs-theme='dark'>
						<Carousel.Item interval={600000}>
							<div className={classes.container}>
								<img
									src={require(`../images/${poster.imgTitle}`)}
									className={classes.picturesContainer}
									alt={altDescription}
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={600000}>
							<div className={classes.container}>
								<img
									src={Details}
									className={classes.picturesContainer}
									alt={altDescription}
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={600000}>
							<div className={classes.container}>
								<img
									src={Frames}
									className={classes.picturesContainer}
									alt={altDescription}
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={600000}>
							<div className={classes.container}>
								<img
									src={PostersAndFrames}
									className={classes.picturesContainer}
									alt={altDescription}
								/>
							</div>
						</Carousel.Item>
					</Carousel>
				</>
			)}
		</>
	);
};

export default PostersCarousel;
