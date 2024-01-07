import { React } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import DesktopHeader from './DesktopHeader';
import SmartphoneHeader from './SmartphoneHeader';

const Header = () => {
	const wideScreen = useMediaQuery('(min-width:1025px)');

	return (
		<div>{wideScreen === true ? <DesktopHeader /> : <SmartphoneHeader />}</div>
	);
};
export default Header;
