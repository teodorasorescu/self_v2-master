import { React, useEffect } from 'react';
import classes from './gift.guide.module.scss';
import ProductItem from '../../../features/products/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosters } from '../../../../reducers/slices/postersSlice';
import getPostersAction from '../../../../reducers/actions/getPostersAction';
import GiftPhoto from '../../../../components/features/journal/giftguide.webp';
import Button from '../../../ui/button/Button';
import { useNavigate } from 'react-router-dom';
const GiftGuide = () => {
	const dispatch = useDispatch();
	const storedPosters = useSelector(selectPosters);

	useEffect(() => {
		if (storedPosters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [dispatch]);

	const filter = (n1, n2) => {
		return storedPosters.filter(
			(poster) => poster.title === n1 || poster.title === n2
		);
	};

	const navigate = useNavigate();
	const navigateToCustom = () => {
		navigate('/customized-aura-portraits');
	};
	return (
		<div className={classes.container}>
			<h1>Holiday Gift Guide</h1>
			<h2>
				Get inspired with a selection of our favourite posters to gift your
				loved ones – including yourself – during the holiday season.
			</h2>
			<img src={GiftPhoto} alt='christmas tree' />
			<>
				<h4>to the</h4>
				<h1>Nature Lover</h1>
				<h4>
					Celebrate the beauty of the natural world with our stunning collection
					of nature-inspired posters. Designed for adventurers, dreamers, and
					those who find peace in the great outdoors, these posters are the
					perfect gift for anyone who cherishes nature's wonders.
				</h4>
				<div className={classes.postersList}>
					{filter('Sunset Feelings', 'Aurora Lights').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h4>to the</h4>
				<h1>Graceful&Kindest</h1>
				<h4>
					Celebrate the gentle beauty and quiet strength of the graceful and
					kind-hearted with posters that inspire and uplift. Each piece captures
					the essence of compassion and poise, with designs like Inner Blooming,
					which symbolizes growth and self-discovery, and Graceful Soul, a
					tribute to elegance and tranquility. These posters are perfect for
					creating a serene space that reflects the nurturing spirit and
					timeless beauty of their owner.
				</h4>
				<div className={classes.postersList}>
					{filter('Graceful Soul', 'Inner Blooming').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>

			<>
				<h4>to the</h4>
				<h1>Gentle Soul</h1>
				<h4>
					Celebrate the beauty of kindness and tranquility with Soul Compassion
					and Soft Rainbow, two posters crafted for the gentle soul. A tender
					tribute to empathy and understanding, this design radiates warmth and
					reminds us of the strength in kindness. A dreamy blend of delicate
					hues, it symbolizes hope and serenity, capturing the quiet beauty of
					life’s softer moments. Perfect for creating a space that feels like a
					sanctuary, these posters make a heartfelt gift for someone who
					embodies grace and gentleness.
				</h4>
				<div className={classes.postersList}>
					{filter('Soul Compassion', 'Soft Rainbow').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h4>to the</h4>
				<h1>Reckless Adventurer</h1>
				<h4>
					Fuel the spirit of adventure with our bold and dynamic posters.
					Perfect for those who crave the thrill of the unknown, individuality
					and freedom, they capture the courage it takes to carve your path and
					leave your mark on the world. These posters are a reminder that life
					is meant to be lived boldly. Inspire your wild side or gift them to
					the daredevil in your life who’s always ready for the next adventure.
				</h4>
				<div className={classes.postersList}>
					{filter('Self Expression', 'Mind Echoes').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h4>to the</h4>
				<h1>Inspirational Speaker</h1>
				<h4>
					Celebrate the transformative power of words with these beautifully
					crafted quote-inspired posters, perfect for those who inspire through
					authenticity and empathy. A striking reminder that true courage lies
					in openness, this design honors the profound connection forged through
					sharing our most authentic selves. These pieces are more than
					art—they’re affirmations that uplift and create a space where
					inspiration thrives, just like the words of a gifted speaker
				</h4>
				<div className={classes.postersList}>
					{filter(
						'There is Strength in Vulnerability',
						'Can You Treat Yourself with Sotfness When Things Are Hard? '
					).map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h2>
					And don't forget! <br /> The customized posters are the best for
					authentic gifts!{' '}
				</h2>
				<Button msg={'Customized Aura Portraits'} onClick={navigateToCustom} />
			</>
		</div>
	);
};

export default GiftGuide;
