import React from 'react';
import '../styling/ResearchersFlipcard.css';
import colorResearchers from '../constants/colorResearchers';
import SwipeIcon from '../images/hand.png';

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
									<div className='nameContainer'>
										<h3 className='flipBoxHeader'>{c.researcher}</h3>
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
			<div className='swipeContainer'>
				<img src={SwipeIcon} alt='swipeIcon' />
				<p>Glișați spre stânga.</p>
			</div>
		</div>
	);
};

export default ResearchersFlipcard;
