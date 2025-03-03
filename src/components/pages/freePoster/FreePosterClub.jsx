import styles from './our.club.page.module.scss';

import freePoster from './giveaway.jpeg';
import NewsletterFreePoster from './NewsletterFreePoster';
const FreePosterClub = () => {
	return (
		<div className={styles.container}>
			<NewsletterFreePoster />{' '}
			<img
				src={freePoster}
				width='500px'
				alt='Always extra discounts, access to events, early product releases, and insider updates tailored just for you!'
			/>
		</div>
	);
};

export default FreePosterClub;
