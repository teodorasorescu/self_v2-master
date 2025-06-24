import styles from '../styling/contact.module.scss';

import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { S3_BUCKET } from '../constants/links';

const Contact = () => {
	const instaIcon = S3_BUCKET + '/instagram_logo.webp';
	const tiktokIcon = S3_BUCKET + '/tiktok_logo.webp';

	return (
		<div>
			<h5>Socials</h5>
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
