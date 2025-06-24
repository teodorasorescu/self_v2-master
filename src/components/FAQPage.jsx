import classes from '../styling/faq.module.scss';

import FAQDropdown from './FAQDropdown';
import { orderQuestions, productQuestions } from '../constants/faqdata';

const FAQPage = () => {
	return (
		<div className={classes.container}>
			<h4>Facts & Questions</h4>
			<div>
				<FAQDropdown questions={orderQuestions} />
				<FAQDropdown questions={productQuestions} />
			</div>
		</div>
	);
};

export default FAQPage;
