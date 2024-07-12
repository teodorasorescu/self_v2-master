import classes from '../styling/contact.page.module.scss';
import Self from '../images/self_logo.webp';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import InstaIcon from '../images/instagram_logo.webp';

const ContactPage = () => {
	return (
		<div className={classes.container}>
			<h2>Suntem aici să te ajutăm.</h2>
			<h2>
				{' '}
				Scrie-ne la <b className={classes.email}>selfposters@gmail.com</b>, sau
				pe instagram <b className={classes.email}>@selfposters.ro</b>
				<a href={INSTAGRAM_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={InstaIcon}
						alt='Follow selfposters.ro on Instagram'
					/>
				</a>
			</h2>
			<img src={Self} alt='logo' />
			<h4>0763382056</h4>
			<h4>Program de lucru: 10:00 - 18:00</h4>
			<div></div>
		</div>
	);
};

export default ContactPage;
