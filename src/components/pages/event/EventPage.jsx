import classes from './event.page.module.scss';
import EventForm from '../../features/event/EventForm';
import { useState } from 'react';
import { S3_BUCKET } from '../../../constants/links';
import SelectedForYouPage from '../selectedForYouShowcase/SelectedForYouPage';
import { summerProducts } from '../../../constants/productConstants';
import EventImg from './paintandsip.png';
const EventPage = () => {
	const [signedUp, setSignedUp] = useState(false);

	if (!signedUp) {
		return (
			<div className={classes.container}>
				<img
					src={EventImg}
					alt='write a letter to our higher selves
					craft a vision board (magazines provided)
					set intentions
					listen to high-vibrational music
					add crystals for energy and focus
					(yes, we’ll provide a selection for you to pick from)
					event bucuresti'
					className={classes.imageContainer}
				/>

				<h1>Reserve Your Spot</h1>
				<h2>Manifestion Envelopes & Vision Boards? I'm in!</h2>
				<h3>
					Sunday, 19th October
					<br /> ART-AN_TE, Ion Câmpineanu 3 <br /> 15:00 - 18:00
				</h3>
				<EventForm onSuccess={() => setSignedUp(true)} />

				<SelectedForYouPage data={summerProducts} title='TRENDING TODAY' />
			</div>
		);
	}
	return (
		<div className={classes.detailsContainer}>
			<h1>
				Your seat is almost ready! Tap the link to pay and confirm your spot.
			</h1>

			<h2>🎟️ Ticket – 175 lei</h2>
			<h3>What's included?</h3>

			<p>
				Two envelopes: one created by you & one to guide you on your journey by
				@iunapologeticallyloveyou <br />
				Magazines and crafting materials for vision boards and collage. <br />{' '}
				Crystals and other items to infuse your intentions. A drink from the
				bar. <br />
				The shared experience of communal dreaming. <br />A cozy, thoughtfully
				set-up atmosphere to inspire creativity and connection.
			</p>

			<a href='https://revolut.me/selfposters' className={classes.paymentLink}>
				Pay Here
			</a>
			<p className={classes.contactInfo}>
				Questions or issues? DM us at <strong>@self_posters</strong>
			</p>
		</div>
	);
};

export default EventPage;
