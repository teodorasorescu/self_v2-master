import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import PropTypes from 'prop-types';
import classes from './Loader.module.scss';
import { useEffect, useState } from 'react';

const Loader = ({ className }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {}, 5000);
		return () => clearTimeout(timeout);
	}, []);
	return (
		<div className={`${classes.container} ${className}`}>
			<div className={`${classes.container} ${className}`}>
				<ClimbingBoxLoader color='#000000' />
			</div>
		</div>
	);
};

Loader.propTypes = {
	className: PropTypes.string,
};

Loader.defaultProps = {
	className: '',
};

export default Loader;
