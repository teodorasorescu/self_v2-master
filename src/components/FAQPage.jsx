import classes from '../styling/faq.module.scss';
import Button from '@material-ui/core/Button';
import React, { useRef } from 'react';
import FAQDropdown from './FAQDropdown';
import { orderQuestions, productQuestions } from '../constants/faqdata';

const FAQPage = () => {
	const product = useRef(null);
	const order = useRef(null);

	const executeScrollOnProduct = () => {
		product.current.scrollIntoView();
	};

	const executeScrollOnOrder = () => {
		order.current.scrollIntoView();
	};

	return (
		<div className={classes.container}>
			<h4>Întrebări frecvente</h4>
			<div className={classes.buttonContainer}>
				<Button onClick={executeScrollOnProduct} className={classes.button}>
					PRODUS
				</Button>
				<Button onClick={executeScrollOnOrder} className={classes.button}>
					COMANDĂ
				</Button>
			</div>
			<div ref={product}>
				<FAQDropdown questions={productQuestions} />
			</div>
			<div ref={order}>
				<FAQDropdown questions={orderQuestions} />
			</div>
		</div>
	);
};

export default FAQPage;
