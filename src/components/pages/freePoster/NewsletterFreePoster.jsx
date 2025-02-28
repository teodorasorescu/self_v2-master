import { INSTAGRAM_LINK } from '../../../constants/socialMediaLinks';
import styles from '../../../styling/newsletter.page.module.scss';
import FreeNewsletterForm from '../../FreeNewsletterForm';
const NewsletterFreePoster = () => {
	return (
		<div className={styles.container}>
			<h1>Claim your FREE Poster</h1>
			<h2>Happy Spring! Hoped you liked the flowers! </h2>
			<h2>
				{' '}
				Sign up & give us a follow on{' '}
				<a href={INSTAGRAM_LINK}>selfposters.ro</a> <br /> The winner will be
				announced on instagram on 8th March. Good luck!
			</h2>
			<FreeNewsletterForm />
		</div>
	);
};

export default NewsletterFreePoster;
