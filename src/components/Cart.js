import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopCart } from './DesktopCart';
import { SmartphoneCart } from './SmartphoneCart';

export const Cart = () => {
    const wideScreen = useMediaQuery('(min-width:880px)');

	return <div>
     
        {wideScreen ? <DesktopCart/> : <SmartphoneCart/>}
    </div>;
};
