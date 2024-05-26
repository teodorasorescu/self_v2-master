import classes from '../styling/policy.module.scss';
import { confidentiality } from '../constants/confidentiality';
import { headline } from '../constants/confidentiality';
const Confidentiality = () => {
	return (
		<div className={classes.container}>
			<h4>{headline}</h4>
			{confidentiality.map((t, i) => {
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

export default Confidentiality;
