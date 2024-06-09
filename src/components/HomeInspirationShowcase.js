import React from 'react';
import '../styling/inspoHome.css';
import { inspoHome } from '../constants/inspoHome';

export const HomeInspirationShowcase = () => {
	return (
		<div className='gradientPhotosContainer'>
			<h3 className='text'>INSPIRAȚIE</h3>
			<div className='imagesContainer'>
				{inspoHome.map((c, i) => {
					return (
						<a href='/inspiratie' className='imgItem'>
							<div key={i}>
								<div
									className='imgBox'
									style={{ backgroundImage: `${c.image}` }}
								></div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default HomeInspirationShowcase;
