import classes from '../styling/gradient.picture.scss';

const GradientPicture = ({ classGradient, styleGradient }) => {
	return (
		<div className={classes.container}>
			<div className={classGradient} style={styleGradient}></div>
		</div>
	);
};

export default GradientPicture;
