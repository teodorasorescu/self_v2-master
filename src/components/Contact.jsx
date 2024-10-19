import styles from '../styling/contact.module.scss';

import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { S3_BUCKET } from '../constants/links';

const Contact = () => {
	const instaIcon = S3_BUCKET + '/instagram_logo.webp';
	const tiktokIcon = S3_BUCKET + '/tiktok_logo.webp';

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
						src={instaIcon}
						alt='instagram'
					/>
				</a>
				<a href={TIKTOK_LINK}>
					<img
						className={styles.socialMediaIcons}
						src={tiktokIcon}
						alt='tiktok'
					/>
				</a>
			</div>
		</div>
	);
};

export default Contact;
