import React from 'react';
import styles from '../styling/footer.module.scss';
import FooterCategory from './FooterCategory';
import {
	aboutUsCategories,
	infoCategories,
} from '../constants/footerCategories';
import Contact from './Contact';
import Self from '../images/self_logo.webp';
import useMediaQuery from '@mui/material/useMediaQuery';
import DropdownSection from './DropdownSection';
import CardTypes from '../images/cardTypes.webp';
import AnpcSal from '../images/anpcsal.webp';
import AnpcSol from '../images/anpcsol.webp';

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
				<img className={styles.cardTypeImg} src={CardTypes} alt={`card`} />
			</div>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={Self} alt='selflogo' />
				<div className={styles.anpcContainer}>
					<a href='https://anpc.ro/ce-este-sal/' rel='noopener'>
						{' '}
						<img src={AnpcSal} alt='anpc-sal' />
					</a>{' '}
					<a />
					<a href='https://ec.europa.eu/consumers/odr' rel='noopener'>
						{' '}
						<img src={AnpcSol} alt='anpc-sal' />
					</a>{' '}
					<a />
				</div>
			</div>
		</div>
	);
};
export default Footer;
