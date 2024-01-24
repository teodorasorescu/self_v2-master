import React from 'react';
import '../styling/showcase.css';
export const Showcase = ({ jpg }) => {
	return (
		<div>
			<div className='container'>
				<h1 className='text'>Inspirație</h1>
			</div>
			<section className='section-houses'>
				<div className='houses-showcase'>
					{jpg.map((el) => {
						return (
							<img
								className='photo'
								src={el.image}
								alt='house'
								key={Math.random() * 101}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Showcase;
