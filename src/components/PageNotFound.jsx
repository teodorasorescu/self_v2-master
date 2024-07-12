import classes from '../styling/contact.page.module.scss';
import Self from '../images/self_logo.webp';
import { INSTAGRAM_LINK, TIKTOK_LINK } from '../constants/socialMediaLinks';
import InstaIcon from '../images/instagram_logo.webp';
import TikTokIcon from '../images/tiktok_logo.webp';

const PageNotFound = () => {
	return (
		<div className={classes.container}>
			<h2>Pagina accesată nu există! :(</h2>

			<h2>
				{' '}
				Dar sigur ne găsești aici: <b className={classes.email}>@self.ro_ </b>
				<a href={INSTAGRAM_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={InstaIcon}
						alt='Follow us on Instagram - @selfposters.ro'
					/>
				</a>
				<a href={TIKTOK_LINK}>
					<img
						className={classes.socialMediaIcons}
						src={TikTokIcon}
						alt='Follow us on Tiktok - @selfposters.ro'
					/>
				</a>
			</h2>
			<div></div>
		</div>
	);
};

export default PageNotFound;
