import React from 'react';
import '../styling/ResearchersFlipcard.css';
import colorResearchers from '../constants/colorResearchers';
import { S3_BUCKET } from '../constants/links';

const swipeIconImg = S3_BUCKET + '/hand.webp';

const ResearchersFlipcard = () => {
	return (
		<div>
			<div className='boxContainer'>
				{colorResearchers.map((c, i) => {
					return (
						<div className='boxItem' key={i}>
							<div className='flipBox'>
								<div
									className='flipBoxFront textCenter'
									style={{ backgroundImage: `${c.image}` }}
								>
									{' '}
									<div className='nameContainer'>
										<h3 className='flipBoxHeader'>{c.researcher}</h3>
									</div>
									<div className='swipeIconContainer'>
										<img
											src={swipeIconImg}
											alt='Gliseaza catre dreapta si exploareaza lumea oamenilor ce au studit psihologia culorilor'
										/>
									</div>
								</div>
								<div
									className='flipBoxBack textCenter'
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
		</div>
	);
};

export default ResearchersFlipcard;
