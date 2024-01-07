import React from 'react';
import '../styling/showcase.css';
export const Showcase = ({ jpg }) => {
	return (
		<div>
			<div style={{ padding: '3%' }}>
				<h className='text'>Inspirație</h>
			</div>
			<section className='section-houses'>
				<ul className='houses-showcase clearfix'>
					{jpg.map((el) => {
						return (
							<li>
								<figure className='photo'>
									<img src={el.image} alt='house' />
								</figure>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
};

export default Showcase;
