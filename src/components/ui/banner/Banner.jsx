import { useRef, useState } from 'react';
import styles from './Banner.module.scss';

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
				<p>Limited Stock </p> <p> 15% SALE</p>
				<p>Free Shipping</p>
				<p>EU Delivery</p>
				{/* duplicate for seamless scroll */}
				<p>Don’t Miss the Only Sale of the Year</p>
				<p>15% SALE</p>
				<p>Limited Stock </p>
				<p>Free Shipping</p>
				<p>EU Delivery</p>
			</div>
		</div>
	);
};

export default Banner;
