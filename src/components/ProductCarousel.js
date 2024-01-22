import Carousel from 'react-bootstrap/Carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProductCarousel = ({ product, classGradient, styleGradient }) => {
	console.log(product);
	const navigate = useNavigate();
	const isImageEmpty = product.image === '';
	useEffect(() => {
		if (isImageEmpty) {
			navigate('/');
		}
	}, []);

	return (
		<Carousel
			slide={false}
			data-bs-theme='dark'
			prevIcon={<ArrowBackIosIcon />}
			nextIcon={<ArrowForwardIosIcon />}
		>
			<Carousel.Item data-bs-theme='dark' interval={600000}>
				<div className={classGradient} style={styleGradient}></div>
			</Carousel.Item>
			<Carousel.Item interval={600000}>
				{!isImageEmpty && (
					<img
						src={require(`../images/${product.image}`)}
						className={classGradient}
					/>
				)}
			</Carousel.Item>
		</Carousel>
	);
};

export default ProductCarousel;
