import { React } from 'react';
import styles from '../styling/header.module.scss';
import FacebookIcon from '../images/facebook_logo.webp';
import ShoppingBag from '../images/cart.webp';
import InstaIcon from '../images/instagram_logo.webp';
import TikTokIcon from '../images/tiktok_logo.webp';
import Badge from '@material-ui/core/Badge';
import Self from '../images/self_logo.webp';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { FACEBOOK_LINK } from '../constants/socialMediaLinks';

const DesktopHeader = () => {
	return (
		<div>
			<div className={styles.promotionTextContainer}>
				<div className={styles.socialMediaLogo}>
					<a href={FACEBOOK_LINK}>
						<img
							className={styles.socialMediaIcons}
							src={FacebookIcon}
							alt='fb_description'
						/>
					</a>
					<a href={INSTAGRAM_LINK}>
						<img
							className={styles.socialMediaIcons}
							src={InstaIcon}
							alt='insta_description'
						/>
					</a>
					<a href={TIKTOK_LINK}>
						<img
							className={styles.socialMediaIcons}
							src={TikTokIcon}
							alt='tiktoK_description'
						/>
					</a>
				</div>

				{/* <p>{headerMessage}</p> */}
				<div className={styles.contactText}>
					<a style={{ textDecoration: 'none', color: 'black' }} href='/faq'>
						<p>FAQ&nbsp;&nbsp;</p>
					</a>

					<a style={{ textDecoration: 'none', color: 'black' }} href='/contact'>
						<p>Contact&nbsp;&nbsp;</p>
					</a>
				</div>
			</div>
			<div className={styles.stillPositionContainer}>
				<div className={styles.upperContainer}>
					<a href='/'>
						<img src={Self} alt='selflogo' />
					</a>
					<div className={styles.cartContainer}>
						<a href='/cos-de-cumparaturi' style={{ color: 'black' }}>
							<Badge
								color='primary'
								className={styles.iconSize}
								badgeContent={Number.parseInt(
									localStorage.getItem('itemCount')
								)}
							>
								<img src={ShoppingBag} className={styles.iconSize} />{' '}
							</Badge>
						</a>
					</div>
				</div>
				<div className={styles.underContainer}>
					<a className={styles.link} href='/'>
						Acasă
					</a>
					<a className={styles.link} href='/psihologia-culorilor'>
						Psihologia culorilor
					</a>
					<a className={styles.link} href='/inspiratie'>
						Inspirație
					</a>
				</div>
			</div>
		</div>
	);
};
export default DesktopHeader;
