import PropTypes from 'prop-types';
import classes from './Loader.module.scss';
import { useEffect } from 'react';
import JumiLoader from './JumiLoader.svg';

const Loader = ({ className }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {}, 5000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className={`${classes.container} ${className}`}>
			<img src={JumiLoader} alt='Loading...' className={classes.loaderImage} />
		</div>
	);
};

Loader.propTypes = {
	className: PropTypes.string,
};

export default Loader;
