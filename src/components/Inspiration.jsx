import { Showcase } from './Showcase';
import { inspoData } from '../constants/inspoData';
import classes from '../styling/inspiration.module.scss';
export const Inspiration = () => {
	return (
		<div className={classes.container}>
			<h1 className='text'>Inspiration</h1>
			<Showcase jpg={inspoData} />{' '}
		</div>
	);
};

export default Inspiration;
