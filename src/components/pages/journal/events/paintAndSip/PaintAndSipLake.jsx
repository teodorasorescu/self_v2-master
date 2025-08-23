import classes from './paintandsiplake.module.scss';
import ButtonHomePage from '../../../../ui/buttonHomePage/ButtonHomePage';
import { S3_BUCKET } from '../../../../../constants/links';

const PaintAndSipLake = () => {
	const giftPhoto = { S3_BUCKET } + '/giftguide.webp';

	return (
		<div className={classes.container}>
			<h1>Paint & Sip by the Lake</h1>

			<img src={giftPhoto} alt='christmas tree' />
			<h2></h2>
			<>
				<h4>
					Celebrate the beauty of the natural world with our stunning collection
					of nature-inspired posters. Designed for adventurers, dreamers, and
					those who find peace in the great outdoors, these posters are the
					perfect gift for anyone who cherishes nature's wonders.
				</h4>
			</>
			<>
				<h2>
					And don't forget! <br /> The customized posters are the best for
					authentic gifts!{' '}
				</h2>
				<ButtonHomePage msg={'Customized Aura Portraits'} />
			</>
		</div>
	);
};

export default PaintAndSipLake;
