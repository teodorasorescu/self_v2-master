import styles from '../styling/our.story.page.module.scss';
import OurWorld from '../images/aboutSelf.jpg';
import Motto from '../images/motto.webp';
import useMediaQuery from '@mui/material/useMediaQuery';
import OurWorldSmartphone from '../images/aboutSelfSmartphone.jpg';

const OurStoryPage = () => {
	const smartphoneScreen = useMediaQuery('(max-width:768px)');

	return (
		<div className={styles.container}>
			<img
				className={styles.ourWorldImg}
				src={smartphoneScreen ? OurWorldSmartphone : OurWorld}
				alt='Inspiration Board For Self'
			/>
			<div className={styles.textContainer}>
				<div className={styles.text}>
					<h2>
						<b> DESPRE SELF </b>
					</h2>
					<p className={styles.headline}>
						SELF este un brand <b className={styles.italic}>românesc</b>, care a
						luat naștere dintr-o dorință de exprimare personală, iubire față de
						design interior contemporan și simpatie față de artă și culori.
					</p>
					<p className={styles.subheadline}>
						Acesta este locul care îmbină estetica contemporană cu
						spiritualitatea. Noi ne concentrăm pe crearea unui spațiu favorabil,
						dedicat introspecției asupra sentimentelor și a trăirilor. <br />{' '}
						Cum? Ei bine, încurajând clienții să-și exploreze identitatea și
						să-și îmbunătățească relația cu sinele, prin compunerea unor
						tablouri estetice personalizate, în raport cu sufletul, corpul și
						mintea lor.
					</p>
					<p className={styles.subheadline}>
						SELF se dedică asigurării calității și longevității produselor, prin
						alegerea atentă a materialelor, atât pentru tablouri, cât și pentru
						rame. Prin această abordare, brandul, nu doar că garantează
						durabilitatea produselor, însă contribuie și la un nivel mai mare de
						sustenabilitate.
					</p>
				</div>
				<div className={styles.text}>
					<h4>
						<b>SCOPUL NOSTRU</b>
					</h4>
					<p className={styles.subheadline}>
						Misiunea noastră este de a construi un cadru, în care fiecare
						persoană să se simtă încurajată să-și exprime sentimentele într-un
						mod artistic și să-și analizeze trăirile. Ne dorim să aducem bucurie
						în fiecare casă, iar fiecare tablouri să se simtă ca o îmbrățisare
						de sine. Suntem dedicați să îndemnăm oamenii să se reconecteze cu
						sinele lor autentic și să exploreze universul creativității prin
						artă și culori. Atât tablourile, cât și ramele sunt concepute pentru
						a aduce o notă de frumusețe și semnificație în spațiul personal al
						clienților noștri. Ne străduim să transmitem un mesaj de
						pozitivitate și să aducem o sursă constantă de inspirație în viața
						celor care aleg SELF.
					</p>
				</div>
				<div className={styles.text}>
					<h4>
						<b>PE VIITOR</b>
					</h4>
					<p className={styles.subheadline}>
						Utilizarea materialelor de înaltă calitate este esențială pentru
						SELF, deoarece se dorește ca produsele să fie rezistente și să-și
						păstreze aspectul în timp. Pe viitor, Self speră să intensifice
						eforturile în această direcție, explorând noi modalități de a reduce
						impactul asupra mediului înconjurător și de a promova un stil de
						viață ecologic.
					</p>
				</div>

				<div className={styles.imgContainer}>
					<img src={Motto} alt='Embrace yourself with colors' />
				</div>
			</div>
		</div>
	);
};

export default OurStoryPage;
