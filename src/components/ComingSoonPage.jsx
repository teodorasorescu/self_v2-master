import classes from '../styling/coming.soon.module.scss';
import Self from '../images/self_logo.webp';
import ComingSoon from '../images/ComingSoon.webp';
import ComingSoonSmartphone from '../images/ComingSoonsmartphone.webp';
import useMediaQuery from '@mui/material/useMediaQuery';

import NewsletterForm from './NewsletterForm';

const ComingSoonPage = () => {
	const smartphoneSize = useMediaQuery('(max-width:1023px)');

	return (
		<div className={classes.container}>
			{smartphoneSize ? (
				<img
					width='350'
					src={ComingSoonSmartphone}
					alt='ComingSoonsmartphone'
				/>
			) : (
				<img width='450' src={ComingSoon} alt='comingsoon' />
			)}
			<h3>Be the first to find out what we are up to.</h3>

			<NewsletterForm />
			<img className={classes.logo} width='200' src={Self} alt='selflogo' />
		</div>
	);
};

export default ComingSoonPage;
