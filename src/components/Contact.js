import { Link } from 'react-router-dom';
import styles from '../styling/contact.module.scss';
import FacebookIcon from '../images/facebook_logo.webp';
import InstaIcon from '../images/instagram_logo.webp';
import TikTokIcon from '../images/tiktok_logo.webp';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { FACEBOOK_LINK } from '../constants/socialMediaLinks';

const Contact = () => {
	return (
		<div>
			<h5>Contact</h5>
			<p>adresa sediului firmei</p>
			<p>numar de telefon</p>
			<div>
				<Link to={FACEBOOK_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={FacebookIcon}
						alt='description'
					/>
				</Link>
				<Link to={INSTAGRAM_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={InstaIcon}
						alt='description'
					/>
				</Link>
				<Link to={TIKTOK_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={TikTokIcon}
						alt='description'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
