import { React, useState } from 'react';
import styles from '../styling/header.module.scss';
import ShoppingBag from '../images/cart.webp';
import InstaIcon from '../images/instagram_logo.webp';
import TikTokIcon from '../images/tiktok_logo.webp';
import Badge from '@material-ui/core/Badge';
import Self from '../images/self_logo.webp';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import Subheader from './Subheader';
import Spirituality from '../images/spirituality.webp';
import InteriorDesign from '../images/interiorDesign.jpeg';

const DesktopHeader = () => {
	const [subHeaderSpiritualityOn, setSubHeaderSpirituality] = useState(false);
	const [subHeaderDesignOn, setSubHeaderDesign] = useState(false);

	const spiritualityTopics = [
		{
			name: 'Ce este meditatia si cum se practica?',
			path: 'ce-este-meditatia-si-cum-se-practica',
		},
		{
			name: 'Cum influenteaza emotiile comportamentul?',
			path: 'ce-este-meditatia-si-cum-se-practica',
		},
		{
			name: 'Intuitive vs Sensing',
			path: 'ce-este-meditatia-si-cum-se-practica',
		},
	];

	const interiorDesignTopics = [
		{
			name: 'Best practices for using gradient in design',
			path: 'inspiratie',
		},
		{
			name: 'How to decorate my room to match my personality?',
			path: 'ce-este-meditatia-si-cum-se-practica',
		},
		{
			name: 'What happened nowadays to detail?',
			path: 'ce-este-meditatia-si-cum-se-practica',
		},
		{
			name: 'How do colors in my home change my mood?',
			path: 'ce-este-meditatia-si-cum-se-practica',
		},
	];

	const setSubHeadersOff = () => {
		setSubHeaderSpirituality(false);
		setSubHeaderDesign(false);
	};

	return (
		<div className={styles.container}>
			<div className={styles.promotionTextContainer}>
				<div className={styles.socialMediaLogo}>
					<a href={INSTAGRAM_LINK}>
						<img
							className={styles.socialMediaIcons}
							src={InstaIcon}
							alt='Follow us on Instagram - @selfposters.ro'
						/>
					</a>
					<a href={TIKTOK_LINK}>
						<img
							className={styles.socialMediaIcons}
							src={TikTokIcon}
							alt='Follow us on Tiktok - @selfposters.ro'
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
						<img
							src={Self}
							width='200'
							alt='SELF Logo - Embrace yourself with colors'
						/>
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
								<img
									src={ShoppingBag}
									className={styles.iconSize}
									alt='cosul de cumparaturi'
								/>{' '}
							</Badge>
						</a>
					</div>
				</div>
				<div className={styles.underContainer}>
					<a
						className={styles.link}
						href='/'
						onMouseOver={() => setSubHeadersOff()}
					>
						Acasă
					</a>

					<a
						className={styles.link}
						onMouseOver={() => setSubHeaderSpirituality(true)}
					>
						Spiritualitate
					</a>
					<div
						onMouseLeave={() => setSubHeadersOff(false)}
						className={`${styles.subheader} ${
							subHeaderSpiritualityOn ? styles.visible : ''
						}`}
					>
						{subHeaderSpiritualityOn && (
							<Subheader
								topics={spiritualityTopics}
								headline='Spiritualitate'
								imgTitle={Spirituality}
								imgAlt='Descopera ce este spiritualitatea, cum sa meditezi si cum sa te regasesti pe tine'
							/>
						)}
					</div>
					<a
						className={styles.link}
						href='/psihologia-culorilor'
						onMouseOver={() => setSubHeadersOff()}
					>
						Psihologia Culorilor
					</a>
					<a
						className={styles.link}
						onMouseOver={() => setSubHeaderDesign(true)}
					>
						Interior Design
					</a>
					<div
						onMouseLeave={() => setSubHeaderDesign(false)}
						className={`${styles.subheader} ${
							subHeaderDesignOn ? styles.visible : ''
						}`}
					>
						{subHeaderDesignOn && (
							<Subheader
								topics={interiorDesignTopics}
								headline='Interior Design'
								imgTitle={InteriorDesign}
								imgAlt='Explore our topics about Interior Design - about gradients, how to personalize your room and more'
							/>
						)}
					</div>
					<a
						className={styles.link}
						href='/despre-self'
						onMouseOver={() => setSubHeadersOff()}
					>
						Despre SELF
					</a>
					<a
						className={styles.link}
						href='/sustenabilitate'
						onMouseOver={() => setSubHeadersOff()}
					>
						Sustenabilitate
					</a>
				</div>
			</div>
		</div>
	);
};
export default DesktopHeader;
