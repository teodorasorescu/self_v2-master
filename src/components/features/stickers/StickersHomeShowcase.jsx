import classes from './stickers.showcase.module.scss';
import ProductItem from '../products/ProductItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from 'react-slick';

const StickersHomeShowcase = ({ products, title }) => {
	const isMobile = useMediaQuery('(max-width:1024px)');

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: isMobile ? 1.1 : products.length, // Show all on larger screens, one per slide on mobile
		slidesToScroll: 1,
		arrows: false, // Optional: hide arrows on mobile for cleaner UIcenterMode: true, // Enables center mode
	};

	return (
		<div className={classes.container}>
			{' '}
			<h3>{title}</h3>
			<Slider {...settings}>
				{products.map((p, index) => (
					<div className={classes.sticker} key={index}>
						{' '}
						<a href={`/clay-objects/${p.urlTitle}`}>
							<ProductItem
								id={index}
								product={p}
								posterImg={p.imgTitlePosterSmartphone}
								hasHoverImg={false}
							/>{' '}
						</a>
					</div>
				))}{' '}
			</Slider>
		</div>
	);
};

export default StickersHomeShowcase;
