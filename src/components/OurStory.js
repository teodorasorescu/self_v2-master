import styles from '../styling/our.story.module.scss';
import OurWorld from '../images/ourworld.JPG';
import Motto from '../images/motto.png';

const OurStory = () => {
	return (
		<div className={styles.container}>
			<img className={styles.ourWorldImg} src={OurWorld} alt='ourworld' />
			<div className={styles.rowContainer}>
				<div className={styles.text}>
					<p className={styles.headline}>
						SELF este un brand <b className={styles.italic}>românesc</b>, care a
						luat naștere dintr-o dorință de exprimare personală, iubire față de
						design interior contemporan și simpatie față de artă și culori.
					</p>
					<p className={styles.subheadline}>
						Acesta este locul care îmbină estetica contemporană cu
						spiritualitatea. Noi ne concentrăm pe crearea unui spațiu favorabil,
						dedicat introspecției asupra sentimentelor și a trăirilor. <br />{' '}
						Cum? Ei bine, punând accent pe autocunoaștere și dezvoltare
						personală. Self încurajează clienții să-și exploreze identitatea și
						să-și îmbunătățească relația cu sinele prin compunerea unor postere
						estetice personalizate, în raport cu sufletul, corpul și mintea lor.
					</p>
					<p className={styles.subheadline}>
						SELF se dedică asigurării calității și longevității produselor, prin
						alegerea atentă a materialelor, atât pentru postere, cât și pentru
						rame. Prin această abordare, brandul, nu doar că garantează
						durabilitatea produselor, însă contribuie și la un nivel mai mare de
						sustenabilitate.
					</p>
				</div>
				<div className={styles.imgContainer}>
					<img src={Motto} alt='motto' />
				</div>
			</div>
		</div>
	);
};

export default OurStory;
