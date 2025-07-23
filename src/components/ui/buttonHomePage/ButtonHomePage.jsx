import Button from '@mui/material/Button';
import classes from './Button.module.scss';

export const ButtonHomePage = ({ msg }) => {
	return (
		<div className={classes.buttonContainer}>
			<Button className={classes.button}>{msg}</Button>
		</div>
	);
};

export default ButtonHomePage;
