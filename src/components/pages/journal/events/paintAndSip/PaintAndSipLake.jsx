import classes from './paintandsiplake.module.scss';
import ButtonHomePage from '../../../../ui/buttonHomePage/ButtonHomePage';
import { S3_BUCKET } from '../../../../../constants/links';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const PaintAndSipLake = () => {
	const paintAndSip = S3_BUCKET + '/ps7.webp';
	const ps2 = S3_BUCKET + '/ps2.webp';
	const ps4 = S3_BUCKET + '/ps4.webp';
	const ps5 = S3_BUCKET + '/ps5.webp';
	const ps6 = S3_BUCKET + '/ps6.webp';
	const ps1 = S3_BUCKET + '/ps1.webp';
	return (
		<div className={classes.container}>
			<LazyLoadImage
				className={classes.image}
				src={paintAndSip}
				width={350}
				alt='Group painting at outdoor Paint and Sip event – Guests sitting at a long decorated table with canvases, easels, and cocktails, painting flowers together under the trees.'
			/>{' '}
			<LazyLoadImage
				className={classes.image}
				src={ps6}
				width={350}
				alt='Close-up of hand sketching flowers on canvas – Participant drawing a floral arrangement at a Paint and Sip workshop with drinks and fresh flowers on the table.'
			/>
			<h1>Paint & Sip by the Lake</h1>
			<h2>Indigen / Space for the soul</h2>
			<>
				<h2>
					There was something magical about the Paint and Sip by the Lake
					gathering. It was the first event organized by our founder, Teo. She
					transformed a simple table outdoors into a beautiful spot for painting
					and having a good time. <br /> A pastel pink fabric draped over the
					table, while flowers arrangements in glass bottles created an
					effortlessly elegant centerpiece. The flowers that set the mood were
					freshly bought from a lady of Obor's Market calling out:
					<br />
					<b> “All artists come to me!” </b> <br />
					For our founder, that was a reason enough to choose her. <br />
					Each guest found a canvas and easel waiting, alongside a refreshing
					cocktail and a summer postcard, ready for an evening of color and
					creativity. At the sunset the view of the lake looked amazing and the
					table was filled with candle light.
				</h2>
			</>
			<h2>
				What made this Paint and Sip event truly memorable was the people around
				the table. From the two kids experimenting with their first brushstrokes
				to the mother-daughter duo sharing a quiet creative moment, everyone
				felt amazing. The evening became less about technique and more about
				togetherness, an exchange of stories, laughter and inspiration.
			</h2>
			<LazyLoadImage
				className={classes.image}
				src={ps1}
				width={350}
				alt='Guests painting and sipping cocktails by the lake – Creative workshop with canvases, pastel table décor, and laughter shared in the summer evening light.'
			/>{' '}
			<LazyLoadImage
				className={classes.image}
				src={ps2}
				width={350}
				alt='Pop-up art display with summer poster collection – Table set up on sand with framed posters, colorful prints, and fresh flowers from Obor Market.'
			/>
			<>
				<h2>
					This little pop-up table was filled with canvas prints of artists such
					as Iulia Moisev, <a href='/journal/daia-grigore'>Daia Grigore</a>,
					<a href='/journal/silvie-illustrations'>Silvie Illustrations</a>,{' '}
					<a href='/journal/ciocarlica'>Ciorcârlica</a> and{' '}
					<a href='/journal/ana-liana'>Ana Liana</a>. The Summer Collection of
					colored messages and playful drawings on canvas, born out of a quiet
					ritual (sketching every morning to calm my thoughts and start the day
					with softness) was there too.
				</h2>
				<h1>Summer Postcard</h1>
				<h2>
					It’s August 2025. Bucharest. <br /> The sun is setting over the table,
					soft light spilling across our canvases. We sit outside, painting and
					chatting as a gentle breeze cools the warm air. <br /> Candles flicker
					nearby, casting small pools of golden light. The sound of our voices
					blend with the evening’s calm, while the world slowly fades into
					twilight.
				</h2>
				<LazyLoadImage
					className={classes.image}
					src={ps4}
					width={350}
					alt='Framed summer artwork with typography and colors – Hand-drawn poster reading “Summer Evenings, Fresh Flowers, Romance, Self Love” displayed at outdoor pop-up.'
				/>{' '}
				<LazyLoadImage
					className={classes.image}
					src={ps5}
					width={350}
					alt='Collection of art prints and posters on display – Minimalist and colorful summer-themed illustrations, typography, and abstract designs showcased alongside flowers.'
				/>{' '}
				<a href='/journal'>
					<ButtonHomePage msg='Read more from our journal' />
				</a>{' '}
			</>
		</div>
	);
};

export default PaintAndSipLake;
