import React from 'react';
import '../styling/colorsflipcard.css';
import colors from '../constants/colorsDescription';

const ColorsFlipcard = () => {
	return (
		<div className='container'>
			{colors.map((c, i) => {
				return (
					<div className='item' key={i}>
						<div className='box'>
							<div
								className='front'
								style={{ backgroundColor: `${c.color}` }}
							></div>
							<div
								className='back'
								style={{ backgroundColor: 'rgba(248, 221, 170, 0.3)' }}
							>
								<div className='inner'>
									<p>{c.desc}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ColorsFlipcard;
