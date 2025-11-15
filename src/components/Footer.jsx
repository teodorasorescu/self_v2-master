import styles from '../styling/footer.module.scss';
import FooterCategory from './FooterCategory';
import { infoCategories } from '../constants/footerCategories';
import Contact from './Contact';
import useMediaQuery from '@mui/material/useMediaQuery';
import DropdownSection from './DropdownSection';
import { S3_BUCKET } from '../constants/links';
import Newsletter from './Newsletter';
import FooterAnpc from './FooterAnpc';
import samedayLogo from './logo-sameday.svg';
import dpdLogo from './DPD LOGO.svg';
import { useLocation } from 'react-router-dom';
const cartTypesImg = S3_BUCKET + '/cardTypes.webp';

const Footer = () => {
	const wideScreen = useMediaQuery('(min-width:1024px)');
	const location = useLocation();
	const isQuizResultPath = () => {
		return (
			location.pathname === '/quiz-result' ||
			location.pathname === '/artsy-club'
		);
	};

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
						{!isQuizResultPath && (
							<div className={styles.newsletter}>
								{' '}
								<Newsletter />
							</div>
						)}
					</div>
				)}

				<div className={styles.contactPadding}>
					<Contact />
					<img
						className={styles.cardTypeImg}
						src={cartTypesImg}
						alt='Visa, Mastercard, Google Pay, Apple Pay'
					/>{' '}
					{wideScreen && <FooterAnpc />}
				</div>
			</div>
			<div className={styles.logoContainer}>
				{!wideScreen && (
					<>
						{' '}
						<img src={dpdLogo} width='80' alt='samedayLogo' />
						<img src={samedayLogo} width='90' alt='samedayLogo' />
						<FooterAnpc />{' '}
					</>
				)}
			</div>
		</div>
	);
};
export default Footer;
