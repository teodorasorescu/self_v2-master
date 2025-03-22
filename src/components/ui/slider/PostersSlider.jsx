import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import classes from './slider.module.scss';

let arrowSize;
const NextArrow = (props) => {
	const { onClick } = props;
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	arrowSize = smartphoneScreen ? '1.3rem' : '2rem';
	return (
		<div className={`${classes.customArrow} ${classes.next}`} onClick={onClick}>
			<ArrowForwardIosIcon style={{ fontSize: arrowSize, color: 'gray' }} />
		</div>
	);
};

const PrevArrow = (props) => {
	const { onClick } = props;
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	arrowSize = smartphoneScreen ? '1.3rem' : '2rem';
	return (
		<div className={`${classes.customArrow} ${classes.prev}`} onClick={onClick}>
			<ArrowBackIosIcon style={{ fontSize: arrowSize, color: 'gray' }} />
		</div>
	);
};

export const sliderSettings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 4, // Show 4 products per slide
	slidesToScroll: 1, // Scroll one slide at a time
	nextArrow: <NextArrow arrowSize={arrowSize} />, // Custom next arrow
	prevArrow: <PrevArrow arrowSize={arrowSize} />, // Custom previous arrow
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
