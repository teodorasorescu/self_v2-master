import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import classes from './selected.module.scss';
import ProductItem from '../products/ProductItem';
import 'swiper/css/mousewheel';

const SelectedForYouShowcase = ({ products, data, title }) => {
	const filteredData = products.filter((item) => data.includes(item.title));
	const url =
		title === 'Decorative Objects by Sweets&Beadz'
			? 'clay-objects'
			: 'canvas-art-prints';
	return (
		<div className={classes.productSlider}>
			<h1>{title}</h1>
			<div className={classes.swiperContainer}>
				<Swiper
					modules={[Navigation, Autoplay, Mousewheel]}
					spaceBetween={20}
					slidesPerView={4}
					navigation={false}
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
								<a href={`/${url}/${product.urlTitle}`}>
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
		</div>
	);
};

export default SelectedForYouShowcase;
