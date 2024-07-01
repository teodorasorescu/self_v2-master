import styles from '../styling/sustenability.page.module.scss';
import Canvas from '../images/canvas.webp';
const SustenabilityPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}></div>
			<div className={styles.text}>
				<h3>
					<b>SUSTENABILITITATE</b>
				</h3>
				<p className={styles.subheadline}>
					Confecționarea ramelor este facută din lemn natural certificat FSC
					100%, astfel lemnul provine din surse prietenoase pentru păduri,
					gestionate în mod responsabil. <br />
					Utilizarea materialelor de înaltă calitate este esențială pentru Self,
					deoarece se dorește ca produsele să fie rezistente și să-și păstreze
					aspectul în timp. Astfel, printarea se face pe canvas 100% bumbac. Pe
					viitor, Self speră să intensifice eforturile în această direcție,
					explorând noi modalități de a reduce impactul asupra mediului
					înconjurător și de a promova un stil de viață ecologic.
				</p>
			</div>{' '}
			<div className={styles.text}>
				<h4>
					<b>FOREST STEWARDSHIP COUNCIL® (FSC®)</b>
				</h4>

				<p className={styles.subheadline}>
					Consiliul pentru Administrarea Pădurilor® (FSC®) este o organizație
					globală, non-profit, dedicată promovării gestionării responsabile a
					pădurilor. FSC® definește standarde bazate pe principii convenite
					pentru administrarea responsabilă a pădurilor, susținute de părți
					interesate din domeniul mediului, social și economic. FSC® ajută la
					îngrijirea pădurilor, a oamenilor și faunei sălbatice.
					<p className={styles.italic}>
						<a href='https://fsc.org/en'>
							{' '}
							Pentru a afla mai multe despre Consiliul pentru Administrarea
							Pădurilor®, vizitați www.fsc.org
						</a>
						.
					</p>
					Deoarece majoritatea produselor noastre sunt fabricate din lemn,
					obținerea certificării FSC® este crucială pentru noi. Mai important,
					prin alegerea produselor certificate FSC®, clienții sprijină
					gestionarea responsabilă a pădurilor lumii.
				</p>
			</div>{' '}
			<div className={styles.canvasContainer}>
				<img src={Canvas} alt='canvas 100% bumbac, printare personalizata' />
			</div>
		</div>
	);
};

export default SustenabilityPage;
