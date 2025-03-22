import React from 'react';
import styles from '../styling/footer.module.scss';
import FooterCategory from './FooterCategory';
import { infoCategories } from '../constants/footerCategories';
import Contact from './Contact';
import useMediaQuery from '@mui/material/useMediaQuery';
import DropdownSection from './DropdownSection';
import { S3_BUCKET } from '../constants/links';
import Newsletter from './Newsletter';
import FooterAnpc from './FooterAnpc';

const selfLogo = S3_BUCKET + '/self_logo.webp';
const cartTypesImg = S3_BUCKET + '/cardTypes.webp';

const Footer = () => {
	const wideScreen = useMediaQuery('(min-width:1024px)');

	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				{wideScreen && (
					<>
						<div className={styles.newsletter}>
							{' '}
							<Newsletter />
						</div>
						<FooterCategory title={'Information'} categories={infoCategories} />
					</>
				)}
				{!wideScreen && (
					<div className={styles.borderContainer}>
						<DropdownSection
							title={'Information'}
							infoCategories={infoCategories}
						/>
						<div className={styles.newsletter}>
							{' '}
							<Newsletter />
						</div>
					</div>
				)}

				<div className={styles.contactPadding}>
					<Contact />
					<img
						className={styles.cardTypeImg}
						src={cartTypesImg}
						alt='Visa, Mastercard, Google Pay, Apple Pay'
					/>
					{wideScreen && <FooterAnpc />}
				</div>
			</div>
			<div className={styles.logoContainer}>
				{!wideScreen && (
					<>
						{' '}
						<img
							className={styles.logo}
							src={selfLogo}
							alt='Self Posters Logo'
						/>
						<FooterAnpc />
					</>
				)}
			</div>
		</div>
	);
};
export default Footer;
