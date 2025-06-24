import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopCart } from './DesktopCart';
import { SmartphoneCart } from './SmartphoneCart';
import { useCountry } from '../contexts/CountryProvider';
import { getCurrencyByCountry } from '../constants/utils';

export const Cart = () => {
	const wideScreen = useMediaQuery('(min-width:880px)');

	const { countryCode } = useCountry();
	const currency = ' ' + getCurrencyByCountry(countryCode);

	return (
		<div>
			{wideScreen ? (
				<DesktopCart currency={currency} />
			) : (
				<SmartphoneCart currency={currency} />
			)}
		</div>
	);
};
