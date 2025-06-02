import { React, useState } from 'react';
import styles from '../styling/header.module.scss';
import Badge from '@mui/material/Badge';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import Subheader from './Subheader';
import { Helmet } from 'react-helmet';
import { S3_BUCKET } from '../constants/links';

const instaIcon = S3_BUCKET + '/instagram_logo.webp';
const tiktokIcon = S3_BUCKET + '/tiktok_logo.webp';
const selfLogo = S3_BUCKET + '/self_logo.webp';
const shoppingBagIcon = S3_BUCKET + '/box.webp';

const DesktopHeader = () => {
	const [subHeaderSpiritualityOn, setSubHeaderSpirituality] = useState(false);
	const [subHeaderDesignOn, setSubHeaderDesign] = useState(false);

	const spiritualityTopics = [
		{
			name: 'Journal',
			path: '/journal',
		},
		{
			name: 'La Siesta Collection',
			path: '/journal/ana-liana',
		},
		{
			name: 'Still Life, Still Home Collection',
			path: '/journal/ciocarlica',
		},
		{
			name: 'The Spring Blossom Collection',
			path: '/journal/silvie-illustrations',
		},
		{
			name: 'Salt Water Collection',
			path: '/journal/daia-grigore',
		},
		{
			name: 'About Us',
			path: '/about-us',
		},
		{
			name: 'Artsy Club',
			path: '/artsy-club',
		},
	];

	const interiorDesignTopics = [
		{
			name: 'Best practices for using gradient in design',
			path: 'inspiration',
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
			<Helmet>
				<link
					rel='icon'
					type='image/png'
					href='https://selfposters.ro/favicon.png'
				/>
			</Helmet>
			<div className={styles.promotionTextContainer}>
				<div className={styles.socialMediaLogo}>
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

				<p>
					Are u artsy? Get 10% off by joining <a href='/artsy-club'>our club</a>
					!{' '}
				</p>
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
							src={selfLogo}
							width='200'
							alt='Self Posters Logo - Embrace yourself with colors'
						/>
					</a>
					<div className={styles.cartContainer}>
						<a href='/cart' style={{ color: 'black' }}>
							<Badge
								color='primary'
								badgeContent={Number.parseInt(
									localStorage.getItem('itemCount')
								)}
								sx={{
									'& .MuiBadge-colorPrimary': {
										backgroundColor: '#7684ff',
										color: '#fff7e3', // Set text color for better contrast
									},
								}}
							>
								<img
									src={shoppingBagIcon}
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
						Home
					</a>
					<a
						className={styles.link}
						onMouseOver={() => setSubHeaderSpirituality(true)}
					>
						Journal
					</a>{' '}
					<div
						onMouseLeave={() => setSubHeadersOff(false)}
						className={`${styles.subheader} ${
							subHeaderSpiritualityOn ? styles.visible : ''
						}`}
					>
						{subHeaderSpiritualityOn && (
							<Subheader topics={spiritualityTopics} />
						)}
					</div>
					<a
						className={styles.link}
						href='/canvas-art-prints'
						onMouseOver={() => setSubHeadersOff()}
					>
						Canvas Art Prints
					</a>
					<a
						className={styles.link}
						href='/customized-canvas-posters'
						onMouseOver={() => setSubHeadersOff()}
					>
						Customized Canvas Posters
					</a>
				</div>
			</div>
		</div>
	);
};
export default DesktopHeader;
