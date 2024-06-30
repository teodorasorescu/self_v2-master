import benefits from '../constants/benefits';
import classes from '../styling/benefits.module.scss';

const Benefits = () => {
	return (
		<div className={classes.container}>
			{benefits.map((c, i) => {
				return (
					<div className={classes.benefits} key={i}>
						<h4>{c.title}</h4>
						<p className={classes.pContainer}>{c.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Benefits;
