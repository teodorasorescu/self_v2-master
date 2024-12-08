import styles from '../styling/newsletter.page.module.scss';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
	return (
		<div className={styles.container}>
			<h1>Self Posters Club</h1>
			<h2>
				GET 30% OFF ON YOUR ORDER! <br />
				Always extra discounts, access to events, early product releases, and
				insider updates tailored just for you!
			</h2>
			<NewsletterForm />
			<h3>
				By submitting your email, you agree to our Terms & Conditions and
				Privacy Policy.
			</h3>
		</div>
	);
};

export default Newsletter;
