import React from 'react';
import '../styling/colorsflipcard.css';
import colors from '../constants/colorsDescription';
import { S3_BUCKET } from '../constants/links';

const ColorsFlipcard = () => {
	const roundIconImg = S3_BUCKET + '/round-arrow.webp';

	return (
		<div className='container'>
			{colors.map((c, i) => {
				return (
					<div className='item' key={i}>
						<div className='box'>
							<div className='front' style={{ backgroundColor: `${c.color}` }}>
								<div className='roundIconContainer'>
									<img
										src={roundIconImg}
										alt='intoarce cardul si personalizeaza tabloul'
									/>
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
