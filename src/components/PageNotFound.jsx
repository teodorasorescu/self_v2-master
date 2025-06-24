import classes from '../styling/contact.page.module.scss';
import { INSTAGRAM_LINK, TIKTOK_LINK } from '../constants/socialMediaLinks';
import { S3_BUCKET } from '../constants/links';

const instaIcon = S3_BUCKET + '/instagram_logo.webp';
const tiktokIcon = S3_BUCKET + '/tiktok_logo.webp';

const PageNotFound = () => {
	return (
		<div className={classes.container}>
			<h2>Sorry, this page does not exist! </h2>

			<h2>
				{' '}
				You can find us here:{' '}
				<b className={classes.email}>@self-posters.com </b>
				<a href={INSTAGRAM_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={instaIcon}
						alt='instagram - @self-posters.com'
					/>
				</a>
				<a href={TIKTOK_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={tiktokIcon}
						alt='tiktok - @self-posters.com'
					/>
				</a>
			</h2>
			<div></div>
		</div>
	);
};

export default PageNotFound;
