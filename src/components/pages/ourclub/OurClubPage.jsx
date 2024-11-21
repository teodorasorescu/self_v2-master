import { S3_BUCKET } from '../../../constants/links';
import styles from './our.club.page.module.scss';
import Newsletter from '../../Newsletter';

const ourClub = S3_BUCKET + '/ourclub.webp';

const OurClubPage = () => {
	return (
		<div className={styles.container}>
			<Newsletter />{' '}
			<img
				src={ourClub}
				alt='Always extra discounts, access to events, early product releases, and insider updates tailored just for you!'
			/>
		</div>
	);
};

export default OurClubPage;
