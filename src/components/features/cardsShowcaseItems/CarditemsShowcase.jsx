import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import classes from './selected.module.scss';
import 'swiper/css/mousewheel';
import CardItem from '../cards/CardItem';

const CardItemsShowcase = ({ products, title }) => {
	return (
		<div className={classes.productSlider}>
			<h1>{title}</h1>
			<div className={classes.swiperContainer}>
				<Swiper
					modules={[Navigation, Autoplay, Mousewheel]}
					spaceBetween={20}
					slidesPerView={4}
					navigation={false}
					loop={
						products != null && products.length != null && products.length >= 4
					}
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
					{products.map((product) => (
						<SwiperSlide key={product.urlTitle}>
							<div className={classes.productCard}>
								<a href={`/intention-cards/${product.urlTitle}`}>
									<CardItem
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

export default CardItemsShowcase;
