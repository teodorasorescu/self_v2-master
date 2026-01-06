import classes from './paintandsiplake.module.scss';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonHomePage from '../../../ui/buttonHomePage/ButtonHomePage';
import { S3_BUCKET } from '../../../../constants/links';

const PavArticle = () => {
	const paintAndSip = S3_BUCKET + '/iuliaVerzanCollection.webp';
	const ps2 = S3_BUCKET + '/girlsnightout.webp';
	const ps4 = S3_BUCKET + '/pav1.webp';
	const ps5 = S3_BUCKET + '/pav4.webp';
	const ps6 = S3_BUCKET + '/pav3.webp';
	const ps1 = S3_BUCKET + '/pav2.webp';
	return (
		<div className={classes.container}>
			<h1>PAV and Self Expression Through Art</h1>
			<>
				<h2>
					Art is the quiet language of what we feel but can’t always say.
					Through color, texture and form, we give shape to emotions, memories,
					and inner questions: without needing permission or explanation. Each
					gesture becomes a trace of presence; each work, a moment of honesty.
					<br />
				</h2>
			</>{' '}
			<LazyLoadImage
				className={classes.image}
				src={ps6}
				width={350}
				alt='Close-up of hand sketching flowers on canvas – Participant drawing a floral arrangement at a Paint and Sip workshop with drinks and fresh flowers on the table.'
			/>
			<h2 style={{ fontStyle: 'italic' }}>
				“The paintings I created have a collage-like appearance, because they
				were originally conceived in the form of a collage. Because of the shock
				of a possible loss, I reconsidered my relationships with the closest
				people in my life and conducted a research study. That’s how I arrived
				at the idea of the collage. For me, people come from different worlds,
				each carrying their own personal and unique baggage, and they join with
				another on a new sheet of paper, building a family. I wanted to
				demonstrate the idea of human differences in each family member who
				comes from a different environment. Through the collage, I feel that I
				was able to capture the essence of family life through shared memories
				and experiences.”
			</h2>
			<LazyLoadImage
				className={classes.image}
				src={ps1}
				width={350}
				alt='Guests painting and sipping cocktails by the lake – Creative workshop with canvases, pastel table décor, and laughter shared in the summer evening light.'
			/>{' '}
			<h1>“What Do You Want To Be When You Grow Up?”</h1>
			<h2>
				The dolls represent divergent paths: a soldier, an elegant Parisian-like
				figure, perhaps the artist herself. This symbolic play reflects the
				openness of youth: every choice still possible.
			</h2>
			<LazyLoadImage
				className={classes.image}
				src={ps4}
				width={350}
				alt='Framed summer artwork with typography and colors – Hand-drawn poster reading “Summer Evenings, Fresh Flowers, Romance, Self Love” displayed at outdoor pop-up.'
			/>{' '}
			<h1>“Alfonso is a stabilizing presence for me.”</h1>
			<h2>
				The painting "Don't Wither, Alfonso!" was born from care and tenderness:
				as Alfonso faced illness, PAV sought to be with him and ease his
				suffering. In this intimate exchange, Alfonso is her, and she is him: a
				reflection on shared vulnerability and mutual presence.
			</h2>
			<LazyLoadImage
				className={classes.image}
				src={ps5}
				width={350}
				alt='Collection of art prints and posters on display – Minimalist and colorful summer-themed illustrations, typography, and abstract designs showcased alongside flowers.'
			/>{' '}
			<h2>
				PAV is a Bucharest-based visual artist whose practice explores identity,
				emotional structure, and the psychology of colour. Her works blend
				collage thinking with expressive brushwork, creating compositions she
				describes as “emotional fissures”, fractures that reveal deeper layers
				of experience. A rising figure in young Romanian art, PAV has exhibited
				repeatedly at Art Safari Bucharest and was selected for the Graduate
				Curated exhibition at MARe (Museum of Recent Art) in 2024. She also
				organizes and curates exhibitions with fellow painters from the National
				University of Arts, contributing actively to her artistic community.
				“The world of PAV” is one of introspection, intensity, and bold
				chromatic storytelling.
			</h2>
			<a href='/journal/andra-victoria-popescu-pav'>
				<ButtonHomePage msg='SEE HER ARTWORKS' />
			</a>{' '}
		</div>
	);
};

export default PavArticle;
