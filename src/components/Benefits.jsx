import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import benefits from '../constants/benefits';
import classes from '../styling/benefits.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';

const Benefits = () => {
	const isMobile = useMediaQuery('(max-width:1024px)');

	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: 'free-snap',
		slides: { perView: isMobile ? 1.1 : benefits.length },
		spacing: 15,
	});

	return (
		<div className={classes.container}>
			<div ref={sliderRef} className='keen-slider'>
				{benefits.map((c, i) => (
					<div className={`keen-slider__slide ${classes.benefitSlide}`} key={i}>
						<div className={classes.benefits}>
							<h4>{c.title}</h4>
							<p className={classes.pContainer}>{c.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Benefits;
