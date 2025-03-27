import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import classes from './selected.module.scss';
import { selectPosters } from '../../../reducers/slices/postersSlice';
import { useSelector } from 'react-redux';
import ProductItem from '../products/ProductItem';
import 'swiper/css/mousewheel'; // Import mousewheel CSS

const SelectedForYouShowcase = () => {
	const products = useSelector(selectPosters);
	const data = [
		'Love Feeling 2',
		'Love Feeling 1',
		'A table for two, please!',
		'Sunset Feelings',
		'There is Strength in Vulnerability',
		'Inner Blooming',
		'Soul Compassion',
		'Graceful Mind',
	];
	const filteredData = products.filter((item) => data.includes(item.title));

	return (
		<div className={classes.productSlider}>
			<h2>Selected for you</h2>
			<div className={classes.swiperContainer}>
				<Swiper
					modules={[Navigation, Autoplay, Mousewheel]}
					spaceBetween={20}
					slidesPerView={4}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					loop={true}
					mousewheel={{
						// Enable mousewheel control
						forceToAxis: true, // Restrict scrolling to the slider axis
						releaseOnEdges: true, // Allow release when reaching the first/last slide
						sensitivity: 1, // Adjust scroll sensitivity
					}}
					breakpoints={{
						320: {
							slidesPerView: 1, // Changed from 4 to 1 for mobile
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
				>
					{filteredData.map((product) => (
						<SwiperSlide key={product.urlTitle}>
							<div className={classes.productCard}>
								<a href={`/canvas-art-prints/${product.urlTitle}`}>
									<ProductItem
										product={product}
										posterImg={product.imgTitlePosterList}
										hasHoverImg={true}
									/>
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={`swiper-button-prev ${classes.navButton}`}></div>
				<div className={`swiper-button-next ${classes.navButton}`}></div>{' '}
			</div>
		</div>
	);
};

export default SelectedForYouShowcase;
