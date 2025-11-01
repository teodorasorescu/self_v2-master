import '../styling/inspoHome.scss';
import { inspoHome } from '../constants/inspoHome';

export const HomeInspirationShowcase = () => {
	return (
		<div className='gradientPhotosContainer'>
			<h3 className='text'>Inspiration</h3>
			<div className='imagesContainer'>
				{inspoHome.map((c, i) => {
					return (
						<div key={i} className='imgItem'>
							<div
								className='imgBox'
								style={{ backgroundImage: `${c.image}` }}
							></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeInspirationShowcase;
