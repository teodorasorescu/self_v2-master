import classes from '../styling/contact.page.module.scss';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { S3_BUCKET } from '../constants/links';

const ContactPage = () => {
	const selfLogo = S3_BUCKET + '/self_logo.webp';
	const instaIcon = S3_BUCKET + '/instagram_logo.webp';

	return (
		<div className={classes.container}>
			<h1>Contact</h1>
			<h2>We are always ready to help you.</h2>
			<h2>
				{' '}
				Drop a message to{' '}
				<b className={classes.email}>
					hello@self-posters.com <br />{' '}
				</b>
				or on <br />
				<a href={INSTAGRAM_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={instaIcon}
						alt='instagram'
					/>
					<b className={classes.email}>@self_posters </b>
				</a>
			</h2>
		</div>
	);
};

export default ContactPage;
