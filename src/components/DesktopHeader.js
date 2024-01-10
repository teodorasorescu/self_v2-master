import { React } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styling/header.module.scss';
import FacebookIcon from '../images/facebook_logo.png';
import ShoppingBag from '../images/shopping-bag.png';
import InstaIcon from '../images/instagram_logo.png';
import TikTokIcon from '../images/tiktok_logo.png';
import Badge from '@material-ui/core/Badge';

const DesktopHeader = () => {
	return (
		<div>
			<div className={styles.promotionTextContainer}>
				<div className={styles.socialMediaLogo}>
					<Link>
						<img
							className={styles.socialMediaIcons}
							src={FacebookIcon}
							alt='description'
						/>
					</Link>
					<Link>
						<img
							className={styles.socialMediaIcons}
							src={InstaIcon}
							alt='description'
						/>
					</Link>
					<Link>
						<img
							className={styles.socialMediaIcons}
							src={TikTokIcon}
							alt='description'
						/>
					</Link>
				</div>

				<p>Transport gratuit la comenzi peste 240 RON! </p>
				<div className={styles.contactText}>
					<Link style={{ textDecoration: 'none', color: 'black' }}>
						<p>FAQ&nbsp;&nbsp;</p>
					</Link>

					<Link style={{ textDecoration: 'none', color: 'black' }}>
						<p>Contact&nbsp;&nbsp;</p>
					</Link>
				</div>
			</div>
			<div className={styles.stillPositionContainer}>
				<div className={styles.upperContainer}>
					<h1>self.</h1>
					<div className={styles.icon}>
						<Link to='/cos-de-cumparaturi' style={{ color: 'black' }}>
							<Badge
								color='primary'
								className={styles.iconSize}
								badgeContent={Number.parseInt(
									localStorage.getItem('itemCount')
								)}
							>
								<img src={ShoppingBag} className={styles.iconSize} />{' '}
							</Badge>
						</Link>
					</div>
				</div>
				<div className={styles.underContainer}>
					<Link className={styles.link} to='/'>
						Acasă
					</Link>
					<Link className={styles.link} to='/psihologia-culorilor'>
						Psihologia culorilor
					</Link>
					<Link className={styles.link} to='/inspiratie'>
						Inspirație
					</Link>
				</div>
			</div>
		</div>
	);
};
export default DesktopHeader;
