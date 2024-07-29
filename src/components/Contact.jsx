import styles from '../styling/contact.module.scss';
import InstaIcon from '../images/instagram_logo.webp';
import TikTokIcon from '../images/tiktok_logo.webp';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';

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
				<a href={INSTAGRAM_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={InstaIcon}
						alt='Follow selfposters.ro on Instagram'
					/>
				</a>
				<a href={TIKTOK_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={TikTokIcon}
						alt='Follow selfposters.ro on Tiktok'
					/>
				</a>
			</div>
		</div>
	);
};

export default Contact;
