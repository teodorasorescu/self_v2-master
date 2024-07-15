import styles from '../styling/sustenability.module.scss';

const Sustenability = () => {
	return (
		<div className={styles.container}>
			{' '}
			<div className={styles.imgContainer}></div>
			<div className={styles.text}>
				<h3>SUSTENABILITITATE</h3>
				<p className={styles.subheadline}>
					Confecționarea <b>ramelor</b> este facută din lemn natural certificat
					FSC 100%, astfel lemnul provine din surse prietenoase pentru păduri,
					gestionate în mod responsabil. Totodată, <b>tuburile</b> și{' '}
					<b>cutiile</b> în care sunt livrate tablourile din pânză, sunt
					confecționate din carton, susținând astfel folosirea materialelor
					ecologice, fără plastic. <br />
					Mai mult de atât, tuburile sunt confecționate din carton de înaltă
					calitate, ce poate fi reciclat cu usurință chiar și de mai multe ori.
					Producătorii tuburilor au redus poluarea procesării acestora cu 95%,
					prin reutilizarea fibrei. Aceștia au un sistem de management al
					calităţii conform standardelor ISO 9001, sistem de management de mediu
					ISO 14001 și sistem de management al securității și sănătății
					ocupaționale ISO 45001. <br />
					<a className={styles.redirectUrl} href='/sustenabilitate'>
						Citește mai mult despre sustenabilitatea tablourilor noastre
					</a>
				</p>
			</div>
		</div>
	);
};

export default Sustenability;
