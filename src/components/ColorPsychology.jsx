import colors from '../constants/colorsDescription';
import classes from '../styling/color.psycho.module.scss';

const ColorPsychology = () => {
	return (
		<div className={classes.container}>
			{colors.map((c, i) => {
				return (
					<div className={classes.desc} key={i}>
						<h4 style={{ color: c.color }}>{c.title}</h4>
						<p>{c.summary}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ColorPsychology;
