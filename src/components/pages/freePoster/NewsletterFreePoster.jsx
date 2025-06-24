import { INSTAGRAM_LINK } from '../../../constants/socialMediaLinks';
import styles from '../../../styling/newsletter.page.module.scss';
import FreeNewsletterForm from '../../FreeNewsletterForm';
const NewsletterFreePoster = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.give}>Giveaway</h1>
			<h1>On Women's Day We Offer You a Free Poster</h1>
			<h2>Happy Spring! Hope you liked the flowers! </h2>
			<h2>
				Instrustions <br />
				Sign up & give us a follow on{' '}
				<a href={INSTAGRAM_LINK}>self-posters.com</a> <br /> The winner will be
				announced on instagram on 8th March. Good luck!
			</h2>
			<FreeNewsletterForm />
		</div>
	);
};

export default NewsletterFreePoster;
