import { useState, useEffect } from 'react';
import { Showcase } from './Showcase';
import { inspoData } from '../constants/inspoData';
export const Inspiration = () => {
	return (
		<div>
			<Showcase jpg={inspoData} />{' '}
		</div>
	);
};

export default Inspiration;
