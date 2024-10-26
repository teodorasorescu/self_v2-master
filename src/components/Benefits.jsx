import benefits from '../constants/benefits';
import classes from '../styling/benefits.module.scss';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';

const Benefits = () => {
	const isMobile = useMediaQuery('(max-width:1024px)');

	const settings = {
		dots: false,
		infinite: true,

		speed: 500,
		slidesToShow: isMobile ? 1.1 : benefits.length, // Show all on larger screens, one per slide on mobile
		slidesToScroll: 1,
		arrows: false, // Optional: hide arrows on mobile for cleaner UI
	};

	return (
		<div className={classes.container}>
			<Slider {...settings}>
				{benefits.map((c, i) => (
					<div className={classes.benefitSlide} key={i}>
						<div className={classes.benefits}>
							<h4>{c.title}</h4>
							<p className={classes.pContainer}>{c.desc}</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Benefits;
