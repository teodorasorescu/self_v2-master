import DateCountdown from '../countdown/DateCountdown';
import styles from './Banner.module.scss';

const Banner = () => {
	return (
		<div className={styles.marquee}>
			<div className={styles.marqueeInner}>
				<p>Don’t Miss the Only Sale of the Year</p>
				<p>
					<DateCountdown targetDate='2025-11-07T00:00:00' />
				</p>
				<p>BLACK FRIDAY 35% SALE</p>
				<p>FREE DELIVERY</p>
				<p>While Stock Lasts</p>
				{/* Duplicate for infinite loop */}
				<p>Don’t Miss the Only Sale of the Year</p>
				<p>BLACK FRIDAY 35% SALE</p>
				<p>
					<DateCountdown targetDate='2025-11-07T00:00:00' />
				</p>
				<p>FREE DELIVERY</p>
				<p>While Stock Lasts</p>
			</div>
		</div>
	);
};

export default Banner;
