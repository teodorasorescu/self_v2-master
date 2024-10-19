import styles from '../styling/our.story.module.scss';
import Button from '@mui/material/Button';
import { S3_BUCKET } from '../constants/links';

const mottoImg = S3_BUCKET + '/motto.webp';

const OurStory = () => {
	return (
		<div className={styles.container}>
			<div className={styles.rowContainer}>
				<div className={styles.text}>
					<p className={styles.headline}>
						SELF este un brand care a luat naștere dintr-o dorință de exprimare
						personală, iubire față de design interior contemporan și simpatie
						față de artă și culori.
					</p>
					<p className={styles.subheadline}>
						Acesta este locul care îmbină estetica contemporană cu
						spiritualitatea. <br /> Noi încurajăm clienții să-și exploreze
						identitatea și să-și îmbunătățească relația cu sinele prin
						compunerea unor tablouri estetice personalizate, în raport cu
						sufletul, corpul și mintea lor.
					</p>
					<p className={styles.subheadline}>
						SELF se dedică asigurării calității și longevității produselor, prin
						alegerea atentă a materialelor, atât pentru tablouri, cât și pentru
						rame. Prin această abordare, brandul, nu doar că garantează
						durabilitatea produselor, însă contribuie și la un nivel mai mare de
						sustenabilitate.
					</p>
					<Button href='/despre-self' className={styles.button}>
						Descoperă mai multe despre universul SELF
					</Button>
				</div>
				<div className={styles.imgContainer}>
					<img src={mottoImg} alt='Embrace yourself with colors' />
				</div>
			</div>
		</div>
	);
};

export default OurStory;
