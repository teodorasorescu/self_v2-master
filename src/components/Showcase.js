import React from 'react';
import '../styling/showcase.css';
export const Showcase = ({ jpg }) => {
	return (
		<div>
			<div className='container'>
				<h1 className='text'>Inspirație</h1>
			</div>
			<section className='section-houses'>
				<div className='houses-showcase clearfix'>
					{jpg.map((el) => {
						return (
							<div key={Math.random() * 101}>
								<img className='photo' src={el.image} alt='house' />
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Showcase;
