import React from 'react';
import styles from '../styling/footer.module.scss';
import FooterCategory from './FooterCategory';
import {
	aboutUsCategories,
	infoCategories,
} from '../constants/footerCategories';
import Contact from './Contact';
import Self from '../images/self_logo.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import DropdownSection from './DropdownSection';

const Footer = () => {
	const wideScreen = useMediaQuery('(min-width:1025px)');

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
			</div>
			<img src={Self} alt='selflogo' />
		</div>
	);
};
export default Footer;
