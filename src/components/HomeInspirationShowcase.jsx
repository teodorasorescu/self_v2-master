import React from 'react';
import '../styling/inspoHome.scss';
import { inspoHome } from '../constants/inspoHome';

export const HomeInspirationShowcase = () => {
	return (
		<div className='gradientPhotosContainer'>
			<h3 className='text'>Inspiration</h3>
			<div className='imagesContainer'>
				{inspoHome.map((c, i) => {
					return (
						<a key={i} href='/journal/inspiration' className='imgItem'>
							<div
								className='imgBox'
								style={{ backgroundImage: `${c.image}` }}
							></div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default HomeInspirationShowcase;
