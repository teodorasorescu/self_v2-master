import styles from './our.club.page.module.scss';

import NewsletterFreePoster from './NewsletterFreePoster';
const FreePosterClub = () => {
	return (
		<div className={styles.container}>
			<NewsletterFreePoster />{' '}
		</div>
	);
};

export default FreePosterClub;
