import React from 'react';
import '../styling/inspoHome.css';
import { inspoHome } from '../constants/inspoHome';

export const HomeInspirationShowcase = () => {
	return (
		<div className='gradientPhotosContainer'>
			<h3 className='text'>INSPIRAȚIE</h3>
			<div className='imagesContainer'>
				{inspoHome.map((c) => {
					return (
						<a href='/inspiratie' key={Math.random() * 101} className='imgItem'>
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
