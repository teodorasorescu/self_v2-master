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
			<p>
				Bucuresti, Sector 3, <br />
				Str. Nerva Traian, nr 27-33, <br /> Sc. B, Et. 1, nr. 6
			</p>
			<p>0763382056</p>
			<div>
				<a href={FACEBOOK_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={FacebookIcon}
						alt='facebook_link'
					/>
				</a>
				<a href={INSTAGRAM_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={InstaIcon}
						alt='instagram_link'
					/>
				</a>
				<a to={TIKTOK_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={TikTokIcon}
						alt='tiktok_link'
					/>
				</a>
			</div>
		</div>
	);
};

export default Contact;
