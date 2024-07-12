import styles from '../styling/sustenability.module.scss';

const Sustenability = () => {
	return (
		<div className={styles.container}>
			{' '}
			<div className={styles.imgContainer}></div>
			<div className={styles.text}>
				<h3>SUSTENABILITITATE</h3>
				<p className={styles.subheadline}>
					Confecționarea ramelor este facută din lemn natural certificat FSC
					100%, astfel lemnul provine din surse prietenoase pentru păduri,
					gestionate în mod responsabil.{' '}
					<a className={styles.redirectUrl} href='/sustenabilitate'>
						Citește mai mult despre sustenabilitatea tablourilor noastre
					</a>
				</p>
			</div>
		</div>
	);
};

export default Sustenability;
