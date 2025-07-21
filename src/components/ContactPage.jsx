import classes from '../styling/contact.page.module.scss';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { S3_BUCKET } from '../constants/links';

const ContactPage = () => {
	const selfLogo = S3_BUCKET + '/self_logo.webp';
	const instaIcon = S3_BUCKET + '/instagram_logo.webp';

	return (
		<div className={classes.container}>
			<h2>Get your answears ASAP!</h2>
			<h2>
				{' '}
				Drop a message to{' '}
				<b className={classes.email}>hello@self-posters.com</b>
				or on instagram <b className={classes.email}>@self_posters </b>
				<a href={INSTAGRAM_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={instaIcon}
						alt='instagram'
					/>
				</a>
			</h2>
			<img src={selfLogo} alt='logo' />
			<h4>0763382056</h4>
			<h4>10:00 - 18:00</h4>
			<div></div>
		</div>
	);
};

export default ContactPage;
