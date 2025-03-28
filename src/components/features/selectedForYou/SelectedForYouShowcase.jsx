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
import 'swiper/css/mousewheel';

const SelectedForYouShowcase = ({ products, data }) => {
	const filteredData = products.filter((item) => data.includes(item.title));

	return (
		<div className={classes.productSlider}>
			<h2>Selected for you</h2>
			<div className={classes.swiperWrapper}>
				<div className={`${classes.navButton} ${classes.prevButton}`}></div>
				<div className={classes.swiperContainer}>
					<Swiper
						modules={[Navigation, Autoplay, Mousewheel]}
						spaceBetween={20}
						slidesPerView={4}
						navigation={
							filteredData.length > 2
								? {
										nextEl: `.${classes.nextButton}`,
										prevEl: `.${classes.prevButton}`,
								  }
								: false
						}
						loop={filteredData.length >= 4}
						observer={true}
						observeParents={true}
						mousewheel={{
							forceToAxis: true,
							releaseOnEdges: true,
							sensitivity: 1,
						}}
						breakpoints={{
							320: {
								slidesPerView: 2,
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
				</div>
				<div className={`${classes.navButton} ${classes.nextButton}`}></div>
			</div>
		</div>
	);
};

export default SelectedForYouShowcase;
