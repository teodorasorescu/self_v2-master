import classes from '../styling/policy.module.scss';
import { termsandcontions } from '../constants/termsandconditions';
import { headline } from '../constants/termsandconditions';

const TermsAndConditions = () => {
	return (
		<div className={classes.container}>
			<h4>{headline}</h4>
			{termsandcontions.map((t, i) => {
				return (
					<div className={classes.terms} key={i}>
						<h5>{t.title}</h5>
						<p>{t.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TermsAndConditions;
