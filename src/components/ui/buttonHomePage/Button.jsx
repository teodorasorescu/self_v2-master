import { Button } from '@mui/material';
import classes from './Button.module.scss';

export const ButtonHomePage = ({ msg }) => {
	return <Button className={classes.button}>{msg}</Button>;
};

export default ButtonHomePage;
