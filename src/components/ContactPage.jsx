import classes from '../styling/contact.page.module.scss';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { S3_BUCKET } from '../constants/links';

const ContactPage = () => {
	const selfLogo = S3_BUCKET + '/self_logo.webp';
	const instaIcon = S3_BUCKET + '/instagram_logo.webp';

	return (
		<div className={classes.container}>
			<h2>Suntem aici să te ajutăm.</h2>
			<h2>
				{' '}
				Scrie-ne la <b className={classes.email}>hello@selfposters.ro </b>, sau
				pe instagram <b className={classes.email}>@selfposters.ro</b>
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
			<h4>Program de lucru: 10:00 - 18:00</h4>
			<div></div>
		</div>
	);
};

export default ContactPage;
