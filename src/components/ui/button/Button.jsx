import classes from './Button.module.scss';

export const Button = ({ msg, style, disabled, onClick }) => {
	return (
		<div className={classes.buttonContainer}>
			<button
				onClick={onClick}
				type='submit'
				disabled={disabled}
				className={`${classes.buttonStyle} ${style}`}
			>
				{msg}{' '}
			</button>
		</div>
	);
};

export default Button;
