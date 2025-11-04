import { useRef, useState } from 'react';
import styles from './Banner.module.scss';
import DateCountdown from '../countdown/DateCountdown';

const Banner = () => {
	const marqueeRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const onTouchStart = (e) => {
		setIsDragging(true);
		setStartX(e.touches[0].pageX - marqueeRef.current.offsetLeft);
		setScrollLeft(marqueeRef.current.scrollLeft);
		marqueeRef.current.style.animationPlayState = 'paused';
	};

	const onTouchMove = (e) => {
		if (!isDragging) return;
		const x = e.touches[0].pageX - marqueeRef.current.offsetLeft;
		const walk = (x - startX) * 1; // scroll speed multiplier
		marqueeRef.current.scrollLeft = scrollLeft - walk;
	};

	const onTouchEnd = () => {
		setIsDragging(false);
		// Optionally resume animation after user stops swiping
		// marqueeRef.current.style.animationPlayState = 'running';
	};

	return (
		<div
			className={styles.marquee}
			ref={marqueeRef}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
		>
			<div className={styles.marqueeInner}>
				<p>Don’t Miss the Only Sale of the Year</p>
				<p>BLACK FRIDAY</p>
				<p>
					<DateCountdown targetDate='2025-11-07T00:00:00' />
				</p>{' '}
				<p>BLACK FRIDAY 35% SALE</p>
				<p>FREE DELIVERY</p>
				{/* duplicate for seamless scroll */}
				<p>Don’t Miss the Only Sale of the Year</p>
				<p>BLACK FRIDAY 35% SALE</p>
				<p>
					<DateCountdown targetDate='2025-11-07T00:00:00' />
				</p>
				<p>FREE DELIVERY</p>
			</div>
		</div>
	);
};

export default Banner;
