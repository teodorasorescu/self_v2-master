import React from 'react';
import '../styling/colorsflipcard.css';
import colors from '../constants/colorsDescription';
import RoundIcon from '../images/round-arrow.webp';

const ColorsFlipcard = () => {
	return (
		<div className='container'>
			{colors.map((c, i) => {
				return (
					<div className='item' key={i}>
						<div className='box'>
							<div className='front' style={{ backgroundColor: `${c.color}` }}>
								<div className='roundIconContainer'>
									<img src={RoundIcon} alt='roundIcon' />
								</div>
							</div>
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
