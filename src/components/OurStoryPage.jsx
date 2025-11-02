import styles from '../styling/our.story.page.module.scss';

import { S3_BUCKET } from '../constants/links';

const mottoImg = S3_BUCKET + '/motto.webp';
const imgTitle = S3_BUCKET + '/aboutTeo.webp';

const OurStoryPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<div className={styles.text}>
					<h2>
						<b>About Us</b>
					</h2>
					<p className={styles.subheadline}>
						Self Posters was born from the idea that the{' '}
						<b className={styles.boldColor}>colors</b> around us shape our mood
						and well-being. More than just décor, our posters are designed to
						bring energy, inspiration, and a touch of art to your space.{' '}
						<b className={styles.boldColor}>Embrace yourself</b>, each of us
						carries a unique perspective and our designs are separate
						interpretations of this foundation. By collaborating with{' '}
						<b className={styles.boldColor}>independent artists</b>, we create a
						collection where every piece tells a story while sharing a common
						thread:{' '}
						<b className={styles.boldColor}>
							the power of self-expression through art
						</b>
						. Self Posters is more than a shop; it’s a space where creativity
						thrives and where walls become a canvas for personality.
					</p>
				</div>{' '}
				<div className={styles.imgContainer}>
					<img src={imgTitle} width={400} />
				</div>
				<div className={styles.text}>
					<h4>
						<b>Our Mission</b>
					</h4>
					<p className={styles.subheadline}>
						Our mission is to bridge the gap between{' '}
						<b className={styles.boldColor}>talented emerging artists</b> and
						those looking to bring{' '}
						<b className={styles.boldColor}>unique expressive designs</b>, into
						their homes. We collaborate with creatives from diverse backgrounds,
						giving them a platform to showcase their work. By fostering this{' '}
						<b className={styles.boldColor}>community</b>, we not only bring
						exclusive artwork to our customers but also support the artists
						behind each piece.
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurStoryPage;
