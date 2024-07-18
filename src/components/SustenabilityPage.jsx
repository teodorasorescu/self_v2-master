import styles from '../styling/sustenability.page.module.scss';
const SustenabilityPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}></div>
			<div className={styles.text}>
				<h3>
					<b>SUSTENABILITITATE</b>
				</h3>
				<p className={styles.subheadline}>
					Confecționarea <b>ramelor</b> este facută din lemn natural certificat
					FSC 100%, astfel lemnul provine din surse prietenoase pentru păduri,
					gestionate în mod responsabil. Totodată, <b>tuburile</b> și{' '}
					<b>cutiile</b> în care sunt livrate tablourile din pânză, sunt
					confecționate din carton, susținând astfel folosirea materialelor
					ecologice, fără plastic. Utilizarea materialelor de înaltă calitate
					este esențială pentru Self, deoarece se dorește ca produsele să fie
					rezistente și să-și păstreze aspectul în timp. Astfel, printarea se
					face pe <b>canvas 100% bumbac</b>. <br /> <br />
					Mai mult de atât, <b>tuburile</b> sunt confecționate din carton de
					înaltă calitate, ce poate fi reciclat cu usurință chiar și de mai
					multe ori. Producătorii tuburilor au redus poluarea procesării
					acestora cu 95%, prin reutilizarea fibrei. Aceștia au un sistem de
					management al calităţii conform standardelor ISO 9001, sistem de
					management de mediu ISO 14001 și sistem de management al securității
					și sănătății ocupaționale ISO 45001. <br />
					<br />
					Pe viitor, SELF speră să intensifice eforturile în această direcție,
					explorând noi modalități de a reduce impactul asupra mediului
					înconjurător și de a promova un stil de viață ecologic. Din păcate,
					ambalarea tablourilor nu este în totalitate ecologică, însă vrem să
					atingem un nivel cât mai mare de sustenabilitate pe viitor, înlocuind
					elemente de plastic (folia de protecție cu bule, pungi, benzi).
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
					</p>
					Deoarece majoritatea produselor noastre sunt fabricate din lemn,
					obținerea certificării FSC® este crucială pentru noi. Mai important,
					prin alegerea produselor certificate FSC®, clienții sprijină
					gestionarea responsabilă a pădurilor lumii.
				</p>
			</div>{' '}
		</div>
	);
};

export default SustenabilityPage;
