import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './selected.module.scss'; // Ensure this file exists
import { selectPosters } from '../../../reducers/slices/postersSlice';
import { useSelector } from 'react-redux';
import ProductItem from '../products/ProductItem';

const SelectedForYouShowcase = () => {
	const products = useSelector(selectPosters);
	console.log('Products:', products); // Debugging: Check if data is loaded

	return (
		<div className='product-slider'>
			<h2>Selected for you</h2>
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={20}
				slidesPerView={4}
				navigation
				autoplay={{ delay: 3000 }}
				loop={true}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				{products.map((product) => (
					<SwiperSlide key={product.urlTitle}>
						<div className='product-card'>
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
		</div>
	);
};

export default SelectedForYouShowcase;
