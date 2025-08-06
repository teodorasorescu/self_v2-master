import classes from './event.page.module.scss';
import EventForm from '../../features/event/EventForm';
import { useState } from 'react';
import { S3_BUCKET } from '../../../constants/links';

const EventPage = () => {
	const [signedUp, setSignedUp] = useState(false);
	const eventImg = S3_BUCKET + '/SipAndPaint.png';

	if (!signedUp) {
		return (
			<div className={classes.container}>
				<img
					src={eventImg}
					alt='sipandpaint'
					className={classes.imageContainer}
				/>

				<h1>Reserve Your Paintboard</h1>
				<EventForm onSuccess={() => setSignedUp(true)} />
			</div>
		);
	}
	return (
		<div className={classes.detailsContainer}>
			<h1>
				Your seat is almost ready! Tap the link to pay and confirm your spot.
			</h1>

			<h2>🎟️ Ticket – 100 lei</h2>
			<h3>
				👯 90 lei if you are bringing a friend <br /> (you can save their spot
				as well)
			</h3>

			<p>🍷 1 drink + all painting materials included</p>

			<a href='https://revolut.me/teodor9aob' className={classes.paymentLink}>
				Pay Here
			</a>
			<p className={classes.contactInfo}>
				Questions or issues? DM us at <strong>@self_posters</strong>
			</p>
		</div>
	);
};

export default EventPage;
