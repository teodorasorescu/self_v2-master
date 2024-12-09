import React, { useState, useEffect } from 'react';
import classes from './countdown.module.scss';
import Button from '../../ui/button/Button';
import { useNavigate } from 'react-router-dom';
const Countdown = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
	const navigate = useNavigate();
	const goToGiftGuide = () => {
		navigate('/journal/gift-guide');
	};
	useEffect(() => {
		const timer = setInterval(() => {
			const remaining = calculateTimeLeft(targetDate);
			setTimeLeft(remaining);

			if (remaining.total <= 0) clearInterval(timer);
		}, 1000);

		return () => clearInterval(timer); // Cleanup on unmount
	}, [targetDate]);

	function calculateTimeLeft(target) {
		const now = new Date();
		const difference = new Date(target) - now;

		if (difference <= 0) {
			return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((difference / (1000 * 60)) % 60);
		const seconds = Math.floor((difference / 1000) % 60);

		return { total: difference, days, hours, minutes, seconds };
	}

	return (
		<div className={classes.container}>
			<div onClick={goToGiftGuide} className={classes.imgContainer}></div>
			<div className={classes.text}>
				{timeLeft.total > 0 ? (
					<>
						<h1 style={{ color: '#910000' }}>
							{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
							{timeLeft.seconds}s
						</h1>
						<h1>Until you can get your order delivered by Christmas!</h1>
						<h2 style={{ color: '#910000', textAlign: 'center' }}>
							XMAS30 for 30% off
						</h2>

						<div className={classes.button}>
							<Button onClick={goToGiftGuide} msg={'Gift Guide'} />
						</div>
					</>
				) : (
					<h1>Time's up!</h1>
				)}
			</div>
		</div>
	);
};

export default Countdown;
