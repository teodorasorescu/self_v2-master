import classes from './paintandsiplake.module.scss';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonHomePage from '../../../ui/buttonHomePage/ButtonHomePage';
import { S3_BUCKET } from '../../../../constants/links';

const AutumnCollectionArticle = () => {
	const paintAndSip = S3_BUCKET + '/iuliaVerzanCollection.webp';
	const ps2 = S3_BUCKET + '/girlsnightout.webp';
	const ps4 = S3_BUCKET + '/anawithchair.webp';
	const ps5 = S3_BUCKET + '/trench.webp';
	const ps6 = S3_BUCKET + '/cat.webp';
	const ps1 = S3_BUCKET + '/mestabi.webp';
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
			<h1>Autumn Poster Collection</h1>
			<>
				<h2>
					This poster & clay objects collection turns the poetry of everyday
					life into intimate scenes of color and calm. Chairs, cups, coats and
					cinnamon rolls become quiet witnesses to small rituals: a cup of tea,
					a walk through the city, a night shared with friends. Blending
					painting, illustration and design, the works balance nostalgia witha
					distinctly modern sensibility.
					<br />
					Textures feel lived-in; colors hum softly between warmth and
					playfulness. Each piece invites pause, an invitation to notice beauty
					in what surrounds us: the patterns of habit, the tenderness of
					solitude, the joy of simple pleasures. Together, they form a visual
					language of comfort, crafted with affection for the ordinary.
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
			<LazyLoadImage
				className={classes.image}
				src={ps2}
				width={350}
				alt='Guests painting and sipping cocktails by the lake – Creative workshop with canvases, pastel table décor, and laughter shared in the summer evening light.'
			/>{' '}
			<a href='/journal'>
				<ButtonHomePage msg='Read more from our journal' />
			</a>{' '}
		</div>
	);
};

export default AutumnCollectionArticle;
