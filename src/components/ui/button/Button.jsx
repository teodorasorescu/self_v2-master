import classes from './Button.module.scss';

export const Button = ({ msg, style, onClick }) => {
	return (
		<div className={classes.buttonContainer}>
			<button
				onClick={onClick}
				type='submit'
				className={`${classes.buttonStyle} ${style}`}
			>
				{msg}{' '}
			</button>
		</div>
	);
};

export default Button;
