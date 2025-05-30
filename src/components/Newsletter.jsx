import styles from '../styling/newsletter.page.module.scss';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
	return (
		<div className={styles.container}>
			<h1>Happy Children's Day!</h1>
			<h2>
				Because kids are the best artists join and get 20% off code! <br />
				Only this weekend!
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
