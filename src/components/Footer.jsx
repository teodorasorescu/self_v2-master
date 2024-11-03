import React from 'react';
import styles from '../styling/footer.module.scss';
import FooterCategory from './FooterCategory';
import {
	aboutUsCategories,
	infoCategories,
} from '../constants/footerCategories';
import Contact from './Contact';
import useMediaQuery from '@mui/material/useMediaQuery';
import DropdownSection from './DropdownSection';
import { S3_BUCKET } from '../constants/links';

const selfLogo = S3_BUCKET + '/self_logo.webp';
const cartTypesImg = S3_BUCKET + '/cardTypes.webp';
const anpcSalImg = S3_BUCKET + '/anpcsal.webp';
const anpcSolImg = S3_BUCKET + '/anpcsol.webp';

const Footer = () => {
	const wideScreen = useMediaQuery('(min-width:1024px)');

	return (
		<div className={styles.container}>
			{wideScreen && (
				<>
					<FooterCategory title={'Informații'} categories={infoCategories} />
					<FooterCategory title={''} categories={aboutUsCategories} />
				</>
			)}
			{!wideScreen && (
				<div className={styles.borderContainer}>
					<DropdownSection
						title={'Informații'}
						infoCategories={infoCategories}
						aboutUsCategories={aboutUsCategories}
					/>
				</div>
			)}

			<div className={styles.contactPadding}>
				<Contact />
				<img
					className={styles.cardTypeImg}
					src={cartTypesImg}
					alt='Visa, Mastercard, Google Pay, Apple Pay'
				/>
			</div>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={selfLogo} alt='Self Posters Logo' />
				<div className={styles.anpcContainer}>
					<a href='https://anpc.ro/ce-este-sal/' rel='noopener'>
						{' '}
						<img src={anpcSalImg} alt='anpc-sal' />
					</a>{' '}
					<a />
					<a href='https://ec.europa.eu/consumers/odr' rel='noopener'>
						{' '}
						<img src={anpcSolImg} alt='anpc-sal' />
					</a>{' '}
					<a />
				</div>
			</div>
		</div>
	);
};
export default Footer;
