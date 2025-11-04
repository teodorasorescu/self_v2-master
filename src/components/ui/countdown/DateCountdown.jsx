import { useState, useEffect } from 'react';

const DateCountdown = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

	useEffect(() => {
		const timer = setInterval(() => {
			const remaining = calculateTimeLeft(targetDate);
			setTimeLeft(remaining);

			if (remaining.total <= 0) clearInterval(timer);
		}, 1000);

		return () => clearInterval(timer);
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

	if (timeLeft.total <= 0) return <span>00:00:00</span>;

	return (
		<span>
			{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
		</span>
	);
};

export default DateCountdown;
