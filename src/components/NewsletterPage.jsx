import styles from '../styling/newsletter.page.module.scss';
import NewsletterForm from './NewsletterForm';

const NewsletterPage = () => {
	return (
		<div className={styles.container}>
			<h1>Self Posters Club</h1>
			<h2>
				Join our community for exclusive perks! Get access to extra discounts,
				events, early product releases, special promotions, and insider updates
				tailored just for you!
			</h2>
			<NewsletterForm />
			<h3>
				By submitting your email, you agree to our Terms & Conditions and
				Privacy Policy.
			</h3>
		</div>
	);
};

export default NewsletterPage;
