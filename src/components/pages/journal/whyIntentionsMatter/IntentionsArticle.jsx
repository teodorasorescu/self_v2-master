import classes from './paintandsiplake.module.scss';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { S3_BUCKET } from '../../../../constants/links';
import CardsShowcase from '../../cardsShowcase/CardsShowcase';

const IntentionsArticle = () => {
	const ps1 = S3_BUCKET + '/odysee&adelaholdon.jpg';
	const ps3 = S3_BUCKET + '/7.png';
	const ps4 = S3_BUCKET + '/8.png';
	const ps2 = S3_BUCKET + '/star_intention.webp';
	return (
		<div className={classes.container}>
			<LazyLoadImage
				className={classes.image}
				src={ps1}
				width={350}
				alt='Close-up of hand sketching flowers on canvas – Participant drawing a floral arrangement at a Paint and Sip workshop with drinks and fresh flowers on the table.'
			/>
			<h1>Why Intention Shapes a Better Life</h1>
			<>
				<h2>
					Setting intentions and goals constantly helps you build a better life
					because it aligns your inner world with your actions: again and again,
					not just once.
					<br />
				</h2>
			</>{' '}
			<h1>1. It gives direction to your energy</h1>
			<h2>
				Without intentions, energy gets scattered. When you set an intention,
				you decide where your attention goes. What you focus on shapes your
				choices, habits and reactions, often unconsciously. Intentions act like
				an internal compass: This matters. This is where I’m heading.
			</h2>
			<h1>2. It rewires your mind through repetition</h1>
			<h2>
				The brain learns through repetition. When you regularly set goals and
				intentions, you’re training your mind to look for opportunities,
				solutions, and patterns that support them. This isn’t magic, it’s
				awareness. Over time, your default thoughts shift from reacting to
				creating.
			</h2>
			<h1>3. It connects meaning to action</h1>
			<h2>
				Goals without intention can feel empty. Intentions without action remain
				abstract. Together, they create meaning. <br />
				Intentions define why. <br /> Goals define how. <br />
				When both are present, motivation becomes internal, not forced.
			</h2>
			<h1>So, how to set your intentions?</h1>
			<h2>1. Take out the match</h2>{' '}
			<LazyLoadImage
				className={classes.image}
				src={ps3}
				width={350}
				alt='Framed summer artwork with typography and colors – Hand-drawn poster reading “Summer Evenings, Fresh Flowers, Romance, Self Love” displayed at outdoor pop-up.'
			/>{' '}
			<h2>2. Strike the match</h2> <h2>3. Light the candle</h2>{' '}
			<LazyLoadImage
				className={classes.image}
				src={ps2}
				width={350}
				alt='Collection of art prints and posters on display – Minimalist and colorful summer-themed illustrations, typography, and abstract designs showcased alongside flowers.'
			/>{' '}
			<h2>4. Set an intention or make a wish</h2>
			<LazyLoadImage
				className={classes.image}
				src={ps4}
				width={350}
				alt='Collection of art prints and posters on display – Minimalist and colorful summer-themed illustrations, typography, and abstract designs showcased alongside flowers.'
			/>{' '}
			<h2>After, wait and watch your intention getting sealed.</h2>{' '}
			<CardsShowcase title='Wish Cards' group='holiday-card' />
		</div>
	);
};

export default IntentionsArticle;
